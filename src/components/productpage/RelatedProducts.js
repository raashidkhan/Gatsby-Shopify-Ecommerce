import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { radius } from "../../utils"
const RelatedProducts = ({ related, current }) => {
  console.log(current)
  const similarProducts = related.filter(item => {
    return item.node.id !== current
  })
  console.log(similarProducts)
  return (
    <RelatedSection>
      <h2>You might also like</h2>
      <RelatedProductWrapper>
        {similarProducts.slice(0, 4).map(item => {
          return (
            <RelatedProductCard
              to={`/product/${item.node.handle}`}
              key={item.node.id}
            >
              <ProductImage>
                <Image
                  fluid={item.node.images[0].localFile.childImageSharp.fluid}
                />
              </ProductImage>
              <ProductSummary>
                <p>{item.node.title}</p>
                <h4>{item.node.variants[0].price}</h4>
              </ProductSummary>
            </RelatedProductCard>
          )
        })}
      </RelatedProductWrapper>
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
