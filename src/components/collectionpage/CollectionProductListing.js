import React from "react"
import styled from "styled-components"
import { Devices, typeScale } from "../../utils"
import ProductCard from "../products/productCard"
const CollectionProductListing = ({ list, title }) => {
  return (
    <CollectionWrapper>
      <h2>Our {title} collection</h2>

      <CollectionGrid>
        {list.map(item => {
          return (
            <ProductCard
              key={item.shopifyId}
              image={item.images[0].localFile.childImageSharp.fluid}
              name={item.title}
              price={item.variants[0].price}
              id={item.variants[0].shopifyId}
              link={item.handle}
            />
          )
        })}
      </CollectionGrid>
    </CollectionWrapper>
  )
}

export default CollectionProductListing

const CollectionWrapper = styled.section`
  background-color: ${props => props.theme.surface};
  width: 100vw;
  padding: 5vw;

  h2 {
    font-size: ${typeScale.header4};
    margin-bottom: 2.4rem;
    font-weight: 400;
  }
`
const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50rem;
  grid-auto-rows: 50rem;
  gap: 2.5vw;

  @media ${Devices.tab} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${Devices.mobile} {
    grid-template-columns: 1fr;
    gap: 5vw;
  }
`
