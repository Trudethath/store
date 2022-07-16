import React, { createContext, useState } from "react"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  // Current cart items
  const [cartItems, setCartItems] = useState([])
  const [wishlistArray, setWishlistArray] = useState([])

  const removeItemFromCart = (item) => {
    const cartItemsCopy = [...cartItems]

    cartItemsCopy.forEach((elem) => {
      if (elem.item.itemId === item.item.itemId) {
        if (
          elem.chosenParameters.size === item.chosenParameters.size &&
          elem.chosenParameters.color === item.chosenParameters.color
        ) {
          const index = cartItemsCopy.indexOf(elem)
          cartItemsCopy.splice(index, 1)
        }
      }
      setCartItems(cartItemsCopy)
    })
  }

  const handleCartItems = (item) => {
    const cartItemsCopy = [...cartItems]

    if (cartItemsCopy.length === 0) {
      // push if empty
      cartItemsCopy.push(item)
    } else {
      // if item has same id
      if (cartItemsCopy.some((e) => e.item.itemId === item.item.itemId)) {
        if (
          // check if parameters are the same
          cartItemsCopy.some((e) => {
            return (
              e.chosenParameters.size === item.chosenParameters.size &&
              e.chosenParameters.color === item.chosenParameters.color
            )
          })
        ) {
          console.log("can't add - same params")
        } else {
          // if paramteres differs then add
          cartItemsCopy.push(item)
        }
      } else {
        cartItemsCopy.push(item)
      }
    }

    setCartItems(cartItemsCopy)
  }

  const handleWishlistArray = (item) => {
    const wishlistArrayCopy = [...wishlistArray]
    if (wishlistArray.some((e) => e.itemId === item.itemId)) {
      // if array contains item
      const index = wishlistArrayCopy.indexOf(item)
      wishlistArrayCopy.splice(index, 1)
      setWishlistArray(wishlistArrayCopy)
    } else {
      wishlistArrayCopy.push(item)
      setWishlistArray(wishlistArrayCopy)
    }
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishlistArray,
        handleWishlistArray,
        handleCartItems,
        removeItemFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
