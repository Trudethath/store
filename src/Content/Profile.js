import { useEffect, useState } from "react"
import axios from "axios"
import URLS from "../utils/URLS"
import authHeader from "../auth/authHeader"

function Profile() {
  const [email, setEmail] = useState("")

  useEffect(() => {
    axios
      .get(URLS.get_profile_url, authHeader())
      .then((response) => {
        console.log(response)
        setEmail(response.data.email)
        return response
      })
      .catch((error) => {
        return error
      })
  }, [])

  // return email ? email : "Couldn't find your email "
  return (
    <div className='profile-container'>
      <h2>Profile</h2>
      <p>email: {email ? email : "Couldn't find your email "}</p>
    </div>
  )
}

export default Profile
