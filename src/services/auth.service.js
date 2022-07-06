import axios from "axios"
import URLS from "../utils/URLS"
function AuthService() {
  const login = (user) => {
    return axios.post(URLS.sign_in_url, user).then((response) => {
      if (response.data.accessToken !== "") {
        const token = response.data.token
        const { username, email, password } = response.data.user

        localStorage.setItem(
          "user",
          JSON.stringify({
            token,
            username: username,
            email: email,
            password: password,
          })
        )
      }
      return response.data
    })
  }
  const logout = () => {
    localStorage.removeItem("user")
  }
  const register = (user) => {
    return axios.post(URLS.sign_up_url, user)
  }
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
  }
  return { login, logout, register, getCurrentUser }
}
export default new AuthService()
