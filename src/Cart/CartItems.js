import React, { useContext } from "react"
import { AppContext } from "../AppProvider"
import CartItem from "./CartItem"

function CartItems() {
  const { cartItems } = useContext(AppContext)

  let tempCartItems = [...cartItems]

  const filterCartItems = cartItems.filter((item, index) => {
    return tempCartItems.indexOf(item) === index
  })

  const mapCartItems = filterCartItems.map((item, index) => {
    return <CartItem key={index} item={item} />
  })

  return <div className='cart-flexbox'>{mapCartItems}</div>
}

export default CartItems
