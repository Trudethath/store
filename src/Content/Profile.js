import React, { useEffect, useState } from "react"
import axios from "axios"
import authService from "../services/auth.service"
import URLS from "../utils/URLS"
import authHeader from "../services/auth-header"

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

  return email ? email : "You must be logged in."
}

export default Protected
