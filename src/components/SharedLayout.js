import Wrapper from "../assets/wrappers/SharedLayout"
import { Navbar, BigSidebar, SmallSidebar } from "."
import React from "react"

const SharedLayout = ({ children }) => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">{children}</div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
