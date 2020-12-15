import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { typeScale, radius, Devices } from "../../utils"
import Slide from "../Slide"
import SmallProductCard from "../products/SmallProductCard"
const RelatedProducts = ({ related, current }) => {
  const similarProducts = related.filter(item => {
    return item.node.id !== current
  })

  return (
    <RelatedSection>
      <Slide slideWidth="20" slideHeading="You might also like">
        {similarProducts.map(item => {
          return (
            <SmallProductCard
              key={item.node.id}
              id={item.node.id}
              image={item.node.images[0].localFile.childImageSharp.fluid}
              handle={item.node.handle}
              title={item.node.title}
              currency={item.node.variants[0].priceV2.currencyCode}
              price={item.node.variants[0].priceV2.amount}
            />
          )
        })}
      </Slide>
    </RelatedSection>
  )
}

export default RelatedProducts

const RelatedSection = styled.section`
  width: 100vw;
  padding: 5vw;
  @media ${Devices.tab} {
    padding-top: 10vw;
  }
  h2 {
    margin-bottom: 2.4rem;
    font-weight: 400;
  }
`
