import React, { useState } from "react"
import styled from "styled-components"
import {
  radius,
  typeScale,
  SuccessTags,
  InProgressTags,
  CancelledTags,
  OutlineTags,
  SmallButton,
  Devices,
} from "../../utils"
import NoImage from "../../assets/No-image-available.png"
import { Link } from "gatsby"
const OrderList = ({ orders }) => {
  const [numberOfItem, setNumberOfItem] = useState(2)

  return (
    <>
      <OrderHeading>Your Recent Orders</OrderHeading>
      {orders.map(order => {
        return (
          <OrderCard key={order.node.name}>
            <Details>
              <SpaceBetweenBox>
                <p>
                  <strong>Order No.</strong>&nbsp;
                  {order.node.name === null ? "" : order.node.name}
                </p>
                <p>
                  <strong>Price</strong>&nbsp;
                  {order.node.totalPrice ? "" : order.node.totalPrice}
                  {order.node.currencyCode ? "" : order.node.currencyCode}
                </p>
              </SpaceBetweenBox>
              <SpaceBetweenBox>
                <p>
                  {" "}
                  <strong>Purchased on:</strong>&nbsp;
                  {order.node.processedAt.slice(0, 10)}
                </p>
                <a href={order.node.statusUrl}>View Status</a>
              </SpaceBetweenBox>
              <OrderItems>
                {order.node.lineItems.edges[0].node.title === null ? (
                  ""
                ) : (
                  <p>
                    <strong>Items:</strong>&nbsp;&nbsp;
                    {order.node.lineItems.edges
                      .slice(0, numberOfItem)
                      .map(i => {
                        console.log(i)
                        return (
                          <OutlineTags key={i.node.title}>
                            <Link
                              to={`/product/${i.node.variant?.product.handle}`}
                            >
                              {i.node.title}
                            </Link>
                          </OutlineTags>
                        )
                      })}
                    {order.node.lineItems.edges.length <= numberOfItem ? (
                      ""
                    ) : (
                      <SmallButton
                        onClick={() => {
                          setNumberOfItem(order.node.lineItems.edges.length)
                        }}
                      >
                        Expand
                      </SmallButton>
                    )}
                  </p>
                )}
              </OrderItems>
              {order.node.fulfillmentStatus === "FULFILLED" ? (
                <SuccessTags>Fulfilled</SuccessTags>
              ) : order.node.fulfillmentStatus === "UNFULFILLED" ? (
                <InProgressTags>Unfulfilled</InProgressTags>
              ) : order.node.fulfillmentStatus === "CANCELED" ? (
                <CancelledTags>Canceled</CancelledTags>
              ) : (
                ""
              )}
              {order.node.financialStatus === "PAID" ? (
                <SuccessTags>Paid</SuccessTags>
              ) : order.node.financialStatus === "UNPAID" ? (
                <InProgressTags>UNPAID</InProgressTags>
              ) : order.node.financialStatus === "REFUNDED" ? (
                <CancelledTags>Refunded</CancelledTags>
              ) : (
                ""
              )}
            </Details>
            <Image>
              {order.node.lineItems.edges[0].node.variant === null ? (
                <img src={NoImage} alt="" />
              ) : (
                <img
                  src={order.node.lineItems.edges[0].node.variant.image.src}
                  alt=""
                />
              )}
            </Image>
          </OrderCard>
        )
      })}
    </>
  )
}

export default OrderList
const OrderHeading = styled.h2`
  font-weight: 400;
  font-size: ${typeScale.header4};
  margin-bottom: 2.4rem;
`
const OrderCard = styled.div`
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  border-radius: ${radius.medium};
  background-color: ${props => props.theme.background};
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media ${Devices.mobile} {
    flex-direction: column;
  }
`
const Details = styled.div`
  width: 70%;
  @media ${Devices.mobile} {
    width: 100%;
  }
`
const SpaceBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  @media ${Devices.mobile} {
    flex-direction: column;
  }

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: underline;
  }
`

const OrderItems = styled.div``
const Image = styled.div`
  width: 20%;
  height: 10rem;
  align-self: center;
  @media ${Devices.mobile} {
    height: auto;
    width: 100%;
    margin-top: 2.4rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${radius.medium};
  }
`
