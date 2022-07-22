import React, { useContext, useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import MenuItems from "./MenuItems"
import MenuItem from "./MenuItem"
import { GiDonkey } from "react-icons/gi"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import { AuthContext } from "../auth/AuthProvider"
const Navbar = () => {
  const location = useLocation()
  const { signout, user } = useContext(AuthContext)
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const [activeElement, setActiveElement] = useState(null)

  const handleActiveNavTab = (title) => {
    if (title === "reset") {
      setActiveElement(null)
    } else {
      setActiveElement(title)
    }
  }

  // Generates menu from MenuItems.js file
  const menuItems = MenuItems.map((item) => {
    return (
      <MenuItem
        key={item.id}
        item={item}
        activeElement={activeElement}
        handleActiveNavTab={handleActiveNavTab}
      />
    )
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
          signout(() => navigate(from, { replace: true }))
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
          <GiDonkey onClick={() => handleActiveNavTab("reset")} />
        </Link>
      </h1>
      <ul className='menu-items'>{menuItems}</ul>
      <div className='user-side'>
        {user ? userLoggedIn : userNotLoggedIn}
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
