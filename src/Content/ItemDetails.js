import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppProvider"

import { GoPrimitiveDot } from "react-icons/go"
import { BiMessage } from "react-icons/bi"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import SizeTable from "./SizeTable"
import ColorTable from "./ColorTable"
import { AuthContext } from "../auth/AuthProvider"

function ItemDetails(props) {
  const { gender, model, price, quantity, itemId } = props.data
  const { handleWishlistArray, wishlistArray, handleCartItems } =
    useContext(AppContext)
  const { user } = useContext(AuthContext)

  const [sliderValue, setSliderValue] = useState(1)
  const [maxSliderValue, setMaxSliderValue] = useState(5)
  const [sizeValue, setSizeValue] = useState(0)
  const [colorValue, setColorValue] = useState(null)

  const [isColorActive, setIsColorActive] = useState(false)
  const [isSliderActive, setIsSliderActive] = useState(false)

  let sizeArray = []

  Object.keys(quantity).forEach((key) => {
    sizeArray.push([key.replace(/[^0-9]/g, ""), quantity[key]])
  })

  useEffect(() => {
    if (sizeValue !== 0) {
      setSliderValue(1)
      setIsColorActive(true)
      setIsSliderActive(true)
      sizeArray.forEach((elem) => {
        if (parseInt(elem[0]) === sizeValue) {
          setMaxSliderValue(parseInt(elem[1]))
        }
      })
    } else {
      setSliderValue(0)
      setIsColorActive(false)
      setIsSliderActive(false)
    }
  }, [sizeValue])

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (colorValue !== "" && sliderValue !== 0 && sizeValue !== 0) {
      const cartItem = {
        item: props.data,
        chosenParameters: {
          size: sizeValue,
          color: colorValue,
          quantity: sliderValue,
        },
      }
      handleCartItems(cartItem)
    } else {
      console.log("error")
    }
  }

  const handleClick = () => {
    handleWishlistArray(props.data)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === "sizeTable") setSizeValue(parseInt(value))
    if (id === "colorTable") setColorValue(value)
    if (id === "slider") setSliderValue(value)
  }

  const details = (
    <>
      <div className='item-details'>
        <h5>{gender === "female" ? "Women's" : "Men's"}</h5>
        <h1>{model}</h1>
        <h3 className='priceTag'>{price} $</h3>
        <form>
          <h4>Pick your size</h4>
          <SizeTable sizeArray={sizeArray} handleChange={handleChange} />

          <h4>Pick your color</h4>
          <ColorTable isDisabled={!isColorActive} handleChange={handleChange} />

          <div className='slideContainer'>
            <input
              type='range'
              min='1'
              max={maxSliderValue}
              value={sliderValue}
              className='slider'
              id='slider'
              onChange={handleChange}
              disabled={!isSliderActive}
            />
            <span>{sliderValue}</span>
          </div>

          <button className='addToCart' onClick={handleAddToCart}>
            Add to cart
          </button>
        </form>

        <span className='link'>
          <div>
            <i>
              <BiMessage className='message' />
            </i>
            <span>Need help?</span>
          </div>
        </span>

        {user && (
          <span className='link' onClick={handleClick}>
            {wishlistArray.some((e) => e.itemId === itemId) ? (
              <div>
                <i>
                  <BsHeartFill className='favorite' />
                </i>
                <span>Add to wishlist</span>
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
        )}

        <div className='item-desc'>
          If we only made one running shoe, that shoe would be the{" "}
          <b>{model}</b>. What makes the <b>{model}</b> unique isn’t just that
          it’s the best running shoe we make, it’s also the most versatile. The{" "}
          <b>{model}</b>
          delivers top-of-the-line performance to every kind of runner, whether
          you’re training for world-class competition, or catching a rush hour
          train. The <b>{model}</b> represents a consistent progression of the
          model’s signature qualities. The smooth transitions of the pinnacle
          underfoot cushioning experience are fine-tuned with updated midsole
          mapping, which applies more foam to wider areas of the midsole and
          increases flexibility at the narrower points. The ultra-modern outlook
          is also reflected in the <b>{model}’s</b> upper construction. The v12
          offers a supportive, second-skin style fit with an engineered Hypoknit
          upper, for a more streamlined overall design.
        </div>
      </div>
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
    </>
  )

  return details
}

export default ItemDetails
