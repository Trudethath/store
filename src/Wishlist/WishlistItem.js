import React, { useState, useContext } from "react"
import { BsX } from "react-icons/bs"

import { AppContext } from "../AppProvider"

function WishlistItem(props) {
  const { item, handleSelectedItems } = props
  const [isChecked, setChecked] = useState(false)
  const { toggleFavorite } = useContext(AppContext)

  const handleChange = () => {
    setChecked(!isChecked)
    handleSelectedItems(item)
  }

  const handleClick = () => {
    toggleFavorite(item.id)
  }

  const heart = item.favorite ? (
    <i className='active' onClick={handleClick}>
      <BsX />
    </i>
  ) : (
    <i onClick={handleClick}>
      <BsX />
    </i>
  )

  const render = (
    <div className='item-wrapper'>
      <input
        type='checkbox'
        id={item.model}
        value={item.model}
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <div className='wishlist-item'>
        <label htmlFor={item.model}>
          <img src={item.img} alt={item.model} />
          <div>
            <h3>{item.model}</h3>
            <h4>{item.price} $</h4>
          </div>
        </label>
        {heart}
      </div>
    </div>
  )

  return render
}

export default WishlistItem
