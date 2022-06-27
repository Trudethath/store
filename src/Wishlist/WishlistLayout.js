import WishlistTable from "./WishlistTable"
import AddItemsToCart from "./AddItemsToCart"
import { AppContext } from "../AppProvider"
import React, { useContext, useState } from "react"

function WishlistLayout() {
  const { items } = useContext(AppContext)
  const [allSelectedItems, setAllSelectedItems] = useState([])

  //removes item from wishlist
  const removeItemById = (id) => {
    const copySelectedItems = [...allSelectedItems]
    const newArr = copySelectedItems.filter((elem) => elem.id !== id)
    setAllSelectedItems(newArr)
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
          <AddItemsToCart selectedItems={allSelectedItems} />
        </div>
      </div>
    </div>
  )
}

export default WishlistLayout
