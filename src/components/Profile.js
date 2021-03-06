import React, { useState } from "react"
import { FormRow, Alert, SharedLayout } from "."
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/DashboardFormPage"

const Profile = ({ serverData = { count: 0 } }) => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !email || !lastName || !location) {
      displayAlert()
      return
    }
    updateUser({ name, email, lastName, location })
  }

  return (
    <SharedLayout>
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <h3>
            profile <span>{serverData.count}</span>
          </h3>
          {showAlert && <Alert />}
          <div className="form-center">
            <FormRow
              type="text"
              name="name"
              value={name}
              handleChange={e => setName(e.target.value)}
            />
            <FormRow
              type="text"
              labelText="last name"
              name="lastName"
              value={lastName}
              handleChange={e => setLastName(e.target.value)}
            />
            <FormRow
              type="email"
              name="email"
              value={email}
              handleChange={e => setEmail(e.target.value)}
            />
            <FormRow
              type="text"
              name="location"
              value={location}
              handleChange={e => setLocation(e.target.value)}
            />
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "save changes"}
            </button>
          </div>
        </form>
      </Wrapper>
    </SharedLayout>
  )
}

export default Profile
