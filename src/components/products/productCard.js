import React, { useState, useContext } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Store from "../../context/store"
import { Devices } from "../../styles/mediaBreakpoint"
import Loader from "../../styles/buttons/loader"
import CartButton from "../addToCart"
import Button from "../../styles/buttons/buttons"

const ProductCard = props => {
  const { buyNow } = useContext(Store)
  const [loading, setLoading] = useState(false)
  const handleCheckout = (productVariantId, quantity) => {
    setLoading(true)
    buyNow(productVariantId, quantity)
  }
  return (
    <ProductCardWrapper>
      <ProductCardImage>
        <Image fluid={props.image} />
      </ProductCardImage>
      <ProjectCardDetails>
        <p className="productCard-details--name">{props.name}</p>
        <h2 className="productCard-details--price">₹{props.price}</h2>
      </ProjectCardDetails>
      <ProjectCardActions>
        <Button width="40" primary onClick={() => handleCheckout(props.id, 1)}>
          {loading ? <Loader /> : "Buy now"}
        </Button>
        <CartButton id={props.id} quantity={1} />
      </ProjectCardActions>
    </ProductCardWrapper>
  )
}

export default ProductCard

const ProductCardWrapper = styled.article`
  width: 100%;
  background-color: var(--surface);
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.04),
    0 1px 3px 1px rgba(66, 66, 66, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`

const ProductCardImage = styled.div`
  width: 100%;
  border-top-left-radius: var(--bora-large);
  border-top-right-radius: var(--bora-large);
  & div {
    max-width: 100%;
    height: 30rem;
    border-radius: var(--bora-large);

    @media ${Devices.mobile} {
      height: 40rem;
    }
  }
`

const ProjectCardDetails = styled.div`
  padding-top: 2rem;
  display: flex;

  justify-content: space-between;

  @media ${Devices.mobile} {
    flex-direction: column;
  }
  & h2 {
    font-size: 1.6rem;
    width: 30%;
    text-align: right;
    color: var(--secondary);

    @media ${Devices.mobile} {
      width: 100%;
      text-align: left;
    }
  }
  & p {
    font-size: 1.6rem;
    width: 70%;
    @media ${Devices.mobile} {
      width: 100%;
      margin-bottom: 2.5vw;
    }
  }
`

const ProjectCardActions = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  @media ${Devices.mobile} {
    flex-direction: column;
    padding-top: 0;
  }
`
