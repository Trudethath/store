import { useContext } from "react"
import SimpleImageSlider from "react-simple-image-slider"
import { AppContext } from "../AppProvider"
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
    console.log(item)
    return item.release_year === new Date().getFullYear()
  })

  return (
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
  )
}

export default Home
