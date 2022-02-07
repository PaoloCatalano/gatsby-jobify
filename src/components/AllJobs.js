import { JobsContainer, SearchContainer, SharedLayout } from "."
import React from "react"

const AllJobs = () => {
  return (
    <SharedLayout>
      <SearchContainer />
      <JobsContainer />
    </SharedLayout>
  )
}

export default AllJobs
