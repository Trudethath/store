import WishlistTable from "./WishlistTable"
import AddItemsToCart from "./AddItemsToCart"

import { AppContext } from "../AppProvider"
import React, { useContext, useState } from "react"

function FavoritesLayout() {
  const { items } = useContext(AppContext)
  const [selectedItems, setSelectedItems] = useState([])

  const sendSelectedItems = (arr) => {
    setSelectedItems(arr)
  }

  return (
    <div>
      <div className='wishlist-layout'>
        <h2>My wishlist</h2>
        <div className='wishlist-container'>
          <WishlistTable items={items} sendSelectedItems={sendSelectedItems} />
          <AddItemsToCart selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  )
}

export default FavoritesLayout
