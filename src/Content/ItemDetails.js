import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppProvider"

import { RiMessage3Line } from "react-icons/ri"
import { GoPrimitiveDot } from "react-icons/go"

import { BsHeart, BsHeartFill } from "react-icons/bs"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

import SizeTable from "./SizeTable"
import ColorTable from "./ColorTable"
import { AuthContext } from "../auth/AuthProvider"

function ItemDetails(props) {
  const { gender, model, price, quantity, itemId } = props.data
  const { handleWishlistArray, wishlistArray, handleCartItems } =
    useContext(AppContext)
  const { user } = useContext(AuthContext)
  const [sizeValue, setSizeValue] = useState(0)
  const [quantityValue, setQuantityValue] = useState(0)
  const [colorValue, setColorValue] = useState("none")

  const [maxQuantityValue, setMaxQuantityValue] = useState(0)

  // Validation states
  const [isColorActive, setIsColorActive] = useState(false)
  const [isQuantityActive, setIsQuantityActive] = useState(false)
  const [isIncreaseQtActive, setIsIncreaseQtActive] = useState(false)
  const [isDecreaseQtActive, setIsDecreaseQtActive] = useState(false)
  const [isQtDivActive, setIsQtDivActive] = useState(false)

  // animation

  const [isWishListAnimating, setIsWishListAnimating] = useState(false)

  let sizeArray = []

  Object.keys(quantity).forEach((key) => {
    sizeArray.push([key.replace(/[^0-9]/g, ""), quantity[key]])
  })

  // Determines when increase and decrease buttons are active
  useEffect(() => {
    if (quantityValue === maxQuantityValue) {
      setIsIncreaseQtActive(false)
    } else {
      setIsIncreaseQtActive(true)
    }
    if (quantityValue === 0) {
      setIsDecreaseQtActive(false)
    } else {
      setIsDecreaseQtActive(true)
    }
  }, [quantityValue])

  useEffect(() => {
    if (sizeValue !== 0) {
      setQuantityValue(1)
      setIsColorActive(true)
      setIsQtDivActive(true)
      setIsQuantityActive(true)
      sizeArray.forEach((elem) => {
        if (parseInt(elem[0]) === sizeValue) {
          if (elem[1] === 0) setQuantityValue(0)
          setMaxQuantityValue(parseInt(elem[1]))
        }
      })
    } else {
      setIsQuantityActive(false)
      setIsColorActive(false)
      setIsQtDivActive(false)
      setQuantityValue(0)
      setMaxQuantityValue(0)
    }
  }, [sizeValue])

  const handleAddToCart = (e) => {
    e.preventDefault()
    if (colorValue !== "none" && sizeValue !== 0) {
      const cartItem = {
        item: props.data,
        chosenParameters: {
          size: sizeValue,
          color: colorValue,
          quantity: quantityValue,
        },
      }
      handleCartItems(cartItem)
    } else {
      console.log("error")
    }
  }

  const handleClick = (e, value) => {
    e.preventDefault()
    setQuantityValue(quantityValue + value)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    switch (id) {
      case "sizeTable":
        setSizeValue(parseInt(value))
        break
      case "colorTable":
        setColorValue(value)
        break
      case "sizeValue":
        if (value !== "") {
          if (value <= maxQuantityValue && value >= 0) {
            setQuantityValue(parseInt(value))
          } else setQuantityValue(maxQuantityValue)
        }

        break
      default:
        break
    }
  }

  const handleAddToWishlist = () => {
    setIsWishListAnimating(true)
    setTimeout(() => {
      setIsWishListAnimating(false)
    }, 1000)
    handleWishlistArray(props.data)
  }

  const availabilityDot = () => {
    if (sizeValue === 0)
      return (
        <span>
          <GoPrimitiveDot className='grey' />
        </span>
      )
    else if (maxQuantityValue !== 0)
      return (
        <span>
          <GoPrimitiveDot className='green' /> Item is avaiable
        </span>
      )
    else
      return (
        <span>
          <GoPrimitiveDot className='red' />
          Item is unavaiable
        </span>
      )
  }

  const details = (
    <>
      <div className='item-details'>
        <h5>{gender === "female" ? "Women's" : "Men's"}</h5>
        <h1>{model}</h1>
        <h3 className='priceTag'>${price}</h3>
        <form>
          <span>{availabilityDot()}</span>
          <h4>Pick your size</h4>

          <SizeTable sizeArray={sizeArray} handleChange={handleChange} />

          <h4>Pick your color</h4>
          <ColorTable isDisabled={!isColorActive} handleChange={handleChange} />

          <div className={!isQtDivActive ? "notActive" : undefined}>
            <div className='quantityContainer'>
              <h4>Pick quantity</h4>
              <button
                className='sizeInput'
                onClick={(event) => handleClick(event, -1)}
                disabled={!isDecreaseQtActive}
              >
                <AiOutlineMinus />
              </button>
              <input
                type='number'
                value={quantityValue}
                onChange={handleChange}
                disabled={!isQuantityActive}
                id='sizeValue'
              />
              <button
                className='sizeInput'
                onClick={(event) => handleClick(event, 1)}
                disabled={!isIncreaseQtActive}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          {user ? (
            <button className='addToCart' onClick={handleAddToCart}>
              <span>Add to cart</span>
            </button>
          ) : (
            <button className='addToCart disabled' disabled>
              <span>You have to be logged in</span>
            </button>
          )}
        </form>

        <span className='link'>
          <div>
            <i>
              <RiMessage3Line className='message' />
            </i>
            <span>Need help?</span>
          </div>
        </span>

        {user && (
          <span className='link' onClick={handleAddToWishlist}>
            {wishlistArray.some((e) => e.itemId === itemId) ? (
              <div>
                <i
                  id='wishlistIcon'
                  className={isWishListAnimating ? "shake" : undefined}
                >
                  <BsHeartFill className='favorite' />
                </i>
                <span>Add to wishlist</span>
              </div>
            ) : (
              <div>
                <i
                  id='wishlistIcon'
                  className={isWishListAnimating ? "shake" : undefined}
                >
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
