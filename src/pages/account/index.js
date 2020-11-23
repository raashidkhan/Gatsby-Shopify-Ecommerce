import React, { useContext } from "react"
import gql from "graphql-tag"
import StoreContext from "../../context/store"
import { Query } from "react-apollo"
import Layout from "../../components/layout"
import Logout from "../../components/accounts/Logout"
const CUSTOMER_INFO = gql`
  query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
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

  return (
    <Layout>
      <Query
        query={CUSTOMER_INFO}
        variables={{
          customerAccessToken: customerAccessToken.accessToken,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          // const { defaultAddress, orders, addresses } = data.customer
          const { firstName, addresses, orders } = data.customer

          return (
            <>
              <h1 className="title has-text-centered">
                Welcome Back {firstName}
              </h1>
              <Logout />
              <div>
                <h2>Your Recent Orders:</h2>
                <ul style={{ listStyle: "none" }}>
                  {orders.edges.map(order => {
                    return (
                      <li
                        style={{
                          border: "2px solid #777",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        key={order.node.name}
                      >
                        <div>
                          <h3>Order No. {order.node.name}</h3>
                          <p>
                            Purchased on :{order.node.processedAt.slice(0, 10)}
                          </p>
                          <a href={order.node.statusUrl}>View Status</a>
                          <p>
                            Price: {order.node.totalPrice}
                            {order.node.currencyCode}
                          </p>
                        </div>

                        {/* <p>
                          {order.node.lineItems.edges.map(item => {
                            return (
                              <img
                                key={item.node.variant.image.src}
                                src={item.node.variant.image.src}
                                alt=""
                                width="100"
                              />
                            )
                          })}
                        </p> */}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div>
                <h2>Saved Addresses</h2>
                {addresses.edges.map(address => {
                  return (
                    <address
                      style={{ border: "2px solid #777" }}
                      key={`${address.node.name}${address.node.address1}${address.node.city}${address.node.country}${address.node.zip}`}
                    >
                      <p>{address.node.name}</p>
                      <p>{address.node.address1}</p>
                      <p>{address.node.city}</p>
                      <p>{address.node.country}</p>
                      <p>{address.node.zip}</p>
                    </address>
                  )
                })}
              </div>
              <section></section>
            </>
          )
        }}
      </Query>
    </Layout>
  )
}

export default Index
