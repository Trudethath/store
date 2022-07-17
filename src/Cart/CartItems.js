import React from "react"
import CartItem from "./CartItem"

function CartItems(props) {
  const { cartItems } = props
  const mapCartItems = cartItems.map((item, index) => {
    return <CartItem key={index} item={item} />
  })

  return <div className='cart-flexbox'>{mapCartItems}</div>
}

export default CartItems
