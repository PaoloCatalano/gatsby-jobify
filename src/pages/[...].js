import React from "react"
import { Router } from "@reach/router"
import {
  LandingComponent,
  Register,
  Error,
  ProtectedRoute,
  AllJobs,
  Profile,
  Stats,
  AddJob,
} from "../components"

export default function app({ serverData }) {
  return (
    <Router basepath="dashboard">
      <ProtectedRoute path="/" component={Stats} />
      <ProtectedRoute path="/all-jobs" component={AllJobs} />
      <ProtectedRoute path="/add-job" component={AddJob} />
      <ProtectedRoute
        path="/profile"
        component={Profile}
        serverData={serverData}
      />
      <Register path="/register" />
      <LandingComponent path="/landing" />
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
