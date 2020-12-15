import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductCard from "../products/productCard"
import SmallProductCard from "../products/SmallProductCard"
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
              priceV2 {
                amount
                currencyCode
              }
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
        {data.allShopifyProduct.edges.slice(0, 8).map(item => {
          console.log(item)
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
      </NewArrivalGrid>
    </NewArrivalWrapper>
  )
}

export default NewArrivals

const NewArrivalWrapper = styled.section`
  width: 100vw;
  padding: 5vw;
  @media ${Devices.tab} {
    padding-top: 10vw;
  }
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  gap: 3.2rem;
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
    grid-template-columns: 80%;
    grid-auto-columns: 80%;
  }
`
