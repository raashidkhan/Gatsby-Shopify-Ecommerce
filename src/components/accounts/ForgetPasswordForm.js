import React, { useState } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"

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

const ForgetPasswordForm = ({ setMessageInfo, setPasswordForgot }) => {
  const [emailReset, setEmailReset] = useState("")
  return (
    <>
      <Mutation mutation={CUSTOMER_PASSWORD_RESET}>
        {customerRecover => {
          return (
            <Form>
              <h2>RESET YOUR PASSWORD</h2>
              <p>We will send you an email to reset your password.</p>

              <label htmlFor="email">
                Email
                <input
                  type="email"
                  htmlFor="email"
                  onChange={e => setEmailReset(e.target.value)}
                />
              </label>

              <button
                className="button"
                onClick={e => {
                  e.preventDefault()
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
            </Form>
          )
        }}
      </Mutation>
    </>
  )
}

export default ForgetPasswordForm

const Form = styled.form`
  background-color: ${props => props.theme.primaryColor};
`
