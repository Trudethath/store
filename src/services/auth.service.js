import axios from "axios"
import { useState } from "react"
import URLS from "../utils/URLS"
import authHeader from "./auth-header"
function AuthService() {
  // const [currentUser, setCurrentUser] = useState("")

  const login = (user) => {
    return axios.post(URLS.sign_in_url, user).then((response) => {
      const token = response.data.access_token
      if (token) {
        localStorage.setItem("token", token)
      }
      return response.data
    })
  }
  const logout = () => {
    localStorage.removeItem("token")
  }
  const register = (user) => {
    return axios.post(URLS.sign_up_url, user)
  }

  // const getData = () => {
  //   console.log(authHeader)
  // }

  return { login, logout, register }
}
export default new AuthService()
