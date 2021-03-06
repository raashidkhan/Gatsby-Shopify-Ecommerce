import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductCard from "./productCard"
import styled from "styled-components"

const ProductListing = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          id
          description
          title
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          variants {
            id
            price
            title
            shopifyId
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProductSection>
      <ProductGrid>
        {data.allShopifyProduct.nodes.map(item => {
          return (
            <ProductCard
              key={item.id}
              image={item.images[0].localFile.childImageSharp.fluid}
              name={item.title}
              price={item.variants[0].price}
              id={item.variants[0].shopifyId}
            />
          )
        })}
      </ProductGrid>
    </ProductSection>
  )
}

export default ProductListing
const ProductSection = styled.section`
  width: 100%;
`

const ProductGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  gap: 2.5vw;
`
