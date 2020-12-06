import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ProductCard from "../../products/productCard"
import { InternalLinkButton } from "../../../utils"
import {
  NewArrivalWrapper,
  HeadingWrapper,
  NewArrivalHeading,
  NewArrivalSubHeading,
  NewArrivalGrid,
  AllProduct,
} from "./newArrivalsStyle"
const NewArrivals = () => {
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
    <NewArrivalWrapper>
      <HeadingWrapper>
        <NewArrivalHeading>New Arrivals</NewArrivalHeading>
        <NewArrivalSubHeading>
          Plants help clean indoor air by absorbing toxins, increasing humidity
          & producing oxygen.
        </NewArrivalSubHeading>
      </HeadingWrapper>
      <NewArrivalGrid>
        {data.allShopifyProduct.nodes.slice(0, 6).map(item => {
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
        {/* <AllProduct>
          <Link>
            <InternalLinkButton>View All</InternalLinkButton>
          </Link>
        </AllProduct> */}
      </NewArrivalGrid>
    </NewArrivalWrapper>
  )
}

export default NewArrivals
