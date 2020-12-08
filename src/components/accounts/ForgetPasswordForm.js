import React, { useState } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import {
  typeScale,
  FormInput,
  FormLabel,
  PrimaryButton,
  SecondaryButton,
} from "../../utils"

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
              <h3>Reset your password</h3>
              <p>
                We will send you a link to your email to reset your password.
              </p>

              <FormLabel htmlFor="email">
                Email
                <FormInput
                  type="email"
                  htmlFor="email"
                  onChange={e => setEmailReset(e.target.value)}
                />
              </FormLabel>

              <PrimaryButton
                style={{ marginBottom: "2.4rem" }}
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
                SEND LINK
              </PrimaryButton>
              <SecondaryButton
                onClick={() => {
                  setPasswordForgot(false)
                }}
              >
                Back
              </SecondaryButton>
            </Form>
          )
        }}
      </Mutation>
    </>
  )
}

export default ForgetPasswordForm

const Form = styled.form`
  padding: 5vw 0;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: ${typeScale.header4};

    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 2.5vw;
  }
`
