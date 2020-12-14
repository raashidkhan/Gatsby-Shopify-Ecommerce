import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductCard from "../products/productCard"
import styled from "styled-components"
import { typeScale, radius, neutral, Devices } from "../../utils"

const NewArrivals = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            title
            handle
            createdAt(fromNow: true)
            publishedAt
            productType
            vendor
            priceRange {
              maxVariantPrice {
                amount
              }
            }
            images {
              originalSrc
              id
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            variants {
              id
              title
              price
              shopifyId
            }
          }
        }
      }
    }
  `)

  return (
    <NewArrivalWrapper>
      <NewArrivalHeading>New Arrivals</NewArrivalHeading>

      <NewArrivalGrid>
        {data.allShopifyProduct.edges.slice(0, 6).map(item => {
          return (
            <ProductCard
              key={item.node.id}
              image={item.node.images[0].localFile.childImageSharp.fluid}
              name={item.node.title}
              price={item.node.variants[0].price}
              id={item.node.variants[0].shopifyId}
              link={item.node.handle}
            />
          )
        })}
      </NewArrivalGrid>
    </NewArrivalWrapper>
  )
}

export default NewArrivals

const NewArrivalWrapper = styled.section`
  width: 100%;
  margin-bottom: 10vw;
`

const NewArrivalHeading = styled.h2`
  font-size: ${typeScale.header4};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 2.4rem;
  font-weight: 400;
  text-align: center;
`

const NewArrivalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40rem;
  grid-auto-rows: 40rem;
  gap: 2.5vw;
  padding: 2.4rem 0;
  @media ${Devices.tab} {
    padding: 2.5vw 0;
    grid-template-columns: 50% 50%;
    grid-auto-columns: 50%;
    grid-auto-flow: column;
    overflow-y: auto;
    gap: 5vw;
  }
  @media ${Devices.mobile} {
    grid-template-columns: 90%;
    grid-auto-columns: 90%;
  }
`
