import React, { useContext, useState } from "react"
import { AppContext } from "../AppProvider"

import { GoPrimitiveDot } from "react-icons/go"
import { BiMessage } from "react-icons/bi"
import { BsHeart, BsHeartFill } from "react-icons/bs"

import SizeTable from "./SizeTable"
import ColorTable from "./ColorTable"

function ItemDetails(props) {
  const { itemId } = props
  const { toggleFavorite, addToCart, items } = useContext(AppContext)

  const [chosenSize, setChosenSize] = useState(-1)
  const [chosenColor, setChosenColor] = useState("")

  const [showSizeVal, setShowSizeVal] = useState(false)
  const [showColorVal, setShowColorVal] = useState(false)

  const [quantity, setQuantity] = useState(1)

  const item = items.filter((item) => item.id === itemId)

  const handleSizePicker = (size) => {
    setShowSizeVal(false)
    setChosenSize(size)
  }

  const handleColorPicker = (color) => {
    setShowColorVal(false)
    setChosenColor(color)
  }

  const handleClick = () => {
    toggleFavorite(item[0].id)
  }

  const handleChange = (e) => {
    const num = e.target.value
    console.log(item[0].quantity)
    if (num <= item[0].quantity && num > 0) setQuantity(num)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    chosenSize === -1 ? setShowSizeVal(true) : setShowSizeVal(false)
    chosenColor === "" ? setShowColorVal(true) : setShowColorVal(false)

    if (chosenColor !== "" && chosenSize !== -1) {
      const newItem = {
        id: item[0].id,
        model: item[0].model,
        img: item[0].img,
        color: chosenColor,
        size: chosenSize,
        price: item.price,
        gender: item[0].gender,
        release_year: item[0].release_year,
        onSale: item[0].onSale,
        favorite: item[0].favorite,
        quantity: quantity,
      }
      addToCart([newItem])
    }
  }

  const details = (
    <>
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
          <span className='availability-text'>
            The Product is available{" "}
            <span>
              <GoPrimitiveDot
                className='availabilityDot'
                style={{ color: "green" }}
              />
            </span>
          </span>
        )}
        <form>
          <h4>Pick your size</h4>
          {showSizeVal && (
            <h4 style={{ color: "red" }}>Please select your size</h4>
          )}
          <SizeTable
            availableSizes={item[0].sizes}
            itemQuantity={item[0].quantity}
            handleSizePicker={handleSizePicker}
          />

          <h4>Pick your color</h4>
          {showColorVal && (
            <h4 style={{ color: "red" }}>Please select your color</h4>
          )}
          <ColorTable
            availableColors={item[0].colors}
            itemQuantity={item[0].quantity}
            handleColorPicker={handleColorPicker}
          />
          <label>
            Quantity
            <input
              id='quantityPicker'
              type='number'
              value={quantity}
              onChange={handleChange}
            />
          </label>

          {item[0].quantity <= 0 ? (
            <button className='addToCart deactivated' onClick={handleAddToCart}>
              Add to cart
            </button>
          ) : (
            <button className='addToCart' onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
        </form>

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

        <div className='item-desc'>
          If we only made one running shoe, that shoe would be the{" "}
          <b>{item[0].model}</b>. What makes the <b>{item[0].model}</b> unique
          isn’t just that it’s the best running shoe we make, it’s also the most
          versatile. The <b>{item[0].model}</b>
          delivers top-of-the-line performance to every kind of runner, whether
          you’re training for world-class competition, or catching a rush hour
          train. The <b>{item[0].model}</b> represents a consistent progression
          of the model’s signature qualities. The smooth transitions of the
          pinnacle underfoot cushioning experience are fine-tuned with updated
          midsole mapping, which applies more foam to wider areas of the midsole
          and increases flexibility at the narrower points. The ultra-modern
          outlook is also reflected in the <b>{item[0].model}’s</b> upper
          construction. The v12 offers a supportive, second-skin style fit with
          an engineered Hypoknit upper, for a more streamlined overall design.
        </div>
      </div>
      <div>
        <div>
          <h2>Product details</h2>
          <ul>
            <li>Suede / mesh upper</li>
            <li>Vamp, collar and tongue mesh are 100% recycled polyester</li>
            <li>
              ENCAP midsole cushioning combines soft foam with a durable
              polyurethane rim to deliver all-day support
            </li>
            <li>
              Midsole foam uses approximately 3% bio-based content made from
              renewable sources to help reduce our carbon footprint
            </li>
            <li>Rubber outsole with 5% recycled rubber</li>
            <li>Available in extended width sizes</li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  )

  return details
}

export default ItemDetails
