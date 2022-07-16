import { useContext } from "react"
import { AppContext } from "../AppProvider"

function AddItemsToCart(props) {
  // const { selectedItems } = props
  // const { addToCart } = useContext(AppContext)

  // let finalItems = [...selectedItems]

  // let totalPrice = 0
  // finalItems.forEach((item) => {
  //   totalPrice += item.price * item.selectedQuantity
  // })

  // const handleClick = () => {
  //   addToCart(finalItems)
  // }

  // const render = (
  //   <div className='addToCart'>
  //     <h4>Selected items: {finalItems.length}</h4>
  //     <h3>Total: {totalPrice} $</h3>{" "}
  //     <button onClick={handleClick}>
  //       <h3>Add to cart</h3>
  //     </button>
  //   </div>
  // )

  return "add items to cart"
}

export default AddItemsToCart
