import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MenuItems from "./MenuItems"
import MenuItem from "./MenuItem"
import { GiDonkey } from "react-icons/gi"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import authService from "../services/auth.service"
import IsAuthorized from "../services/IsAuthorized"

const Navbar = () => {
  const [isUserLogged, setUserLogged] = useState(false)

  let navigate = useNavigate()

  // Generates menu from MenuItems.js file
  const menuItems = MenuItems.map((item) => {
    return <MenuItem key={item.id} item={item} />
  })

  useEffect(() => {
    if (IsAuthorized()) setUserLogged(true)
    else setUserLogged(false)
  })

  const userNotLoggedIn = (
    <Link to='signIn'>
      <AiOutlineUser />
      Log in | Sign up
    </Link>
  )

  const userLoggedIn = (
    <span>
      <Link to='profile'>
        <AiOutlineUser />
        Profile
      </Link>
      <span
        onClick={() => {
          authService.logout()
          navigate("/")
        }}
      >
        Log out
      </span>
    </span>
  )

  return (
    <nav className='navbar-container'>
      <h1>
        <Link to='/' className='navbar-icon'>
          <GiDonkey />
        </Link>
      </h1>
      <ul className='menu-items'>{menuItems}</ul>
      <div className='user-side'>
        {isUserLogged ? userLoggedIn : userNotLoggedIn}
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
