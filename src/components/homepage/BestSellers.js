import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
import Slide from "../Slide"
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
            <Card key={item.id}>
              <Link to={`/product/${item.handle}`}>
                <CardImage>
                  <Image
                    fluid={
                      item.variants[0].image.localFile.childImageSharp.fluid
                    }
                  />
                </CardImage>
                <CardTitle>{item.title}</CardTitle>
                <CardPrice>
                  {item.variants[0].priceV2.currencyCode} &nbsp;
                  {item.variants[0].priceV2.amount}
                </CardPrice>
              </Link>
            </Card>
          )
        })}
      </Slide>
    </BestSelling>
  )
}

export default BestSellers
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
