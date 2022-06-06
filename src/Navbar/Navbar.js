import React from "react"
import { Link } from "react-router-dom"

import MenuItems from "./MenuItems"
import MenuItem from "./MenuItem"

import { GiDonkey } from "react-icons/gi"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"

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
          Zaloguj się
        </Link>
        <Link to='favorite'>
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
