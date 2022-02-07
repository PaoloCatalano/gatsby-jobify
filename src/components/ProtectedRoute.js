// import { useAppContext } from "../context/appContext"
// import { navigate } from "gatsby"

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAppContext()
//   if (!user) {
//     navigate("/landing")
//     return null
//   }
//   return children
// }

// export default ProtectedRoute

import React from "react"
import { navigate } from "gatsby"
import { useAppContext } from "../context/appContext"
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAppContext()

  const checkLoginStatus = () => {
    if (!user) {
      navigate("/dashboard/landing")
    }
  }

  React.useEffect(() => {
    checkLoginStatus()
    //eslint-disable-next-line
  }, [user])

  return <Component {...rest} />
}
export default ProtectedRoute
