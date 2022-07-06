import React from "react"
import { Link } from "react-router-dom"
import MenuItems from "./MenuItems"
import MenuItem from "./MenuItem"
import { GiDonkey } from "react-icons/gi"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import authService from "../services/auth.service"

// Generates menu from MenuItems.js file
const menuItems = MenuItems.map((item) => {
  return <MenuItem key={item.id} item={item} />
})

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <h1>
        <Link to='/' className='navbar-icon'>
          <GiDonkey />
        </Link>
      </h1>
      <ul className='menu-items'>{menuItems}</ul>
      <div className='user-side'>
        <Link to='signIn'>
          <AiOutlineUser />
          Log in
        </Link>
        <button onClick={() => authService.logout()}>Log out</button>
        <Link to='wishlist'>
          <AiOutlineHeart />
        </Link>
        <Link to='cart'>
          <BsCart2 />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
