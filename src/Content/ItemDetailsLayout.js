import { useParams } from "react-router-dom"
import ItemDetailsGallery from "./ItemDetailsGallery"
import ItemDetails from "./ItemDetails"
import { useEffect, useState } from "react"
import axios from "axios"

function ItemDetailsLayout() {
  const { model } = useParams()
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  const queriedData = `
  query{
    itemByModel(model: "${model}"){
      itemId
      model,
      gender ,
      release_year,
      price,
      onSale,
      images,
      quantity
    }
    }
  `
  useEffect(() => {
    axios
      .post("http://localhost:3000/graphql/", {
        query: queriedData,
      })
      .then((response) => {
        setData(response.data.data.itemByModel)
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error)
        setIsLoaded(false)
      })
  }, [])

  return isLoaded ? (
    <div className='item-details-wrapper'>
      <ItemDetailsGallery>
        <img src={data.images.img1} alt={data.images.img1} />
        <img src={data.images.img2} alt={data.images.img2} />
        <img src={data.images.img3} alt={data.images.img3} />
      </ItemDetailsGallery>
      <ItemDetails data={data} />
    </div>
  ) : (
    "Couldn't find such model"
  )
}

export default ItemDetailsLayout
