import React, { useState, useContext } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../context/store"
import AccountLayout from "../../components/accounts/AccountLayout"
import { Link } from "gatsby"
import Layout from "../../components/layout"
const CUSTOMER_LOGIN = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

const CUSTOMER_PASSWORD_RESET = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

const LoginForm = () => {
  const { setValue } = useContext(StoreContext)
  const [passwordForgot, setPasswordForgot] = useState(false)

  const [email, setEmail] = useState("")
  const [emailReset, setEmailReset] = useState("")

  const [messsageInfo, setMessageInfo] = useState("")

  const [password, setPassword] = useState(null)

  const [incorrectUserMessage, setIncorrectUserMessage] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  return (
    <>
      {passwordForgot ? (
        <>
          <Mutation mutation={CUSTOMER_PASSWORD_RESET}>
            {customerRecover => {
              return (
                <div>
                  <h2>RESET YOUR PASSWORD</h2>
                  <p>We will send you an email to reset your password.</p>

                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      htmlFor="email"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </label>

                  <button
                    className="button"
                    onClick={() => {
                      customerRecover({
                        variables: {
                          email: emailReset,
                        },
                      }).then(() => {
                        setMessageInfo(
                          "We've sent you an email with a link to update your password."
                        )
                        setPasswordForgot(false)
                      })
                    }}
                  >
                    SUBMIT
                  </button>
                  <button
                    onClick={() => {
                      setPasswordForgot(false)
                    }}
                  >
                    Back
                  </button>
                </div>
              )
            }}
          </Mutation>
        </>
      ) : (
        <Mutation mutation={CUSTOMER_LOGIN}>
          {customerLogin => {
            return (
              <form>
                {messsageInfo && <div>{messsageInfo}</div>}
                <h1>Login</h1>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    htmlFor="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    htmlFor="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </label>
                <label
                  htmlFor="forgotPassword"
                  onClick={passwordForgot => {
                    setPasswordForgot(true)
                  }}
                >
                  Forgot Password?
                </label>
                <p>{incorrectUserMessage}</p>
                <button
                  type="submit"
                  onClick={e => {
                    e.preventDefault()
                    customerLogin({
                      variables: {
                        input: {
                          email: email,
                          password: password,
                        },
                      },
                    })
                      .then(result => {
                        handleCustomerAccessToken(
                          result.data.customerAccessTokenCreate
                            .customerAccessToken
                        )
                        if (
                          result.data.customerAccessTokenCreate
                            .customerUserErrors.length
                        ) {
                          setIncorrectUserMessage(
                            "Username or Password is incorrect"
                          )
                        }
                      })
                      .catch(err => {
                        alert(err)
                        console.log("fail")
                      })
                  }}
                >
                  SIGN IN
                </button>
                <Link to="/account/register">Register</Link>
              </form>
            )
          }}
        </Mutation>
      )}
    </>
  )
}

const Login = () => {
  return (
    <Layout>
      <AccountLayout log={false}>
        <LoginForm />
      </AccountLayout>
    </Layout>
  )
}

export default Login
