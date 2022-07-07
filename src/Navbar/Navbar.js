import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MenuItems from "./MenuItems"
import MenuItem from "./MenuItem"
import { GiDonkey } from "react-icons/gi"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import authService from "../services/auth.service"
import axios from "axios"
import URLS from "../utils/URLS"
import authHeader from "../services/auth-header"

const Navbar = () => {
  let navigate = useNavigate()
  const [isUserLogged, setUserLogged] = useState(false)

  // Generates menu from MenuItems.js file
  const menuItems = MenuItems.map((item) => {
    return <MenuItem key={item.id} item={item} />
  })

  useEffect(() => {
    axios
      .get(URLS.get_profile_url, authHeader())
      .then((response) => {
        setUserLogged(true)
        return response
      })
      .catch((error) => {
        setUserLogged(false)
        return error
      })
  })

  const userNotLoggedIn = (
    <Link to='signIn'>
      <AiOutlineUser />
      Log in | Sign up
    </Link>
  )

  const userLoggedIn = (
    <>
      <Link to='profile'>
        <AiOutlineUser />
        Profile
      </Link>
      <button
        onClick={() => {
          authService.logout()
          navigate("/")
        }}
      >
        Log out
      </button>
    </>
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
