import React, { useContext } from "react"
import { BsX } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../AppProvider"

function CartItem(props) {
  const { model, gender, price, images } = props.item.item
  const { chosenParameters } = props.item // size, color, quantity
  const { removeItemFromCart } = useContext(AppContext)
  let navigate = useNavigate()

  const handleClick = () => {
    removeItemFromCart(props.item)
  }

  return (
    <div className='cart-item'>
      <img src={require("../images/" + images.img1)} alt={model} />
      <div>
        <h3>
          {model} - ${price}
        </h3>
        <h5>{gender === "female" ? "Women's" : "Men's"}</h5>
        <h4>
          <b>Size: </b> {chosenParameters.size}
        </h4>
        <h4>
          <b>Color: </b> {chosenParameters.color}
        </h4>

        <h4>
          <b>Quantity: </b> {chosenParameters.quantity}
        </h4>
      </div>
      <div>
        <h3 className='total'>
          <b>Total: ${(price * chosenParameters.quantity).toFixed(2)}</b>
        </h3>
      </div>
      <div className='clickable'>
        <span
          className='link'
          onClick={() => navigate(`/itemDetails/${model}`)}
        >
          Go to product
        </span>
        <i>
          <BsX onClick={handleClick} />
        </i>
      </div>
    </div>
  )
}

export default CartItem
