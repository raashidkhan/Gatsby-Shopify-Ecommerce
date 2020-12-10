import React, { useState, useContext } from "react"
import gql from "graphql-tag"
import StoreContext from "../../context/store"
import { Query } from "react-apollo"
import Layout from "../../components/layout"
import Logout from "../../components/accounts/Logout"
import CustomerDetails from "../../components/accounts/CustomerDetails"
import OrderList from "../../components/accounts/OrderList"
import SavedAddress from "../../components/accounts/SavedAddress"
import styled from "styled-components"
import {
  SecondaryOutlineButton,
  typeScale,
  radius,
  PrimarySolidButton,
} from "../../utils"
import { Link } from "gatsby"
const CUSTOMER_INFO = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      lastName
      phone
      defaultAddress {
        firstName
        lastName
        address1
        city
        zip
        country
      }
      orders(first: 10) {
        edges {
          node {
            name
            totalPrice
            processedAt
            statusUrl
            currencyCode
            orderNumber
            successfulFulfillments {
              trackingCompany
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
            address1
            city
            lastName
            firstName
            country
            name
            zip
          }
        }
      }
    }
  }
`
const Index = () => {
  const { customerAccessToken } = useContext(StoreContext)
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
              if (loading) return <div>Fetching</div>
              if (error) return console.error(error)
              console.log(data)
              // const { defaultAddress, orders, addresses } = data.customer
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
                  <AccountIntro>
                    <h2>Welcome Back {firstName} </h2>
                    <SecondaryOutlineButton>
                      <Logout />
                    </SecondaryOutlineButton>
                  </AccountIntro>
                  <MainSection>
                    <AccDetails className="accountDetails">
                      <CustomerDetails
                        firstName={firstName}
                        lastName={lastName}
                        address={defaultAddress}
                        email={email}
                        phone={phone}
                      />
                    </AccDetails>
                    <OrderDetails className="orderList">
                      <OrderList orders={orders.edges} />
                    </OrderDetails>
                  </MainSection>
                  <AddressSection>
                    <SavedAddress addresses={addresses.edges} />
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
`
const AccountIntro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5vw;

  & > h2 {
    font-size: ${typeScale.header3};
    font-weight: 400;
  }
`
const MainSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 5vw;
  position: relative;
`
const AccDetails = styled.aside`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  position: sticky;
  top: 5vw;
  background-color: ${props => props.theme.surface};
  border-radius: ${radius.large};
  padding: 2.4rem;
`
const OrderDetails = styled.div`
  padding: 2.4rem;
  background-color: ${props => props.theme.surface};
  border-radius: ${radius.large};
`
const AddressSection = styled.section`
  padding: 5vw 0;
`
