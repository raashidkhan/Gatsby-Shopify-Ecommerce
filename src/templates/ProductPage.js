import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductDetails from "../components/productpage/ProductDetails"
import RelatedProducts from "../components/productpage/RelatedProducts"
import Collection from "../components/homepage/Collection"
import styled from "styled-components"
const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  console.log(product)

  return (
    <Layout>
      <ProductDetails
        link={product.handle}
        id={product.variants[0].shopifyId}
        title={product.title}
        images={product.images}
        desc={product.description}
        price={product.variants[0].price}
        available={product.variants[0].availableForSale}
      />
      <RelatedProducts
        related={data.allShopifyProduct.edges}
        current={product.id}
      />
      <ProductCollection>
        <h2>Browse our collections</h2>
        <Collection />
      </ProductCollection>
    </Layout>
  )
}

export default ProductPage

const ProductCollection = styled.section`
  width: 100%;
  padding: 5vw 0;

  h2 {
    margin-bottom: 3.2rem;
    font-weight: 400;
    padding-left: 5vw;
  }
`

export const query = graphql`
  query($slug: String!, $type: String!) {
    allShopifyProduct(filter: { productType: { eq: $type } }) {
      edges {
        node {
          id
          handle
          title
          productType
          images {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          variants {
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
    shopifyProduct(handle: { eq: $slug }) {
      handle
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      productType
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
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
`
