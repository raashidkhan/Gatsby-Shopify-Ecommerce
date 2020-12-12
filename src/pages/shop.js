import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShopHeader from "../components/shop/ShopHeader"
import ShopListing from "../components/shop/ShopListing"
const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges
  const randomNumber = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }
  const randomProduct = randomNumber(products.length)
  return (
    <Layout>
      <ShopHeader
        image={
          products[randomProduct].node.images[0].localFile.childImageSharp.fluid
        }
        title={products[randomProduct].node.title}
        handle={products[randomProduct].node.handle}
        desc={products[randomProduct].node.description}
        id={products[randomProduct].node.variants[0].shopifyId}
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
