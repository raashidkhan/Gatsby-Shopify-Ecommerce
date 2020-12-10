import React, { useState } from "react"
import styled from "styled-components"
import { radius, SecondaryOutlineButton, typeScale } from "../../utils"
import NoImage from "../../assets/No-image-available.png"
const OrderList = ({ orders }) => {
  const [numberOfItem, setNumberOfItem] = useState(2)

  return (
    <>
      <OrderHeading>Your Recent Orders</OrderHeading>
      {orders.map(order => {
        console.log(order.node.lineItems)
        return (
          <OrderCard key={order.node.name}>
            <Details>
              <SpaceBetweenBox>
                <p>Order No. {order.node.name}</p>
                <p>
                  Price: {order.node.totalPrice}
                  {order.node.currencyCode}
                </p>
              </SpaceBetweenBox>
              <SpaceBetweenBox>
                <p> Purchased on: {order.node.processedAt.slice(0, 10)} </p>
                <a href={order.node.statusUrl}>View Status</a>
              </SpaceBetweenBox>
              <OrderItems>
                {order.node.lineItems.edges[0].node.title === null ? (
                  ""
                ) : (
                  <p>
                    Items:
                    {order.node.lineItems.edges
                      .slice(0, numberOfItem)
                      .map(i => {
                        return <span>{i.node.title}</span>
                      })}
                    {order.node.lineItems.edges.length <= numberOfItem ? (
                      ""
                    ) : (
                      <Expand
                        onClick={() => {
                          setNumberOfItem(order.node.lineItems.edges.length)
                        }}
                      >
                        Expand
                      </Expand>
                    )}
                  </p>
                )}
              </OrderItems>
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
`
const Details = styled.div`
  width: 70%;
`
const SpaceBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: underline;
  }
`

const OrderItems = styled.p`
  span {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    margin: 0.8rem;
    background-color: ${props => props.theme.status.successColor};
    border-radius: ${radius.small};
    font-size: ${typeScale.helperText};
  }
`
const Image = styled.div`
  width: 20%;
  height: 10rem;
  align-self: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Expand = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.secondaryColor};
  padding: 0.4rem 0.8rem;
  font-size: ${typeScale.helperText};
  border-radius: ${radius.small};
`
