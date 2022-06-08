import React from "react"
import { Routes, Route } from "react-router-dom"
import FavoritesLayout from "./FavoritesLayout"
import Home from "./Home"
import ItemsLayout from "./ItemsLayout"
import LogIn from "./LogIn"
import CartLayout from "./CartLayout"
import ItemDetails from "./ItemDetails"

function Content() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<ItemsLayout />} />
      <Route path='/sale' element={<ItemsLayout />} />
      <Route path='/men' element={<ItemsLayout />} />
      <Route path='/women' element={<ItemsLayout />} />
      <Route path='/all' element={<ItemsLayout />} />
      <Route path='/signIn' element={<LogIn />} />
      <Route path='/favorite' element={<FavoritesLayout />} />
      <Route path='/cart' element={<CartLayout />} />
      <Route path='/itemDetails' element={<ItemDetails />} />
    </Routes>
  )
}

export default Content
