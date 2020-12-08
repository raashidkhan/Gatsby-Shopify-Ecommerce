import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ProductCard from "../../products/productCard"
import {
  NewArrivalWrapper,
  HeadingWrapper,
  NewArrivalHeading,
  NewArrivalSubHeading,
  NewArrivalGrid,
} from "./newArrivalsStyle"
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
      <HeadingWrapper>
        <NewArrivalHeading>New Arrivals</NewArrivalHeading>
        <NewArrivalSubHeading>
          Plants help clean indoor air by absorbing toxins, increasing humidity
          & producing oxygen.
        </NewArrivalSubHeading>
      </HeadingWrapper>
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
