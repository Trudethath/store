import { useEffect, useState } from "react"
import axios from "axios"
import SimpleImageSlider from "react-simple-image-slider"
import Carousel from "./Carousel"
import Item from "./Item"
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"

const images = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
]

function Home() {
  // const { items } = useContext(AppContext)
  // // this year's collection
  // const newestItems = items.filter((item) => {
  //   return item.release_year === new Date().getFullYear()
  // })

  // const itemsOnSale = items.filter((item) => {
  //   return item.onSale
  // })

  // const carouselItemsNew = newestItems.map((item) => {
  //   return <Item key={item.id} item={item} />
  // })

  // const carouselItemsSale = itemsOnSale.map((item) => {
  //   return <Item key={item.id} item={item} />
  // })

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

  let carouselOnSaleItems = "No items"
  let carouselNewItems = "No items"

  if (isLoaded) {
    const newItems = data.filter((item) => {
      const date = new Date()
      const year = date.getFullYear()
      return item.release_year === year
    })

    carouselNewItems = newItems.map((item) => (
      <Item key={item.itemId} item={item} />
    ))

    const itemsOnSale = data.filter((item) => item.onSale)
    carouselOnSaleItems = itemsOnSale.map((item) => (
      <Item key={item.itemId} item={item} />
    ))
  }

  return (
    <div className='home'>
      <div className='slider'>
        <SimpleImageSlider
          width={1000}
          height={450}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={3}
        />
      </div>
      <div className='flex-row'>
        <div>
          <h1>This year's collection</h1>
          <Carousel>
            {carouselNewItems.length != 0 ? carouselNewItems : "No items"}
          </Carousel>
        </div>

        <div>
          <h1>Current sale</h1>
          <Carousel>
            {carouselOnSaleItems.length != 0 ? carouselNewItems : "No items"}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home
