import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
const SmallProductCard = ({ id, handle, image, title, currency, price }) => {
  return (
    <Card>
      <Link to={`/product/${handle}`}>
        <CardImage>
          <Image fluid={image} />
        </CardImage>
        <CardTitle>{title}</CardTitle>
        <CardPrice>
          {currency} &nbsp;
          {price}
        </CardPrice>
      </Link>
    </Card>
  )
}

export default SmallProductCard
const Card = styled.figure``
const CardImage = styled.div`
  height: 30rem;
  border-radius: ${radius.medium};
  overflow: hidden;
  margin-bottom: 2.4rem;
  div {
    width: 100%;
    height: 100%;
  }
`
const CardTitle = styled.figcaption`
  font-weight: 400;
  font-size: ${typeScale.header5};
  margin-bottom: 1.6rem;
`
const CardPrice = styled.p`
  color: ${props => props.theme.primaryColor};
`
