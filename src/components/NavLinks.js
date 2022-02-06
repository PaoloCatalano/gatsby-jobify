import links from "../utils/links"
import { Link } from "gatsby"
import React from "react"

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map(link => {
        const { text, path, id, icon } = link

        return (
          <Link
            to={path}
            key={id}
            onClick={toggleSidebar}
            className="nav-link"
            activeClassName="nav-link active"
          >
            <span className="icon">{icon}</span>
            {text}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLinks
