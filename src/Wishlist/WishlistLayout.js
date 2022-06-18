import WishlistTable from "./WishlistTable"
import AddItemsToCart from "./AddItemsToCart"

import { AppContext } from "../AppProvider"
import React, { useContext, useState } from "react"

function FavoritesLayout() {
  const { items, addToCart } = useContext(AppContext)
  const [allSelectedItems, setAllSelectedItems] = useState([])

  const removeItemById = (id) => {
    const copySelectedItems = [...allSelectedItems]
    const newArr = copySelectedItems.filter((elem) => elem.id !== id)
    setAllSelectedItems(newArr)
  }

  const sendItemsToCart = (items) => {
    console.log("Send")
  }

  return (
    <div>
      <div className='wishlist-layout'>
        <h2>My wishlist</h2>
        <div className='wishlist-container'>
          <WishlistTable
            items={items}
            allSelectedItems={allSelectedItems}
            setAllSelectedItems={setAllSelectedItems}
            removeItemById={removeItemById}
          />
          <AddItemsToCart
            selectedItems={allSelectedItems}
            sendItemsToCart={sendItemsToCart}
          />
        </div>
      </div>
    </div>
  )
}

export default FavoritesLayout
