import React, { useContext } from "react"
import { AppContext } from "../AppProvider"

import { GoPrimitiveDot } from "react-icons/go"
import { BiMessage } from "react-icons/bi"
import { BsHeart, BsHeartFill } from "react-icons/bs"

import SizeTable from "./SizeTable"

function ItemDetails(props) {
  const { itemId } = props
  const { toggleFavorite, items } = useContext(AppContext)

  const item = items.filter((item) => item.id === itemId)

  const handleClick = () => {
    toggleFavorite(item[0].id)
  }

  const details = (
    <div className='item-details'>
      <h5>{item[0].gender === "female" ? "Women's" : "Men's"}</h5>
      <h1>{item[0].model}</h1>
      <h3 className='priceTag'>{item[0].price} $</h3>
      {item[0].quantity <= 0 ? (
        <span>
          The Product is unavailable{" "}
          <span>
            <GoPrimitiveDot
              className='availabilityDot'
              style={{ color: "red" }}
            />
          </span>
        </span>
      ) : (
        <span>
          The Product is available{" "}
          <span>
            <GoPrimitiveDot
              className='availabilityDot'
              style={{ color: "green" }}
            />
          </span>
        </span>
      )}

      <SizeTable
        availableSizes={item[0].sizes}
        itemQuantity={item[0].quantity}
      />

      <button className='addToCart'>Add to cart</button>

      <span className='link'>
        <div>
          <i>
            <BiMessage className='message' />
          </i>
          <span>Need help?</span>
        </div>
      </span>

      <span className='link' onClick={handleClick}>
        {item[0].favorite ? (
          <div>
            <i>
              <BsHeartFill className='favorite' />
            </i>
            <span>Remove from wishlist</span>
          </div>
        ) : (
          <div>
            <i>
              <BsHeart />
            </i>
            <span>Add to wishlist</span>
          </div>
        )}
      </span>
    </div>
  )

  return details
}

export default ItemDetails
