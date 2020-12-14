import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
import Slide from "../Slide"

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
                      src
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
  console.log(productList)
  return (
    <BestSelling>
      <Slide slideWidth="20" slideHeading="All Products" viewAll={`/shop`}>
        {productList.map(item => {
          return (
            <Card key={item.node.id}>
              <Link to={`/product/${item.node.handle}`}>
                <CardImage>
                  <Image
                    fluid={
                      item.node.variants[0].image.localFile.childImageSharp
                        .fluid
                    }
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
    </BestSelling>
  )
}

export default ShopAll

const BestSelling = styled.section`
  margin-bottom: 10vw;
`
const BestSellingHeading = styled.h2`
  font-size: ${typeScale.header4};
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-bottom: 1.4rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2.5vw;
  @media ${Devices.mobile} {
    text-align: left;
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
