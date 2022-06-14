import React, { useContext } from "react"
import { AppContext } from "../AppProvider"
import CartItem from "./CartItem"

function CartItems() {
  const { cartItems } = useContext(AppContext)

  let tempCartItems = [...cartItems]

  // console.log(tempCartItems)

  const mapCartItems = tempCartItems.map((item, index) => {
    return <CartItem key={index} item={item} />
  })

  return <div className='cart-flexbox'>{mapCartItems}</div>
}

export default CartItems
