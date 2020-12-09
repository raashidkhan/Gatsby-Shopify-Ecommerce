import React, { useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import AddToCartButton from "../buttons/AddToCartButton"
import { radius, typeScale, SecondarySolidButton } from "../../utils"
import CounterButton from "../buttons/CounterButtons"
const ProductDetails = ({
  link,
  id,
  title,
  desc,
  images,
  price,
  available,
}) => {
  const [count, setCount] = useState(1)
  return (
    <ProductSection>
      <ProductImages>
        <Image fluid={images[0].localFile.childImageSharp.fluid} alt="" />
      </ProductImages>

      <ProductDesc available={available}>
        <h1>{title}</h1>
        <h3>
          <span>₹</span>&nbsp;
          {price}
        </h3>
        <p>{available ? "In Stock" : "Out of Stock"}</p>
        <QuantityCounter>
          <p>Quantity:</p>
          <CounterButton count={count} setCount={setCount} />
        </QuantityCounter>

        <SecondarySolidButton width="100">
          <AddToCartButton id={id} quantity={count} />
        </SecondarySolidButton>

        <article>
          <h4>Description</h4>
          {desc}
        </article>
      </ProductDesc>
    </ProductSection>
  )
}

export default ProductDetails

const ProductSection = styled.div`
  position: relative;
  width: 100vw;
  padding: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ProductImages = styled.div`
  width: 50%;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;

  div {
    width: 100%;
    height: 100%;
    border-radius: ${radius.large};
    overflow: hidden;
  }
`
const ProductDesc = styled.div`
  width: 50%;
  padding-left: 5vw;
  padding-top: 5vw;

  & > h1 {
    font-size: ${typeScale.header3};
    font-weight: 400;
    margin-bottom: 1.4rem;
    width: 70%;
  }

  & > h3 {
    font-size: ${typeScale.header5};
    color: ${props => props.theme.primaryColor};
    margin-bottom: 1.05rem;

    span {
      font-weight: 400;
      font-size: ${typeScale.paragraph};
      color: ${props => props.theme.textColor};
    }
  }

  & > p {
    padding: 0.5rem 1rem;
    font-size: ${typeScale.paragraph};
    display: inline-block;
    border-radius: ${radius.small};
    background-color: ${props =>
      props.available
        ? props.theme.status.successColor
        : props.theme.status.errorColor};
    margin-bottom: 0.8rem;
  }

  & > article {
    margin-top: 2.5vw;

    h4 {
      font-size: ${typeScale.header5};
      margin-bottom: 1.05rem;
    }
  }
`
const QuantityCounter = styled.div`
  display: flex;
  margin: 2.4rem 0;
  justify-content: space-between;

  & > p {
    font-size: ${typeScale.header5};
  }
`
