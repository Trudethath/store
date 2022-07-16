import React, { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  // Current cart items
  const [cartItems, setCartItems] = useState([])
  const [wishlistArray, setWishlistArray] = useState([])

  const handleWishlistArray = (item) => {
    if (wishlistArray.includes(item)) {
      const array = wishlistArray.filter((i) => i !== item) // removes item if it exist
      setWishlistArray(array)
    } else {
      setWishlistArray([...wishlistArray, item])
    }
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishlistArray,
        handleWishlistArray,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
