import axios from "axios"
import { useState, useEffect } from "react"
import Item from "./Item"

function NewItems() {
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  const queriedData = `
  query{
    items{
      itemId
      model,
      gender,
      release_year,
      price,
      onSale,
      images
    }
    }
  `
  useEffect(() => {
    axios
      .post("http://localhost:3000/graphql/", {
        query: queriedData,
      })
      .then((response) => {
        setData(response.data.data.items)
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error)
        setIsLoaded(false)
      })
  }, [])

  let itemsToDisplay = "No items to display"

  if (isLoaded) {
    const filteredItems = data.filter((item) => {
      const date = new Date()
      const year = date.getFullYear()
      return item.release_year === year
    })

    itemsToDisplay = filteredItems.map((item) => {
      return <Item key={item.itemId} item={item} />
    })
  }

  return (
    <>
      <div className='items-title'>
        <h2>New ({itemsToDisplay.length})</h2>
        <div className='items-list'>
          {itemsToDisplay.length !== 0 ? itemsToDisplay : "No new items"}
        </div>
      </div>
    </>
  )
}

export default NewItems
