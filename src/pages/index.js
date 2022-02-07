import React from "react"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from "gatsby"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/dashboard/register" className="btn btn-hero">
            Login/Register
          </Link>
          <Link to="/page-2" className="btn btn-hero">
            Page 2
          </Link>
          <Link to="/using-ssr" className="btn btn-hero">
            Using SSR
          </Link>
          <Link to="/using-dsg" className="btn btn-hero">
            Using DSG
          </Link>
          <Link to="/using-typescript" className="btn btn-hero">
            Using Typescript
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
