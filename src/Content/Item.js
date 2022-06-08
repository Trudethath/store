import React, { useContext } from "react"
import { AppContext } from "../AppProvider"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

function Item(props) {
  const { item } = props
  const { toggleFavorite } = useContext(AppContext)
  const navigate = useNavigate()

  const handleClick = (option) => {
    switch (option) {
      case "item":
        navigate("/itemDetails", { state: { item: item } })
        break
      case "favorite":
        toggleFavorite(item.id)
        break
      default:
        break
    }
  }

  return (
    <div className='item'>
      {item.onSale ? <span className='sale'>SALE</span> : null}
      {item.favorite === false ? (
        <BsHeart
          className='favorite-icon'
          onClick={() => handleClick("favorite")}
        />
      ) : (
        <BsHeartFill
          className='favorite-icon icon-active'
          onClick={() => handleClick("favorite")}
        />
      )}
      <div onClick={() => handleClick("item")}>
        {item.quantity <= 0 ? (
          <div>
            <img className='item-unavaiable' src={item.img} alt={item.model} />
            <span className='item-unavaiable-text'>OUT OF STOCK</span>
          </div>
        ) : (
          <img src={item.img} alt={item.model} />
        )}
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
