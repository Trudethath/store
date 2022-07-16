import React, { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  // Current cart items
  const [cartItems, setCartItems] = useState([])
  const [wishlistArray, setWishlistArray] = useState([])

  const handleCartItems = (item) => {
    console.log(item)
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
