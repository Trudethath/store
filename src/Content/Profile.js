import { useEffect, useState } from "react"
import axios from "axios"
import URLS from "../utils/URLS"
import authHeader from "../auth/authHeader"

function Protected() {
  const [email, setEmail] = useState("")

  useEffect(() => {
    axios
      .get(URLS.get_profile_url, authHeader())
      .then((response) => {
        setEmail(response.data.email)
        return response
      })
      .catch((error) => {
        return error
      })
  }, [])

  return email ? email : "Couldn't find your email "
}

export default Protected
