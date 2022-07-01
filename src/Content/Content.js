import React from "react"
import { Routes, Route } from "react-router-dom"
import WishlistLayout from "../Wishlist/WishlistLayout"
import Home from "./Home"
import ItemsLayout from "./ItemsLayout"
import LogInTemplate from "./LogInTemplate"
import SignUpTemplate from "./SignUpTemplate"
import CartLayout from "../Cart/CartLayout"
import ItemDetailsLayout from "./ItemDetailsLayout"

function Content() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<ItemsLayout />} />
      <Route path='/sale' element={<ItemsLayout />} />
      <Route path='/men' element={<ItemsLayout />} />
      <Route path='/women' element={<ItemsLayout />} />
      <Route path='/all' element={<ItemsLayout />} />
      <Route path='/signIn' element={<LogInTemplate />} />
      <Route path='/signUp' element={<SignUpTemplate />} />
      <Route path='/wishlist' element={<WishlistLayout />} />
      <Route path='/cart' element={<CartLayout />} />
      <Route path='/itemDetails' element={<ItemDetailsLayout />} />
    </Routes>
  )
}

export default Content
