import SimpleImageSlider from "react-simple-image-slider"
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
  return (
    <div className='slider'>
      <SimpleImageSlider
        width={1000}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  )
}

export default Home
