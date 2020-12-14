import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { typeScale, radius } from "../../utils"
import Slide from "../Slide"
const RelatedProducts = ({ related, current }) => {
  const similarProducts = related.filter(item => {
    return item.node.id !== current
  })

  return (
    <RelatedSection>
      <Slide slideWidth="20" slideHeading="You might also like">
        {similarProducts.map(item => {
          return (
            // <RelatedProductCard
            //   to={`/product/${item.node.handle}`}
            //   key={item.node.id}
            // >
            //   <ProductImage>
            //     <Image
            //       fluid={item.node.images[0].localFile.childImageSharp.fluid}
            //     />
            //   </ProductImage>
            //   <ProductSummary>
            //     <p>{item.node.title}</p>
            //     <h4>{item.node.variants[0].price}</h4>
            //   </ProductSummary>
            // </RelatedProductCard>
            <Card key={item.node.id}>
              <Link to={`/product/${item.node.handle}`}>
                <CardImage>
                  <Image
                    fluid={item.node.images[0].localFile.childImageSharp.fluid}
                  />
                </CardImage>
                <CardTitle>{item.node.title}</CardTitle>
                <CardPrice>
                  {item.node.variants[0].priceV2.currencyCode} &nbsp;
                  {item.node.variants[0].priceV2.amount}
                </CardPrice>
              </Link>
            </Card>
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

  h2 {
    margin-bottom: 2.4rem;
    font-weight: 400;
  }
`
const RelatedProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5vw;
`
const RelatedProductCard = styled(Link)`
  border-radius: ${radius.medium};
  overflow: hidden;
  border: 1px solid rgba(99, 99, 99, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const ProductImage = styled.figure`
  height: 75%;
  div {
    width: 100%;
    height: 100%;
  }
`
const ProductSummary = styled.figcaption`
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  p {
    max-width: 70%;
  }
`

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
const CardTitle = styled.h2`
  font-weight: 400;
  font-size: ${typeScale.header5};
`
const CardPrice = styled.p`
  color: ${props => props.theme.primaryColor};
`
