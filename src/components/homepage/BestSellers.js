import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
import Slide from "../Slide"
import SmallProductCard from "../products/SmallProductCard"
const BestSellers = () => {
  const data = useStaticQuery(graphql`
    {
      shopifyCollection(title: { eq: "Best Seller" }) {
        title
        id
        handle
        products {
          handle
          id
          title
          variants {
            priceV2 {
              amount
              currencyCode
            }
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const productList = data.shopifyCollection.products
  return (
    <BestSelling>
      <Slide
        slideWidth="20"
        slideHeading={data.shopifyCollection.title}
        viewAll={`/collection/${data.shopifyCollection.handle}`}
      >
        {productList.slice(0, 12).map(item => {
          return (
            <SmallProductCard
              key={item.id}
              id={item.id}
              image={item.variants[0].image.localFile.childImageSharp.fluid}
              handle={item.handle}
              title={item.title}
              currency={item.variants[0].priceV2.currencyCode}
              price={item.variants[0].priceV2.amount}
            />
          )
        })}
      </Slide>
    </BestSelling>
  )
}

export default BestSellers
const BestSelling = styled.section`
  width: 100vw;
  padding: 5vw;
  overflow-x: hidden;
  @media ${Devices.tab} {
    padding-top: 10vw;
  }
`
