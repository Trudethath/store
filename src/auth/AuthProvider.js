import { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signin = (newUser, callback) => {
    // ...
    return true
  }

  const signout = (callback) => {
    // ...
    return true
  }

  const value = { user, setUser, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
