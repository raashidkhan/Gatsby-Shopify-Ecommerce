import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"
import AccountLayout from "../../components/accounts/AccountLayout"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  radius,
  elevation,
  typeScale,
  FormInput,
  FormLabel,
  PrimaryButton,
  InternalLinkButton,
} from "../../utils"
import Layout from "../../components/layout"

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
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <>
      <Mutation mutation={CUSTOMER_REGISTER}>
        {customerRegister => {
          return (
            <Form>
              <FormHeading>Register</FormHeading>
              <FormLabel htmlFor="firstName">
                First Name
                <FormInput
                  type="text"
                  htmlFor="firstName"
                  onChange={e => setFirstName(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="lastName">
                Last Name
                <FormInput
                  type="text"
                  htmlFor="lastName"
                  onChange={e => setLastName(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="email">
                Email
                <FormInput
                  type="email"
                  htmlFor="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="password" style={{ marginBottom: "1.2rem" }}>
                Password
                <FormInput
                  type="password"
                  htmlFor="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </FormLabel>
              <PrimaryButton
                style={{ marginBottom: "1.2rem" }}
                className="button"
                onClick={e => {
                  e.preventDefault()
                  customerRegister({
                    variables: {
                      input: {
                        email: email,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
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
              </PrimaryButton>
              <InternalLinkButton>
                <Link to="/account/login">Sign In</Link>
              </InternalLinkButton>
            </Form>
          )
        }}
      </Mutation>
    </>
  )
}

const Register = () => {
  return (
    <Layout>
      <AccountLayout>
        <LoginPageWrapper>
          <div>
            <RegisterForm />
          </div>
        </LoginPageWrapper>
      </AccountLayout>
    </Layout>
  )
}

export default Register

const LoginPageWrapper = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 5vw;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1526796836-4da91257199a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${radius.large};
  //z-index: -5;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(15px) hue-rotate(30deg) saturate(120%);
  }
  div {
    position: relative;
    z-index: 10;
  }
`
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
