import React from "react"
import styled from "styled-components"
import ProductCard from "../products/productCard"
const ShopListing = ({ products }) => {
  return (
    <ProductListing>
      <h2>All products</h2>
      <ProductGrid>
        {products.map(item => {
          return (
            <ProductCard
              key={item.node.id}
              image={item.node.images[0].localFile.childImageSharp.fluid}
              name={item.node.title}
              price={item.node.variants[0].price}
              id={item.node.variants[0].shopifyId}
              link={item.node.handle}
            />
          )
        })}
      </ProductGrid>
    </ProductListing>
  )
}

export default ShopListing

const ProductListing = styled.section`
  padding: 5vw;
  background-color: ${props => props.theme.levelOne};

  h2 {
    margin-bottom: 2.4rem;
    font-weight: 400;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2.5vw;
`
