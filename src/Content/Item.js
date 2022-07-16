import React, { useContext } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../AppProvider"
import { AuthContext } from "../auth/AuthProvider"
import "../images/femaleFootwear1.png"
import "../images/maleFootwear1.png"

function Item(props) {
  const { item } = props
  let navigate = useNavigate()
  const { handleWishlistArray, wishlistArray } = useContext(AppContext)
  const { user } = useContext(AuthContext)

  const handleClick = (option) => {
    switch (option) {
      case "item":
        navigate(`/itemDetails/${item.model}`)
        break
      case "favorite":
        handleWishlistArray(item)
        break
      default:
        break
    }
  }

  return (
    <div className='item'>
      {item.onSale ? <span className='sale'>SALE</span> : null}
      {user ? (
        wishlistArray.some((e) => e.itemId === item.itemId) ? (
          <BsHeartFill
            className='favorite-icon icon-active'
            onClick={() => handleClick("favorite")}
          />
        ) : (
          <BsHeart
            className='favorite-icon'
            onClick={() => handleClick("favorite")}
          />
        )
      ) : (
        <BsHeart className='favorite-icon disabled-icon' />
      )}

      <div
        onClick={() => {
          handleClick("item")
        }}
      >
        <img src={require("../images/" + item.images.img1)} alt={item.model} />
        <div className='item-desc'>
          <h4>{item.model}</h4>
          <span className='price'>{item.price} $</span>
        </div>
        <h5>size 38+</h5>
      </div>
    </div>
  )
}

export default Item
