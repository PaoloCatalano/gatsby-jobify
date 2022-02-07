import React, { useEffect } from "react"
import { useAppContext } from "../context/appContext"
import { StatsContainer, Loading, ChartsContainer, SharedLayout } from "."

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <SharedLayout>
        <Loading center />
      </SharedLayout>
    )
  }
  return (
    <SharedLayout>
      <StatsContainer />
      {monthlyApplications?.length > 0 && <ChartsContainer />}
    </SharedLayout>
  )
}

export default Stats
