import React, { createContext, useEffect, useState } from "react"
import maleFootwear from "../src/images/maleFootwear.png"
import femaleFootwear from "../src/images/femaleFootwear.png"
import { useLocation } from "react-router-dom"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const location = useLocation()
  const [jwt_token, set_jwt_token] = useState("")

  // useEffect(() => {
  //   console.log("aa")
  // }, [location])

  // Array of every item
  const [items, setItems] = useState([
    {
      id: 0,
      model: "564 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [],
      price: 65,
      rating: 3,
      gender: "male",
      release_year: 2017,
      onSale: false,
      favorite: true,
      quantity: 0,
    },
    {
      id: 1,
      model: "613 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 40, 42, 43, 44],
      price: 120,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: true,
      quantity: 12,
    },
    {
      id: 2,
      model: "702 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 42, 43, 44, 45],
      price: 116,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: true,
      quantity: 17,
    },
    {
      id: 3,
      model: "755 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [39, 42, 43, 44, 45],
      price: 88,
      rating: 2,
      gender: "male",
      release_year: 2017,
      onSale: false,
      favorite: true,
      quantity: 18,
    },
    {
      id: 4,
      model: "533 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 42, 43, 44, 45],
      price: 223,
      rating: 5,
      gender: "male",
      release_year: 2022,
      onSale: true,
      favorite: true,
      quantity: 7,
    },
    {
      id: 5,
      model: "599 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 42, 43, 44, 45],
      price: 255,
      rating: 0,
      gender: "male",
      release_year: 2020,
      onSale: false,
      favorite: false,
      quantity: 3,
    },
    {
      id: 6,
      model: "645 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 42, 43, 44, 45],
      price: 300,
      rating: 0,
      gender: "male",
      release_year: 2022,
      onSale: false,
      favorite: false,
      quantity: 1,
    },
    {
      id: 7,
      model: "677 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44, 45],
      price: 100,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: true,
      favorite: false,
      quantity: 0,
    },
    {
      id: 8,
      model: "688 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44, 45],
      price: 100,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: false,
      quantity: 16,
    },
    {
      id: 9,
      model: "601 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44, 45],
      price: 140,
      rating: 5,
      gender: "male",
      release_year: 2019,
      onSale: false,
      favorite: false,
      quantity: 6,
    },
    {
      id: 10,
      model: "708 Donkey",
      img: maleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 44],
      price: 140,
      rating: 5,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: false,
      quantity: 6,
    },
    {
      id: 11,
      model: "223 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44],
      price: 65,
      rating: 2,
      gender: "female",
      release_year: 2016,
      onSale: false,
      favorite: false,
      quantity: 15,
    },
    {
      id: 12,
      model: "244 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44],
      price: 100,
      rating: 5,
      gender: "female",
      release_year: 2017,
      onSale: false,
      favorite: false,
      quantity: 8,
    },
    {
      id: 13,
      model: "288 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44],
      price: 100,
      rating: 4,
      gender: "female",
      release_year: 2017,
      onSale: true,
      favorite: false,
      quantity: 0,
    },
    {
      id: 14,
      model: "377 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44],
      price: 150,
      rating: 4,
      gender: "female",
      release_year: 2018,
      onSale: false,
      favorite: false,
      quantity: 15,
    },
    {
      id: 15,
      model: "344 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 44],
      price: 170,
      rating: 5,
      gender: "female",
      release_year: 2019,
      onSale: false,
      favorite: false,
      quantity: 12,
    },
    {
      id: 16,
      model: "401 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43],
      price: 225,
      rating: 0,
      gender: "female",
      release_year: 2022,
      onSale: false,
      favorite: false,
      quantity: 3,
    },
    {
      id: 17,
      model: "444 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 44],
      price: 220,
      rating: 4,
      gender: "female",
      release_year: 2022,
      onSale: true,
      favorite: false,
      quantity: 25,
    },
    {
      id: 18,
      model: "222 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [40, 41, 42, 43, 44],
      price: 300,
      rating: 5,
      gender: "female",
      release_year: 2022,
      onSale: false,
      favorite: false,
      quantity: 0,
    },
    {
      id: 19,
      model: "273 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44],
      price: 180,
      rating: 3,
      gender: "female",
      release_year: 2019,
      onSale: false,
      favorite: false,
      quantity: 4,
    },
    {
      id: 20,
      model: "308 Donkey",
      img: femaleFootwear,
      colors: ["black", "grey", "green", "yellow", "red"],
      sizes: [38, 39, 40, 41, 42, 43, 44],
      price: 180,
      rating: 3,
      gender: "female",
      release_year: 2020,
      onSale: true,
      favorite: false,
      quantity: 4,
    },
  ])

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

  // Toggles Item's favorite property
  const toggleFavorite = (id) => {
    let tempItems = [...items]
    tempItems.forEach((item) => {
      if (item.id === id) {
        item.favorite = !item.favorite
      }
    })
    setItems(tempItems)
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        allSizes,
        toggleFavorite,
        addToCart,
        jwt_token,
        set_jwt_token,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
