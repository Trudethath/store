// import jwt_decode from "jwt-decode"

// export default function IsAuthorized() {
//   const token = localStorage.getItem("token")
//   if (token) {
//     let dateNow = new Date()
//     const tokenExp = jwt_decode(token).exp
//     if (tokenExp < dateNow.getTime() / 1000) return false
//     else return true
//   } else {
//     return false
//   }
// }
