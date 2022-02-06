import React from "react"
import { AppProvider } from "./src/context/appContext"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <AppProvider>{element}</AppProvider>
    </>
  )
}
