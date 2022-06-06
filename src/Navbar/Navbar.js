import { GiDonkey } from "react-icons/gi"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import MenuItems from "./MenuItems"
import MenuItem from "./MenuItem"

const menuItems = MenuItems.map((item) => {
  return <MenuItem key={item.id} item={item} />
})

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h1>
        <a href='#' className='navbar-icon'>
          <GiDonkey />
        </a>
      </h1>
      <ul className='menu-items'>{menuItems}</ul>
      <div className='user-side'>
        <a href='#'>
          <AiOutlineUser />
          Zaloguj się
        </a>
        <a href='#'>
          <AiOutlineHeart />
        </a>
        <a href='#'>
          <BsCart2 />
        </a>
      </div>
    </div>
  )
}

export default Navbar
