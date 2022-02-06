import { useAppContext } from "../context/appContext"
import { navigate } from "gatsby"

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext()
  if (!user) {
    navigate("/landing")
    return null
  }
  return children
}

export default ProtectedRoute
