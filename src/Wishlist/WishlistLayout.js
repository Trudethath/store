import WishlistTable from "./WishlistTable"
import AddItemsToCart from "./AddItemsToCart"
import { AppContext } from "../AppProvider"
import React, { useContext, useState } from "react"

function WishlistLayout() {
  const { wishlistArray } = useContext(AppContext)
  // const [allSelectedItems, setAllSelectedItems] = useState([])

  return (
    <div>
      <div className='wishlist-layout'>
        <h2>My wishlist</h2>
        <div className='wishlist-container'>
          <WishlistTable wishlistArray={wishlistArray} />
          <AddItemsToCart />
        </div>
      </div>
    </div>
  )
}

export default WishlistLayout
