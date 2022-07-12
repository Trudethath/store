import React from "react"
import { Routes, Route } from "react-router-dom"
import WishlistLayout from "../Wishlist/WishlistLayout"
import Home from "./Home"
import ItemsLayout from "./ItemsLayout"
import LogInTemplate from "./LogInTemplate"
import SignUpTemplate from "./SignUpTemplate"
import CartLayout from "../Cart/CartLayout"
import ItemDetailsLayout from "./ItemDetailsLayout"
import Profile from "./Profile"
import RequireAuth from "../auth/RequireAuth"

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
      <Route
        path='/wishlist'
        element={
          <RequireAuth>
            <WishlistLayout />
          </RequireAuth>
        }
      />
      <Route
        path='/cart'
        element={
          <RequireAuth>
            <CartLayout />
          </RequireAuth>
        }
      />
      <Route path='/itemDetails' element={<ItemDetailsLayout />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default Content
