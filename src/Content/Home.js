import { useContext } from "react"
import SimpleImageSlider from "react-simple-image-slider"
import { AppContext } from "../AppProvider"
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
  const { items } = useContext(AppContext)
  // this year's collection
  const newestItems = items.filter((item) => {
    return item.release_year === new Date().getFullYear()
  })

  const itemsOnSale = items.filter((item) => {
    return item.onSale
  })

  const carouselItemsNew = newestItems.map((item) => {
    return <Item key={item.id} item={item} />
  })

  const carouselItemsSale = itemsOnSale.map((item) => {
    return <Item key={item.id} item={item} />
  })

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
          <Carousel>{carouselItemsNew}</Carousel>
        </div>

        <div>
          <h1>Current sale</h1>
          <Carousel>{carouselItemsSale}</Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home
