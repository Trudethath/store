import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthProvider"

function RequireAuth({ children }) {
  let auth = useContext(AuthContext)
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to='/signIn' state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
