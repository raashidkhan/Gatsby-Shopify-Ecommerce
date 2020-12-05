import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {
  ProductCollectionWrapper,
  CollectionItems,
  CollectionItemDetails,
  CollectionItemImage,
  CollectionItemName,
  ViewAll,
} from "./collectionStyle"
const Collection = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyCollection {
        nodes {
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
  `)
  return (
    <ProductCollectionWrapper>
      <CollectionItems>
        {data.allShopifyCollection.nodes.map(item => {
          return (
            <CollectionItemDetails key={item.shopifyId}>
              <CollectionItemImage>
                <Image fluid={item.image.localFile.childImageSharp.fluid} />
              </CollectionItemImage>
              <CollectionItemName>{item.title}</CollectionItemName>
            </CollectionItemDetails>
          )
        })}
      </CollectionItems>
    </ProductCollectionWrapper>
  )
}

export default Collection
