import React, { createContext, useEffect, useState } from "react"
import axios from "axios"
import URLS from "./utils/URLS"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  // Array of every item
  // ...

  // All possible shoe sizes
  const allSizes = [38, 39, 40, 41, 42, 43, 44, 45]

  // Current cart items
  const [cartItems, setCartItems] = useState([])

  // Creates cart object
  const createCartItem = (item) => {
    return {
      id: cartItems.length,
      itemId: item.id,
      img: item.img,
      model: item.model,
      color: item.color,
      size: item.size,
      price: item.price,
      gender: item.gender,
      release_year: item.release_year,
      onSale: item.onSale,
      favorite: item.favorite,
      selectedQuantity: item.selectedQuantity,
      maxQuantity: item.maxQuantity,
    }
  }

  // Adds items to cart
  const addToCart = (arr) => {
    arr.forEach((elem) => {
      setCartItems((oldArr) => [...oldArr, createCartItem(elem)])
    })
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        allSizes,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
