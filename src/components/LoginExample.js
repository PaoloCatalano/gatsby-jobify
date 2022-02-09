import React, { useState } from "react"
import styled from "styled-components"
import FormRow from "./FormRow"
import axios from "axios"

function Login() {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    const { email, password } = values
    const loginUser = { email, password }
    try {
      const { data } = await axios.post(
        `https://e-commerce-tutorial.herokuapp.com/api/v1/auth/login`,
        loginUser
      )
      console.log(data)
      setLoading(false)
      setValues({ name: "", email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Wrapper className="page">
        <form
          className={loading ? "form form-loading" : "form"}
          onSubmit={onSubmit}
        >
          <center>
            <h3>Login is blocked by CORS!</h3>
          </center>

          {/* single form row */}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/* end of single form row */}
          {/* single form row */}
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          {/* end of single form row */}
          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .alert {
    margin-top: 3rem;
  }
  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    text-align: center;
  }
  .btn {
    margin-bottom: 1.5rem;
  }
  .register-link,
  .reset-link {
    display: inline-block;
    margin-left: 0.25rem;
    text-transform: capitalize;
    color: var(--primary-500);
    cursor: pointer;
  }
  .reset-link {
    margin-top: 0.25rem;
  }
  .btn:disabled {
    cursor: not-allowed;
  }
`

export default Login
