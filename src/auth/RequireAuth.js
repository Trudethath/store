import { useLocation, Navigate } from "react-router-dom"
import useAuth from "./useAuth"

function RequireAuth({ children }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to='/signin' state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
