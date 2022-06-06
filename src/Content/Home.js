import { useContext } from "react"
import SimpleImageSlider from "react-simple-image-slider"
import { AppContext } from "../AppProvider"
import Carousel from "./Carousel"
import CarouselItem from "./CarouselItem"
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import maleFootwear from "../images/maleFootwear.png"
import femaleFootwear from "../images/femaleFootwear.png"

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

  const carouselItems = newestItems.map((item) => {
    return <CarouselItem key={item.id} item={item} />
  })

  return (
    <>
      <div className='slider'>
        <SimpleImageSlider
          width={1000}
          height={500}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={3}
        />
      </div>
      <h1 style={{ textAlign: "center" }}>This year's collection</h1>
      <Carousel>{carouselItems}</Carousel>
    </>
  )
}

export default Home
