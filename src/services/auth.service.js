// import axios from "axios"
// import URLS from "../utils/URLS"
// function AuthService() {
//   // const [currentUser, setCurrentUser] = useState("")

//   const login = (user) => {
//     return axios.post(URLS.sign_in_url, user).then((response) => {
//       const token = response.data.access_token
//       if (token) {
//         localStorage.setItem("token", token)
//       }
//       return response.data
//     })
//   }
//   const logout = () => {
//     localStorage.removeItem("token")
//   }
//   const register = (user) => {
//     return axios.post(URLS.sign_up_url, user)
//   }

//   return { login, logout, register }
// }
// export default new AuthService()
