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
} from "../../utils"

const CUSTOMER_EDIT_ADDRESS = gql`
  mutation customerAddressUpdate(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
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

const CUSTOMER_EDIT_DEFAULT_ADDRESS = gql`
  mutation customerDefaultAddressUpdate(
    $customerAccessToken: String!
    $addressId: ID!
  ) {
    customerDefaultAddressUpdate(
      customerAccessToken: $customerAccessToken
      addressId: $addressId
    ) {
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

const EditAddressForm = ({
  addressToEdit,
  defaultAddress,
  editAddressFormToggle,
}) => {
  const { customerAccessToken } = useContext(StoreContext)
  const [isDefaultAddress, setIsDefaultAddress] = useState(defaultAddress)
  const [firstName, setFirstName] = useState(addressToEdit.firstName)
  const [lastName, setLastName] = useState(addressToEdit.lastName)
  const [company, setCompany] = useState(addressToEdit.company)
  const [address, setAddress] = useState(addressToEdit.address2)
  const [apartment, setApartment] = useState(addressToEdit.address1)
  const [city, setCity] = useState(addressToEdit.city)
  const [country, setCountry] = useState(addressToEdit.country)
  const [zip, setZip] = useState(addressToEdit.zip)
  const [phone, setPhone] = useState(addressToEdit.phone)
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
      <Mutation mutation={CUSTOMER_EDIT_ADDRESS}>
        {customerAddressUpdate => {
          return (
            <Mutation mutation={CUSTOMER_EDIT_DEFAULT_ADDRESS}>
              {customerDefaultAddressUpdate => {
                return (
                  <Form>
                    <h2>Add new address</h2>
                    <p className="twoColumn">
                      <FormLabel htmlFor="firstName">
                        First Name
                        <FormInput
                          htmlFor="firstName"
                          type="text"
                          value={firstName === null ? "" : firstName}
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </FormLabel>
                      <FormLabel htmlFor="lastName">
                        Last Name
                        <FormInput
                          htmlFor="lastName"
                          type="text"
                          value={lastName === null ? "" : lastName}
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
                          value={company === null ? "" : company}
                          onChange={e => setCompany(e.target.value)}
                        />
                      </FormLabel>
                      <FormLabel htmlFor="phone">
                        Phone
                        <FormInput
                          htmlFor="phone"
                          type="tel"
                          value={phone === null ? "" : phone}
                          onChange={e => setPhone(e.target.value)}
                        />
                      </FormLabel>
                    </p>

                    <FormLabel htmlFor="address">
                      Address
                      <FormInput
                        htmlFor="address"
                        type="text"
                        value={address === null ? "" : address}
                        onChange={e => setAddress(e.target.value)}
                      />
                    </FormLabel>

                    <FormLabel htmlFor="apartment">
                      Apartment
                      <FormInput
                        htmlFor="apartment"
                        type="text"
                        value={apartment === null ? "" : apartment}
                        onChange={e => setApartment(e.target.value)}
                      />
                    </FormLabel>
                    <p>
                      <FormLabel htmlFor="city">
                        City
                        <FormInput
                          htmlFor="city"
                          type="text"
                          value={city === null ? "" : city}
                          onChange={e => setCity(e.target.value)}
                        />
                      </FormLabel>
                    </p>

                    <p className="twoColumn">
                      <FormLabel htmlFor="country">
                        Country
                        <Select
                          value={country === null ? "" : country}
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
                          value={zip === null ? "" : zip}
                          onChange={e => setZip(e.target.value)}
                        />
                      </FormLabel>
                    </p>

                    <p className="twoColumn buttons">
                      <SecondarySolidButton
                        width="100"
                        onClick={e => {
                          e.preventDefault()
                          customerAddressUpdate({
                            variables: {
                              customerAccessToken:
                                customerAccessToken.accessToken,
                              id: addressToEdit.id,
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
                            typeof window !== "undefined" &&
                              window.location.reload()
                          })
                          isDefaultAddress &&
                            customerDefaultAddressUpdate({
                              variables: {
                                customerAccessToken:
                                  customerAccessToken.accessToken,
                                addressId: addressToEdit.id,
                              },
                            }).then(result => {
                              typeof window !== "undefined" &&
                                window.location.reload()
                            })
                        }}
                      >
                        Submit
                      </SecondarySolidButton>
                      <SecondaryOutlineButton
                        onClick={() => editAddressFormToggle(false)}
                      >
                        Cancel
                      </SecondaryOutlineButton>
                    </p>
                  </Form>
                )
              }}
            </Mutation>
          )
        }}
      </Mutation>
    </FormWrapper>
  )
}

export default EditAddressForm

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
