import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LoginExample from "../components/LoginExample"

const UsingSSR = ({ serverData = { count: 0 } }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>SSR page</h1>
      <div>
        <h1>{serverData.count}</h1>
        <p>
          <a href="https://e-commerce-tutorial.herokuapp.com/api/v1/products">
            from this API
          </a>
        </p>
      </div>

      {/* LoginExample is blocked by CORS! */}
      <LoginExample />

      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(
      `https://e-commerce-tutorial.herokuapp.com/api/v1/products`
    )
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
