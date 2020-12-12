import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import StoreContext from "../../context/store"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import axios from "axios"
import {
  FormLabel,
  FormInput,
  SecondarySolidButton,
  SecondaryOutlineButton,
  Select,
  elevation,
  radius,
  neutral,
  Devices,
} from "../../utils"

const CUSTOMER_CREATE_ADDRESS = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
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

const AddressForm = ({ addressFormToggle }) => {
  const { customerAccessToken } = useContext(StoreContext)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [address, setAddress] = useState("")
  const [apartment, setApartment] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [countriesAll, setCountriesAll] = useState([])

  const getLocations = () => {
    return axios("https://restcountries.eu/rest/v2/all")
  }

  useEffect(() => {
    getLocations().then(({ data }) => {
      setCountriesAll(data)
    })
  }, [])
  return (
    <FormWrapper>
      <Mutation mutation={CUSTOMER_CREATE_ADDRESS}>
        {customerAddressCreate => {
          return (
            <Form>
              <h2>Add new address</h2>
              <p className="twoColumn">
                <FormLabel htmlFor="firstName">
                  First Name
                  <FormInput
                    htmlFor="firstName"
                    type="text"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </FormLabel>
                <FormLabel htmlFor="lastName">
                  Last Name
                  <FormInput
                    htmlFor="lastName"
                    type="text"
                    onChange={e => setLastName(e.target.value)}
                  />
                </FormLabel>
              </p>
              <p className="twoColumn">
                <FormLabel htmlFor="company">
                  Company
                  <FormInput
                    htmlFor="company"
                    type="text"
                    onChange={e => setCompany(e.target.value)}
                  />
                </FormLabel>
                <FormLabel htmlFor="phone">
                  Phone
                  <FormInput
                    htmlFor="phone"
                    type="tel"
                    onChange={e => setPhone(e.target.value)}
                  />
                </FormLabel>
              </p>

              <FormLabel htmlFor="address">
                Address
                <FormInput
                  htmlFor="address"
                  type="text"
                  onChange={e => setAddress(e.target.value)}
                />
              </FormLabel>

              <FormLabel htmlFor="apartment">
                Apartment
                <FormInput
                  htmlFor="apartment"
                  type="text"
                  onChange={e => setApartment(e.target.value)}
                />
              </FormLabel>
              <p>
                <FormLabel htmlFor="city">
                  City
                  <FormInput
                    htmlFor="city"
                    type="text"
                    onChange={e => setCity(e.target.value)}
                  />
                </FormLabel>
              </p>

              <p className="twoColumn">
                <FormLabel htmlFor="country">
                  Country
                  <Select
                    onChange={e => setCountry(e.target.value)}
                    onBlur={e => setCountry(e.target.value)}
                  >
                    {countriesAll.map(country => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </FormLabel>
                <FormLabel htmlFor="zipCode">
                  Zip Code
                  <FormInput
                    htmlFor="zipCode"
                    type="text"
                    onChange={e => setZip(e.target.value)}
                  />
                </FormLabel>
              </p>

              <p className="twoColumn buttons">
                <SecondarySolidButton
                  width="100"
                  onClick={e => {
                    customerAddressCreate({
                      variables: {
                        customerAccessToken: customerAccessToken.accessToken,
                        address: {
                          address1: address,
                          address2: apartment,
                          city: city,
                          company: company,
                          country: country,
                          firstName: firstName,
                          lastName: lastName,
                          phone: phone,
                          zip: zip,
                        },
                      },
                    }).then(result => {
                      typeof window !== "undefined" && window.location.reload()
                    })
                  }}
                >
                  Submit
                </SecondarySolidButton>
                <SecondaryOutlineButton
                  onClick={() => addressFormToggle(false)}
                >
                  Cancel
                </SecondaryOutlineButton>
              </p>
            </Form>
          )
        }}
      </Mutation>
    </FormWrapper>
  )
}

export default AddressForm

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
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`

const Form = styled.form`
  width: 50%;
  height: 80%;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  padding: 5vw;
  padding-top: calc(5vw + 2.4rem);
  box-shadow: ${elevation[200]};
  border-radius: ${radius.large};
  position: relative;
  @media ${Devices.tab} {
    width: 90%;
    padding-top: 10rem;
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${neutral[400]};
    border-radius: 0.3rem;
  }
  & > h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 5vw;
    background: rgba(255, 255, 255, 1);
    box-shadow: ${elevation[100]};
  }

  & > p.twoColumn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
  }
  & > p.twoColumn.buttons {
    margin-top: 2.4rem;
  }
`
