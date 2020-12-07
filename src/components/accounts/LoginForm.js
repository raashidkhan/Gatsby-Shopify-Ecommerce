import React, { useState, useContext } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import StoreContext from "../../context/store"
import { Link } from "gatsby"
import {
  FormInput,
  FormLabel,
  radius,
  elevation,
  typeScale,
  InternalLinkButton,
  SecondaryButton,
} from "../../utils"
import styled from "styled-components"

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

const LoginForm = ({ messageInfo, setPasswordForgot }) => {
  const { setValue } = useContext(StoreContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(null)
  const [incorrectUserMessage, setIncorrectUserMessage] = useState(null)
  const handleCustomerAccessToken = value => {
    setValue(value)
  }
  return (
    <>
      <Mutation mutation={CUSTOMER_LOGIN}>
        {customerLogin => {
          return (
            <Form>
              {messageInfo && <p>{messageInfo}</p>}
              <FormHeading>Login</FormHeading>
              <FormLabel htmlFor="email">
                Email
                <FormInput
                  type="email"
                  htmlFor="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="password">
                Password
                <FormInput
                  type="password"
                  htmlFor="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </FormLabel>
              <FormLabel
                style={{ marginBottom: "1.2rem" }}
                htmlFor="forgotPassword"
                onClick={passwordForgot => {
                  setPasswordForgot(true)
                }}
              >
                Forgot Password?
              </FormLabel>
              <p>{incorrectUserMessage}</p>
              <SecondaryButton
                style={{ marginBottom: "1.2rem" }}
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
                        result.data.customerAccessTokenCreate.customerUserErrors
                          .length
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
              </SecondaryButton>
              <InternalLinkButton>
                <Link to="/account/register">Register</Link>
              </InternalLinkButton>
            </Form>
          )
        }}
      </Mutation>
    </>
  )
}

export default LoginForm

const Form = styled.form`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: ${radius.large};
  box-shadow: ${elevation[200]};
`
const FormHeading = styled.h2`
  font-size: ${typeScale.header3};
  margin-bottom: 1.9rem;
  text-align: center;
`
