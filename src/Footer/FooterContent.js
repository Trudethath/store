import FooterItems from "./FooterItems"
import Column from "./Column"

import { GiDonkey } from "react-icons/gi"
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa"

function FooterContent() {
  const columns = FooterItems.map((column) => {
    return <Column key={column.id} column={column} />
  })

  return (
    <>
      <div className='flex-container'>
        <div className='columns-wrapper'>{columns}</div>
        <div className='about'>
          <i>
            <GiDonkey />
          </i>
          <span>Donkey</span>

          <p>
            Independent since 1906, we empower people through sport and
            craftsmanship to create positive change in communities around the
            world.
          </p>

          <div className='icons'>
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaPinterestP />
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterContent
