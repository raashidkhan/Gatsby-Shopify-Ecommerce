import React, { useState, useContext } from "react"
import StoreContext from "../../context/store"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import {
  FormLabel,
  FormInput,
  elevation,
  radius,
  typeScale,
  SecondarySolidButton,
  SecondaryOutlineButton,
  Devices,
} from "../../utils"
import styled from "styled-components"
const CUSTOMER_UPDATE = gql`
  mutation customerUpdate(
    $customerAccessToken: String!
    $customer: CustomerUpdateInput!
  ) {
    customerUpdate(
      customerAccessToken: $customerAccessToken
      customer: $customer
    ) {
      customer {
        id
      }
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

const CustomerUpdateForm = ({ showForm }) => {
  const { customerAccessToken } = useContext(StoreContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <FormWrapper>
      <Mutation mutation={CUSTOMER_UPDATE}>
        {customerUpdate => {
          return (
            <Form>
              <h2>Update your personal details</h2>
              <FormLabel htmlFor="firstName">
                First Name
                <FormInput
                  htmlFor="firstName"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="lastName">
                Last Name
                <FormInput
                  htmlFor="lastName"
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </FormLabel>
              <FormLabel htmlFor="phone">
                Phone
                <FormInput
                  htmlFor="phone"
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </FormLabel>
              <Buttons>
                <SecondarySolidButton
                  onClick={e => {
                    e.preventDefault()

                    customerUpdate({
                      variables: {
                        customerAccessToken: customerAccessToken.accessToken,
                        customer: {
                          firstName: firstName,
                          lastName: lastName,
                          phone: phone,
                        },
                      },
                    }).then(result => {
                      if (
                        result.data.customerUpdate.customerUserErrors.length
                      ) {
                        console.log(
                          result.data.customerUpdate.customerUserErrors[0]
                            .message
                        )
                      }

                      typeof window !== "undefined" && window.location.reload()
                    })
                  }}
                >
                  Update
                </SecondarySolidButton>
                <SecondaryOutlineButton
                  onClick={() => {
                    showForm(false)
                  }}
                >
                  Cancel
                </SecondaryOutlineButton>
              </Buttons>
            </Form>
          )
        }}
      </Mutation>
    </FormWrapper>
  )
}

export default CustomerUpdateForm

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  background-color: rgba(255, 255, 255, 0.9);

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`
const Form = styled.form`
  width: 40%;
  padding: 5vw;
  overflow-y: auto;
  box-shadow: ${elevation[200]};
  border-radius: ${radius.large};
  position: relative;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 1);

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
  }
  @media ${Devices.tab} {
    width: 90%;
  }

  h2 {
    font-size: ${typeScale.header5};

    margin-bottom: 2.4rem;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
