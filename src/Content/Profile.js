import React, { useState } from "react"
import authService from "../services/auth.service"

function Protected() {
  const [user, setUser] = useState(authService.getCurrentUser)
  return user ? user.username : "You have to be logged in"
}

export default Protected
