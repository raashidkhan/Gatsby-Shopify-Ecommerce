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
  red,
  neutral,
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
                htmlFor="forgotPassword"
                onClick={passwordForgot => {
                  setPasswordForgot(true)
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    marginTop: "-1.2rem",
                    display: "block",
                  }}
                >
                  {" "}
                  Forgot Password?
                </span>
              </FormLabel>
              <IncorrectMessage message={incorrectUserMessage}>
                {incorrectUserMessage}
              </IncorrectMessage>
              <SecondaryButton
                style={{ marginTop: "2.4rem" }}
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
            </Form>
          )
        }}
      </Mutation>
    </>
  )
}

export default LoginForm

const Form = styled.form`
  padding: 5vw 0;
  display: flex;
  flex-direction: column;
`
const FormHeading = styled.h2`
  font-size: ${typeScale.header3};
  margin-bottom: 1.9rem;
  text-align: center;
`
const IncorrectMessage = styled.p`
  display: ${props => (props.message === null ? "none" : "inline-block")};
  padding: 0.5rem;
  background-color: ${red[100]};
  align-self: flex-start;
  color: ${neutral[100]};
  border-radius: ${radius.medium};
`
