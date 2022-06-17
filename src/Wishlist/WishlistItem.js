import React, { useState, useContext } from "react"
import { BsX } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

import { AppContext } from "../AppProvider"

function WishlistItem(props) {
  const { item, handleSelectedItems } = props
  const [isChecked, setChecked] = useState(false)
  const { toggleFavorite, allSizes } = useContext(AppContext)

  const [selectedSize, setSelectedSize] = useState()
  const [selectedColor, setSelectedColor] = useState()

  const navigate = useNavigate()

  const handleChange = () => {
    setChecked(!isChecked)
    const itemToPush = {
      id: item.id,
      img: item.img,
      model: item.model,
      color: selectedColor,
      size: selectedSize,
      price: item.price,
      gender: item.gender,
      release_year: item.release_year,
      onSale: item.onSale,
      favorite: item.favorite,
      quantity: item.quantity,
      inCart: 0,
    }
    handleSelectedItems(itemToPush)
  }

  const handleClick = (opt) => {
    if (opt === "remove") {
      toggleFavorite(item.id)
    }
    if (opt === "nav") {
      navigate("/itemDetails", { state: { item: item } })
    }
  }

  const handleSelect = (e) => {
    if (e.id === "sizesSelect") {
      const size = e.value
      setSelectedSize(size)
    } else {
      const color = e.value
      setSelectedColor(color)
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

  const sizes = item.sizes.map((size) => {
    return (
      <option key={size} value={size}>
        {size}
      </option>
    )
  })

  const colors = item.colors.map((color) => {
    return (
      <option key={color} value={color}>
        {color}
      </option>
    )
  })

  const itemAvailable = (
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

        <div className='clickableThings'>
          <select id='sizesSelect' onChange={(e) => handleSelect(e.target)}>
            <option>none</option>
            {sizes}
          </select>

          <select id='colorsSelect' onChange={(e) => handleSelect(e.target)}>
            <option>none</option>
            {colors}
          </select>

          {linkToItem}
          {remove}
        </div>
      </div>
    </div>
  )

  const itemUnavailable = (
    <div className='item-wrapper unavailable'>
      <h3 className='itemUnavailable'>Item is unavailable</h3>
      <div className='wishlist-item'>
        <label htmlFor={item.model}>
          <img src={item.img} alt={item.model} />
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

  const render = item.quantity <= 0 ? itemUnavailable : itemAvailable

  return render
}

export default WishlistItem
