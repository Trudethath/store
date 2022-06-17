import WishlistTable from "./WishlistTable"
import AddItemsToCart from "./AddItemsToCart"

import { AppContext } from "../AppProvider"
import React, { useContext, useState } from "react"

function FavoritesLayout() {
  const { items, addToCart } = useContext(AppContext)
  const [selectedItems, setSelectedItems] = useState([])

  const sendSelectedItems = (arr) => {
    var tempArr = []
    arr.forEach((element) => {
      tempArr.push(element)
    })
    console.log(typeof tempArr, tempArr)
    setSelectedItems(tempArr)
  }

  const sendItemsToCart = (items) => {
    console.log("Send")
  }

  return (
    <div>
      <div className='wishlist-layout'>
        <h2>My wishlist</h2>
        <div className='wishlist-container'>
          <WishlistTable items={items} sendSelectedItems={sendSelectedItems} />
          <AddItemsToCart
            selectedItems={selectedItems}
            sendItemsToCart={sendItemsToCart}
          />
        </div>
      </div>
    </div>
  )
}

export default FavoritesLayout
