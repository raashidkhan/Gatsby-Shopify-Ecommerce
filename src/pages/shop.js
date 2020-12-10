import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shop/ShopHeader"
import ShopListing from "../components/shop/ShopListing"
const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges
  console.log(products)
  return (
    <Layout>
      <ShopHeader
        image={products[0].node.images[0].localFile.childImageSharp.fluid}
        title={products[0].node.title}
        handle={products[0].node.handle}
        desc={products[0].node.description}
        id={products[0].node.variants[0].shopifyId}
      />

      <ShopListing products={products} />
    </Layout>
  )
}

export default Shop

export const query = graphql`
  {
    allShopifyProduct(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          id
          publishedAt
          productType
          handle
          shopifyId
          title
          description
          variants {
            price
            shopifyId
          }
          images {
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
`
