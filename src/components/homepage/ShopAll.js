import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
import Slide from "../Slide"
import SmallProductCard from "../products/SmallProductCard"

const ShopAll = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            title
            shopifyId
            handle
            variants {
              priceV2 {
                amount
                currencyCode
              }
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
    }
  `)

  const productList = data.allShopifyProduct.edges

  return (
    <ShopAllList>
      <Slide slideWidth="20" slideHeading="All Products" viewAll={`/shop`}>
        {productList.map(item => {
          return (
            // <Card key={item.node.shopifyId}>
            //   <Link to={`/product/${item.node.handle}`}>
            //     <CardImage>
            //       <Image
            //         fluid={
            //           item.node.variants[0].image.localFile.childImageSharp
            //             .fluid
            //         }
            //       />
            //     </CardImage>
            //     <CardTitle>{item.node.title}</CardTitle>
            //     <CardPrice>
            //       {item.node.variants[0].priceV2.currencyCode} &nbsp;
            //       {item.node.variants[0].priceV2.amount}
            //     </CardPrice>
            //   </Link>
            //</Card>
            <SmallProductCard
              key={item.node.shopifyId}
              id={item.node.shopifyId}
              image={
                item.node.variants[0].image.localFile.childImageSharp.fluid
              }
              handle={item.node.handle}
              title={item.node.title}
              currency={item.node.variants[0].priceV2.currencyCode}
              price={item.node.variants[0].priceV2.amount}
            />
          )
        })}
      </Slide>
    </ShopAllList>
  )
}

export default ShopAll

const ShopAllList = styled.section`
  width: 100vw;
  padding: 5vw;
  overflow-x: hidden;
  @media ${Devices.tab} {
    padding-top: 10vw;
  }
`
