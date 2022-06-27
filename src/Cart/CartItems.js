import React, { useContext } from "react"
import { AppContext } from "../AppProvider"
import CartItem from "./CartItem"

function CartItems() {
  const { cartItems } = useContext(AppContext)

  const mapCartItems = cartItems.map((item, index) => {
    return <CartItem key={index} item={item} />
  })

  return <div className='cart-flexbox'>{mapCartItems}</div>
}

export default CartItems
