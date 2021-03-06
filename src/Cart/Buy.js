import axios from "axios"
import URLS from "../utils/URLS"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../AppProvider"
import { AuthContext } from "../auth/AuthProvider"

function Buy(props) {
  const { cartItems } = props
  const { setCartItems } = useContext(AppContext)
  const { user } = useContext(AuthContext)
  let navigate = useNavigate()

  let products_total = 0
  let shipping = 0
  let payment = 0
  let vat = 23

  cartItems.forEach((elem) => {
    products_total += elem.item.price * elem.chosenParameters.quantity
  })

  let subtotal = products_total + shipping + payment

  const total = (subtotal * parseFloat(`1.${vat}`)).toFixed(2)

  const updateItemInDb = (model, params, fetchedItem) => {
    console.log("update item", model)
    const quantityObject = fetchedItem.quantity

    Object.keys(quantityObject).forEach((key) => {
      if (parseInt(key.replace(/[^0-9]/g, "")) === params.size) {
        quantityObject[key] = quantityObject[key] - params.quantity
      }
    })

    let quantityString = "{"

    Object.keys(quantityObject).forEach((key) => {
      quantityString += `${key}: ${quantityObject[key]},`
    })
    quantityString += "}"

    const queriedData = `
    mutation{
      updateItemByModel(model:"${model}", updateItemInput:{
         quantity:${quantityString}
      }){
        model
      }
    }
    `

    axios
      .post("http://localhost:3000/graphql/", {
        query: queriedData,
      })
      .then((response) => {
        console.log("mopdified")
        console.log(response)
      })
      .catch((error) => {
        console.log("not modifieid")
        console.log(error)
      })
  }

  const fetchByModel = (model, params) => {
    console.log("fetch by model", model)
    const queriedData = `
    query{
      itemByModel(model: "${model}"){
        itemId
        model,
        gender ,
        release_year,
        price,
        onSale,
        images,
        quantity
      }
      }
    `

    axios
      .post("http://localhost:3000/graphql/", {
        query: queriedData,
      })
      .then((response) => {
        const fetchedItem = response.data.data.itemByModel
        validateIfAvaiable(fetchedItem, model, params)
        return response
      })
      .catch((error) => {
        return error
      })
  }

  const checkIfItemIsAvaiable = (model, params, fetchedItem) => {
    console.log("check avai", model)
    // If item exists
    if (fetchedItem) {
      console.log("item exists")
      const quantityObject = fetchedItem.quantity
      let sizeArray = []

      // Iterates through quantityObject and assigning values to sizeArray: ['size','quantity']
      Object.keys(quantityObject).forEach((key) => {
        sizeArray.push([key.replace(/[^0-9]/g, ""), quantityObject[key]])
      })

      let isAvaiable = false
      // check if fetchedItem has enough items for chosen size
      sizeArray.forEach((set) => {
        if (parseInt(set[0]) === params.size) {
          if (parseInt(params.quantity) <= parseInt(set[1])) {
            isAvaiable = true
          } else {
            isAvaiable = false
          }
        }
      })

      return isAvaiable
    } else return false
  }

  const validateIfAvaiable = (fetchedItem, model, params) => {
    if (checkIfItemIsAvaiable(model, params, fetchedItem)) {
      console.log("item is avaiable", model)
      updateItemInDb(model, params, fetchedItem)
    } else {
      console.log("Item is unavaiable", model)
      alert(`item ${model} is unavaiable`)
    }
  }

  const handleCheckout = () => {
    if (cartItems.length !== 0) {
      cartItems.forEach((elem) => {
        const model = elem.item.model
        const params = elem.chosenParameters
        fetchByModel(model, params)
      })
      if (createInvoice()) {
        const invoiceData = {
          cartItems: cartItems,
          price_summary: {
            shipping: shipping,
            payment: payment,
            vat: vat,
            products_total: products_total,
            subtotal: subtotal,
            total: total,
          },
        }
        setCartItems([]) //clearing cart
        const isOk = true
        navigate("/invoice", { state: { invoiceData, isOk } })
      }
    } else {
      console.log("cart is empty")
    }
  }

  const createInvoice = () => {
    console.log("create invoice")
    const invoice = {
      models: cartItems,
      shipping: shipping,
      payment: payment,
      subtotal: subtotal,
      vat: vat,
      total: total,
      user: user,
    }

    console.log(post_create_invoice(invoice))
    return true // only temporary
  }

  const post_create_invoice = (invoice) => {
    console.log("post create invoice: ", invoice)
    return axios
      .post(URLS.create_invoice_url, invoice)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }

  return (
    <div className='cart-summary'>
      <h3>Total amount</h3>
      <div className='prices'>
        <h4>
          Products: <span className='price'>${products_total}</span>
        </h4>

        <h4>
          Shipping:{" "}
          <span className='price'>
            {shipping === 0 ? "Free" : `$${shipping}`}
          </span>
        </h4>

        <h4>
          Payment cost:{" "}
          <span className='price'>
            {payment === 0 ? "Free" : `$${payment}`}
          </span>
        </h4>
        <hr />
        <h4>
          Subtotal:{" "}
          <span className='price'>${products_total + shipping + payment}</span>
        </h4>

        <h4>
          VAT ({vat}%): <span className='price'>${total}</span>
        </h4>
      </div>
      <input
        type='button'
        className='checkout'
        value='Checkout'
        onClick={handleCheckout}
        disabled={cartItems.length === 0 && true}
      />
    </div>
  )
}

export default Buy
