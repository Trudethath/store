import { useEffect, useState } from "react"
import Item from "./Item"
import axios from "axios"

// https://blog.logrocket.com/modern-api-data-fetching-methods-react/

function AllItems() {
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

  let itemsToDisplay = "Loading ..."

  if (isLoaded) {
    itemsToDisplay = data.map((item) => {
      return <Item key={item["itemId"]} item={item} />
    })
  }

  return (
    <>
      <div className='items-title'>
        <h2>All ({itemsToDisplay.length})</h2>
        <div className='items-list'>
          {itemsToDisplay.length !== 0 ? itemsToDisplay : "No items to show rn"}
        </div>
      </div>
    </>
  )
}

export default AllItems
