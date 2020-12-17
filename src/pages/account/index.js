import React, { useState, useContext } from "react"
import gql from "graphql-tag"
import StoreContext from "../../context/store"
import { Query } from "react-apollo"
import Layout from "../../components/layout"
import Logout from "../../components/accounts/Logout"
import CustomerDetails from "../../components/accounts/CustomerDetails"
import OrderList from "../../components/accounts/OrderList"
import SavedAddress from "../../components/accounts/SavedAddress"
import AddressForm from "../../components/accounts/AddressForm"

import styled from "styled-components"
import { Link } from "gatsby"
import {
  SecondaryOutlineButton,
  typeScale,
  radius,
  PrimarySolidButton,
  Devices,
} from "../../utils"
import SkeletonLoader from "../../components/SkeletonLoader"

const CUSTOMER_INFO = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      lastName
      phone
      defaultAddress {
        id
        address1
        address2
        city
        lastName
        firstName
        country
        name
        zip
        company
        phone
      }
      orders(first: 10, reverse: true) {
        edges {
          node {
            name
            totalPrice
            processedAt
            statusUrl
            currencyCode
            orderNumber
            fulfillmentStatus
            financialStatus
            successfulFulfillments {
              trackingCompany
            }
            shippingAddress {
              address1
              address2
              city
              country
              zip
            }
            lineItems(first: 10) {
              edges {
                node {
                  title
                  quantity
                  variant {
                    price
                    image {
                      src
                    }
                    product {
                      handle
                    }
                  }
                }
              }
            }
            shippingAddress {
              address1
              city
              lastName
              firstName
              zip
              country
            }

            subtotalPrice
            totalPrice
          }
        }
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            lastName
            firstName
            country
            name
            zip
            company
            phone
          }
        }
      }
    }
  }
`
const Index = () => {
  const { customerAccessToken } = useContext(StoreContext)
  const [showAddressForm, setShowAddressForm] = useState(false)

  const isCustomer = customerAccessToken !== null
  const isAuthenticated =
    customerAccessToken &&
    customerAccessToken.expiresAt &&
    customerAccessToken.expiresAt > new Date().toISOString()
      ? true
      : false

  return (
    <Layout>
      <AccountWrapper>
        {isAuthenticated && isCustomer ? (
          <Query
            query={CUSTOMER_INFO}
            variables={{
              customerAccessToken: customerAccessToken.accessToken,
            }}
          >
            {({ loading, error, data }) => {
              if (loading) {
                return (
                  <>
                    <AccountIntro>
                      <SkeletonLoader />
                    </AccountIntro>
                    <MainSection>
                      <AccDetails className="accountDetails">
                        <SkeletonLoader />
                      </AccDetails>
                      <OrderDetails className="orderList">
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                      </OrderDetails>
                    </MainSection>
                    <AddressSection>
                      <SkeletonLoader />
                      <SkeletonLoader />
                      <SkeletonLoader />
                    </AddressSection>
                  </>
                )
              }
              if (error)
                return (
                  <>
                    <p>Something went wrong</p>
                  </>
                )

              // const { defaultAddress, orders, addresses } = data.customer
              if (data.customer === null) {
                return <>No data</>
              }
              const {
                firstName,
                lastName,
                defaultAddress,
                addresses,
                orders,
                email,
                phone,
              } = data.customer

              return (
                <>
                  <MainSection>
                    <AccDetails className="accountDetails">
                      <CustomerDetails
                        firstName={firstName === null ? "" : firstName}
                        lastName={lastName === null ? "" : lastName}
                        address={defaultAddress === null ? "" : defaultAddress}
                        email={email === null ? "" : email}
                        phone={phone === null ? "" : phone}
                      />
                    </AccDetails>
                    <OrderDetails className="orderList">
                      <OrderList orders={orders.edges} />
                    </OrderDetails>
                  </MainSection>
                  <AddressSection>
                    <SavedAddress
                      addresses={addresses.edges}
                      addressFormToggle={setShowAddressForm}
                    />

                    {showAddressForm && (
                      <AddressForm addressFormToggle={setShowAddressForm} />
                    )}
                  </AddressSection>
                </>
              )
            }}
          </Query>
        ) : (
          <NotAuth>
            <h2>Please Log in to see your account</h2>
            <PrimarySolidButton>
              <Link to="/account/login">Log in</Link>
            </PrimarySolidButton>
          </NotAuth>
        )}
      </AccountWrapper>
    </Layout>
  )
}

export default Index
const NotAuth = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: ${typeScale.header3};
    margin-bottom: 2.4rem;
  }
`

const AccountWrapper = styled.div`
  width: 100vw;
  padding: 5vw;
  @media ${Devices.tab} {
    padding-top: 10rem;
  }
`
const AccountIntro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2.5vw;
  min-height: 9rem;

  & > h2 {
    font-size: ${typeScale.header3};
    font-weight: 400;
    @media ${Devices.mobile} {
      font-size: ${typeScale.header4};
      width: 70%;
    }
  }
`
const MainSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 5vw;
  position: relative;

  @media ${Devices.tab} {
    display: block;
  }
`
const AccDetails = styled.aside`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90vh;
  position: sticky;
  top: 5vw;
  background-color: ${props => props.theme.surface};
  border-radius: ${radius.large};
  padding: 2.4rem;
  overflow-y: auto;
  @media ${Devices.tab} {
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    margin: 5vw 0;
  }
`
const OrderDetails = styled.div`
  min-height: 90vh;
  padding: 2.4rem;
  background-color: ${props => props.theme.surface};
  border-radius: ${radius.large};
`
const AddressSection = styled.section`
  padding: 5vw 0;
`
