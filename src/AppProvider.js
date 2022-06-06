import React, { createContext, useState } from "react"

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 0,
      model: "564 Donkey",
      price: 65,
      rating: 3,
      sex: "male",
      release_year: 2017,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 15,
    },
    {
      id: 1,
      model: "613 Donkey",
      price: 120,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 12,
    },
    {
      id: 2,
      model: "702 Donkey",
      price: 116,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 17,
    },
    {
      id: 3,
      model: "755 Donkey",
      price: 88,
      rating: 2,
      gender: "male",
      release_year: 2017,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 18,
    },
    {
      id: 4,
      model: "533 Donkey",
      price: 223,
      rating: 5,
      gender: "male",
      release_year: 2020,
      onSale: true,
      favorite: false,
      inCart: false,
      quantity: 7,
    },
    {
      id: 5,
      model: "599 Donkey",
      price: 255,
      rating: 0,
      gender: "male",
      release_year: 2020,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 3,
    },
    {
      id: 6,
      model: "613 Donkey",
      price: 300,
      rating: 0,
      gender: "male",
      release_year: 2022,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 1,
    },
    {
      id: 7,
      model: "677 Donkey",
      price: 100,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: true,
      favorite: false,
      inCart: false,
      quantity: 9,
    },
    {
      id: 8,
      model: "688 Donkey",
      price: 100,
      rating: 4,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 16,
    },
    {
      id: 9,
      model: "601 Donkey",
      price: 140,
      rating: 5,
      gender: "male",
      release_year: 2019,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 6,
    },
    {
      id: 10,
      model: "708 Donkey",
      price: 140,
      rating: 5,
      gender: "male",
      release_year: 2018,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 6,
    },
    {
      id: 11,
      model: "223 Donkey",
      price: 65,
      rating: 2,
      gender: "female",
      release_year: 2016,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 15,
    },
    {
      id: 12,
      model: "244 Donkey",
      price: 100,
      rating: 5,
      gender: "female",
      release_year: 2017,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 8,
    },
    {
      id: 13,
      model: "288 Donkey",
      price: 100,
      rating: 4,
      gender: "female",
      release_year: 2017,
      onSale: true,
      favorite: false,
      inCart: false,
      quantity: 15,
    },
    {
      id: 14,
      model: "377 Donkey",
      price: 150,
      rating: 4,
      gender: "female",
      release_year: 2018,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 15,
    },
    {
      id: 15,
      model: "344 Donkey",
      price: 170,
      rating: 5,
      gender: "female",
      release_year: 2019,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 12,
    },
    {
      id: 16,
      model: "401 Donkey",
      price: 225,
      rating: 0,
      gender: "female",
      release_year: 2019,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 3,
    },
    {
      id: 17,
      model: "444 Donkey",
      price: 220,
      rating: 4,
      gender: "female",
      release_year: 2019,
      onSale: true,
      favorite: false,
      inCart: false,
      quantity: 25,
    },
    {
      id: 18,
      model: "222 Donkey",
      price: 300,
      rating: 5,
      gender: "female",
      release_year: 2022,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 1,
    },
    {
      id: 19,
      model: "273 Donkey",
      price: 180,
      rating: 3,
      gender: "female",
      release_year: 2019,
      onSale: false,
      favorite: false,
      inCart: false,
      quantity: 4,
    },
    {
      id: 20,
      model: "308 Donkey",
      price: 180,
      rating: 3,
      gender: "female",
      release_year: 2020,
      onSale: true,
      favorite: false,
      inCart: false,
      quantity: 4,
    },
  ])
  return <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>
}

export default AppProvider
