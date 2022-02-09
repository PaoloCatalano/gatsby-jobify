import React from "react"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <AniLink fade to="/dashboard/register" className="btn btn-hero">
            Login/Register
          </AniLink>
          <AniLink
            swipe
            top="exit"
            direction="up"
            entryOffset={80}
            to="page-2"
            duration={2}
            className="btn btn-hero"
          >
            Page 2
          </AniLink>
          <AniLink
            paintDrip
            color="rebeccapurple"
            // hex="#663399"
            to="using-ssr"
            className="btn btn-hero"
          >
            Using SSR
          </AniLink>
          <AniLink fade duration={4} to="/using-dsg" className="btn btn-hero">
            Using DSG
          </AniLink>
          <AniLink
            cover
            duration={2}
            bg="#663399"
            // bg="black"
            direction="left"
            to="using-typescript"
            className="btn btn-hero"
          >
            Using Typescript
          </AniLink>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
