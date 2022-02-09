import * as React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AniLink swipe top="exit" direction="down" entryOffset={80} to="/using-ssr">
      Swipe to SSR
    </AniLink>
  </Layout>
)

export default SecondPage
