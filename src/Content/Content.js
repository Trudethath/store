import React from "react"
import { Routes, Route } from "react-router-dom"
import WishlistLayout from "../Wishlist/WishlistLayout"
import Home from "./Home"
import LogInTemplate from "./LogInTemplate"
import SignUpTemplate from "./SignUpTemplate"
import CartLayout from "../Cart/CartLayout"
import ItemDetailsLayout from "./ItemDetailsLayout"
import Profile from "./Profile"
import RequireAuth from "../auth/RequireAuth"
import AllItems from "./AllItems"
import WomenItems from "./WomenItems"
import MenItems from "./MenItems"
import SaleItems from "./SaleItems"
import NewItems from "./NewItems"
import Invoice from "../Cart/Invoice"

function Content() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewItems />} />
      <Route path='/sale' element={<SaleItems />} />
      <Route path='/men' element={<MenItems />} />
      <Route path='/women' element={<WomenItems />} />
      <Route path='/all' element={<AllItems />} />
      <Route path='/signIn' element={<LogInTemplate />} />
      <Route path='/signUp' element={<SignUpTemplate />} />
      <Route path='/invoice' element={<Invoice />} />
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
      <Route path='/itemDetails/:model' element={<ItemDetailsLayout />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default Content
