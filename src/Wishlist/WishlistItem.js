import React, { useContext } from "react"
import { BsX } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

import { AppContext } from "../AppProvider"

function WishlistItem(props) {
  const { item } = props
  console.log(props)
  const { handleWishlistArray } = useContext(AppContext)

  const navigate = useNavigate()

  const handleClick = (opt) => {
    // Removes item from the list and toggles favorite property
    if (opt === "remove") {
      handleWishlistArray(item)
    }
    // Navigates to page with item details
    if (opt === "nav") {
      navigate(`/itemDetails/${item.model}`)
    }
  }

  const linkToItem = (
    <h4 className='linkToItem' onClick={() => handleClick("nav")}>
      Go to product
    </h4>
  )

  const remove = (
    <i className='active' onClick={() => handleClick("remove")}>
      <BsX />
    </i>
  )

  const itemToDisplay = (
    <div className='item-wrapper'>
      <div className='wishlist-item'>
        <label htmlFor={item.model}>
          <img
            src={require("../images/" + item.images.img1)}
            alt={item.model}
          />
          <div>
            <h3>{item.model}</h3>
            <h4>{item.price} $</h4>
          </div>
        </label>

        <div className='clickableThings'>
          {linkToItem}
          {remove}
        </div>
      </div>
    </div>
  )

  return itemToDisplay
}

export default WishlistItem
