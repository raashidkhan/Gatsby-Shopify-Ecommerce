import React from "react"
import { graphql } from "gatsby"
import Header from "../components/collectionpage/CollectionHeader"
import Listing from "../components/collectionpage/CollectionProductListing"
import Layout from "../components/layout"
const CollectionPage = ({ data }) => {
  const collection = data.shopifyCollection

  return (
    <Layout>
      <Header
        title={collection.title}
        desc={collection.descriptionHtml}
        image={collection.image.localFile.childImageSharp.fluid}
      />
      <Listing list={collection.products} title={collection.title} />
    </Layout>
  )
}

export default CollectionPage

export const query = graphql`
  query MyQuery($slug: String!) {
    shopifyCollection(handle: { eq: $slug }) {
      description
      descriptionHtml
      handle
      id
      shopifyId
      title
      image {
        localFile {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      products {
        shopifyId
        title
        variants {
          price
          shopifyId
        }
        handle
        images {
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
`
