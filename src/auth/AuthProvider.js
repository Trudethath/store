import { createContext, useState } from "react"
import axios from "axios"
import URLS from "../utils/URLS"
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signin = (username, callback) => {
    setUser(username)
    callback()
  }

  const signout = (callback) => {
    setUser(null)
    return true
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

  const post_signup = () => {
    // ...
    return true
  }

  const value = { user, signin, signout, post_signin, post_signup }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
