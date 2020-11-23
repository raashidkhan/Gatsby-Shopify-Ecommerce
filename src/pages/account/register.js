import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"
import AccountLayout from "../../components/accounts/AccountLayout"
import { navigate } from "gatsby"
import { Link } from "gatsby"
const CUSTOMER_REGISTER = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

const RegisterForm = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <div>
      <Mutation mutation={CUSTOMER_REGISTER}>
        {customerRegister => {
          return (
            <form>
              <h1>Register</h1>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  htmlFor="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  htmlFor="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </label>
              <button
                className="button"
                onClick={e => {
                  e.preventDefault()
                  customerRegister({
                    variables: {
                      input: {
                        email: email,
                        password: password,
                      },
                    },
                  })
                    .then(result => {
                      navigate(`/account/login`)
                    })
                    .catch(err => {
                      alert(err)
                    })
                }}
              >
                REGISTER
              </button>
              <Link to="/account/login">Sign IN</Link>
            </form>
          )
        }}
      </Mutation>
    </div>
  )
}

const Register = () => {
  return (
    <AccountLayout>
      <RegisterForm />
    </AccountLayout>
  )
}

export default Register
