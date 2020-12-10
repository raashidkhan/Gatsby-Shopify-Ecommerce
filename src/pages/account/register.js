import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import AccountLayout from "../../components/accounts/AccountLayout"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import SignUpImage from "../../assets/sign-up-image.jpg"
import {
  typeScale,
  FormInput,
  FormLabel,
  SecondarySolidButton,
  PrimarySolidButton,
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
    <FormWrapper>
      <Mutation mutation={CUSTOMER_REGISTER}>
        {customerRegister => {
          return (
            <Form>
              <FormHeading>Sign up for a new account</FormHeading>

              <NameLabel>
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
              </NameLabel>

              <FormLabel htmlFor="email">
                Email
                <FormInput
                  type="email"
                  htmlFor="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="password">
                Password
                <FormInput
                  type="password"
                  htmlFor="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </FormLabel>
              <SecondarySolidButton
                style={{ marginTop: "2.4rem" }}
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
              </SecondarySolidButton>
            </Form>
          )
        }}
      </Mutation>
    </FormWrapper>
  )
}

const Register = () => {
  return (
    <Layout>
      <AccountLayout>
        <SignUpPageWrapper>
          <SignUpImageWrapper>
            <h3>already have an account?</h3>
            <Link to="/account/login">
              <PrimarySolidButton>Log in</PrimarySolidButton>
            </Link>
          </SignUpImageWrapper>
          <RegisterForm />
        </SignUpPageWrapper>
      </AccountLayout>
    </Layout>
  )
}

export default Register

const SignUpPageWrapper = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  position: relative;
  //z-index: -5;
`
const SignUpImageWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${SignUpImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h3 {
    font-weight: 400;
    margin-bottom: 2.4rem;
  }
`

const FormWrapper = styled.div`
  width: 55%;
  padding: 5vw;
`

const Form = styled.form`
  padding: 5vw 0;
  display: flex;
  flex-direction: column;
`
const FormHeading = styled.h2`
  font-size: ${typeScale.header4};
  margin-bottom: 2.5vw;
  text-align: center;
`

const NameLabel = styled.div`
  display: flex;
  justify-content: space-between;
  //margin-bottom: 2.4rem;
`
