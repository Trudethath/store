import React from "react"
import { Routes, Route } from "react-router-dom"
import FavoritesLayout from "./FavoritesLayout"
import Home from "./Home"
import ItemsLayout from "./ItemsLayout"
import SignInLayout from "./SignInLayout"
import CartLayout from "./CartLayout"

function Content() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<ItemsLayout />} />
      <Route path='/sale' element={<ItemsLayout />} />
      <Route path='/men' element={<ItemsLayout />} />
      <Route path='/women' element={<ItemsLayout />} />
      <Route path='/signIn' element={<SignInLayout />} />
      <Route path='/favorite' element={<FavoritesLayout />} />
      <Route path='/cart' element={<CartLayout />} />
    </Routes>
  )
}

export default Content
