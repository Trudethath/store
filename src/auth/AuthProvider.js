import { createContext, useState } from "react"
import axios from "axios"
import URLS from "../utils/URLS"
import { toast, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const toastHandler = (status, message) => {
    if (status === "error") {
      toast.error(message, {
        transition: Zoom,
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      })
    } else if (status === "success") {
      toast.success(message, {
        transition: Zoom,
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  const signin = (username, callback) => {
    setUser(username)
    callback()
  }

  const signout = (callback) => {
    localStorage.removeItem("token")
    setUser(null)
    callback()
  }

  //POST
  const post_signin = (user, callback) => {
    return axios.post(URLS.sign_in_url, user).then((response) => {
      const token = response.data.access_token
      if (token) {
        localStorage.setItem("token", token)
        signin(user.email, callback)
      }
      return response.data
    })
  }

  const post_signup = (user, callback) => {
    console.log("post_signup")
    return axios
      .post(URLS.sign_up_url, user)
      .then((response) => {
        toastHandler("success", "Successfully registered!")
        callback()
        return response
      })
      .catch((error) => {
        console.log("asdasdasd", error)
        toastHandler(
          "error",
          `Error:${error.response.status} - User already exists!`
        )
        return error
      })
  }

  const value = { user, signin, signout, post_signin, post_signup }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
