import React, { useState } from "react"
import Image from "gatsby-image"
import AddToCartButton from "../buttons/AddToCartButton"
import { Link } from "gatsby"
import styled from "styled-components"
import { radius, typeScale, elevation } from "../../utils"
import Counter from "../buttons/CounterButtons"

import { SecondarySolidButton } from "../../utils"
const ProductCard = props => {
  const [count, setCount] = useState(1)

  return (
    <>
      <ProductCardWrapper itemScope itemType="https://schema.org/Product">
        <ProductImage
          itemProp="image"
          to={`/product/${props.link}`}
          title="View"
        >
          <Image fluid={props.image} alt={props.name} />
        </ProductImage>
        <ProjectContent>
          <ProductName itemProp="name">{props.name}</ProductName>
          <ProductDetails>
            <ProductPrice>
              <span itemProp="priceCurrency" content="INR">
                INR
              </span>
              &nbsp;
              <span itemProp="price" content={props.price}>
                {props.price}
              </span>
            </ProductPrice>
            <Counter count={count} setCount={setCount} />
          </ProductDetails>
          <SecondarySolidButton width="100">
            <AddToCartButton id={props.id} quantity={count} />
          </SecondarySolidButton>
        </ProjectContent>
      </ProductCardWrapper>
    </>
  )
}

export default ProductCard

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  //padding: 2.4rem;
  border-radius: ${radius.large};
  //background-color: ${props => props.theme.surface};
  //backdrop-filter: blur(15px);
  //box-shadow: ${elevation[100]};
  border: 1px solid rgba(0, 0, 0, 0.1);
`
const ProductImage = styled(Link)`
  border-radius: ${radius.large};
  overflow: hidden;
  height: 65%;

  div {
    height: 100%;
    overflow: hidden;

    img {
      border-radius: ${radius.large};
    }
  }
`
const ProjectContent = styled.div`
  padding: 2.4rem;
`
const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.4rem;
`
const ProductName = styled.h2`
  font-size: ${typeScale.header5};
  color: ${props => props.theme.textColor};
  margin-bottom: 1.2rem;
`
const ProductPrice = styled.h3`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.primaryColor};
`
