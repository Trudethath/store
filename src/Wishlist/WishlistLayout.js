import WishlistTable from "./WishlistTable"
import { AppContext } from "../AppProvider"
import React, { useContext } from "react"

function WishlistLayout() {
  const { wishlistArray } = useContext(AppContext)

  return (
    <div>
      <div className='wishlist-layout'>
        <h2>My wishlist</h2>
        <div className='wishlist-container'>
          <WishlistTable wishlistArray={wishlistArray} />
        </div>
      </div>
    </div>
  )
}

export default WishlistLayout
