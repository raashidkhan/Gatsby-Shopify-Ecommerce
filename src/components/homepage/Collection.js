import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { typeScale, neutral, radius, Devices, elevation } from "../../utils"

const Collection = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyCollection {
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
  const collectionList = data.allShopifyCollection.nodes.filter(item => {
    return item.title !== "Best Seller"
  })

  return (
    <>
      <ProductCollectionWrapper>
        <CollectionItems>
          {collectionList.slice(0, 3).map(item => {
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
  width: 100vw;
  padding: 5vw;
  padding-top: 3.2rem;
  @media ${Devices.tab} {
    padding-top: 0;
  }
`

const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 3.2rem;
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
    height: 30rem;
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
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.6rem;
  color: ${props => props.theme.textOnSecondary};
  font-family: inherit;
  border-radius: ${radius.large};
  //box-shadow: ${elevation[200]};
  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  @media ${Devices.tab} {
    font-size: ${typeScale.header5};
  }
  @media ${Devices.mobile} {
    width: calc(100% - 10vw);
    bottom: 5vw;
  }
`
