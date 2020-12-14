import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { typeScale, neutral, radius, Devices, elevation } from "../../utils"

const Collection = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyCollection(limit: 3, sort: { order: ASC, fields: updatedAt }) {
        nodes {
          title
          shopifyId
          handle
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
  `)
  return (
    <>
      <ProductCollectionWrapper>
        <CollectionItems>
          {data.allShopifyCollection.nodes.map(item => {
            return (
              <CollectionItemDetails
                to={`/collection/${item.handle}`}
                key={item.shopifyId}
              >
                <CollectionItemImage>
                  <Image fluid={item.image.localFile.childImageSharp.fluid} />
                </CollectionItemImage>
                <CollectionItemName>{item.title}</CollectionItemName>
              </CollectionItemDetails>
            )
          })}
        </CollectionItems>
      </ProductCollectionWrapper>
    </>
  )
}

export default Collection

const ProductCollectionWrapper = styled.section`
  width: 100%;
  margin-bottom: 10vw;
`

const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2.5vw;
  @media ${Devices.tab} {
    gap: 5vw;
  }
  @media ${Devices.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
const CollectionItemDetails = styled(Link)`
  width: 100%;
  position: relative;
  border-radius: ${radius.large};
  overflow: hidden;
`
const CollectionItemImage = styled.div`
  width: 100%;

  div {
    height: 35rem;
    @media ${Devices.tab} {
      height: 20rem;
    }
  }
`
const CollectionItemName = styled.figcaption`
  position: absolute;
  width: calc(100% - 2.5vw);
  bottom: 1.25vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  font-size: ${typeScale.header4};
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);

  padding: 1.6rem;
  color: ${neutral[100]};
  font-family: inherit;
  border-radius: ${radius.large};
  box-shadow: ${elevation[100]};
  @media ${Devices.tab} {
    font-size: ${typeScale.header5};
  }
  @media ${Devices.mobile} {
    width: calc(100% - 10vw);
    bottom: 5vw;
  }
`
