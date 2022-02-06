import React from "react"
import { Router } from "@reach/router"
import {
  LandingComponent,
  Register,
  Error,
  ProtectedRoute,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from "../components"

export default function app({ serverData }) {
  console.log(serverData)
  return (
    <Router>
      {/* <SharedLayout ????? > */}
      <ProtectedRoute path="/">
        <SharedLayout path="/">
          <Stats path="/" />
          <AllJobs path="all-jobs" />
          <AddJob path="add-job" />
          <Profile path="profile" serverData={serverData} />
          <Error path="*" />
        </SharedLayout>
      </ProtectedRoute>
      <Register path="/register" />
      <LandingComponent path="/Landing" />
      <Error path="*" />
    </Router>
  )
}

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
