import React, { useState, useContext } from "react"
import Image from "gatsby-image"
import AddToCartButton from "../buttons/AddToCartButton"
import { Link } from "gatsby"
import Counter from "../buttons/CounterButtons"
import {
  ProductCardWrapper,
  ProductName,
  ProductImage,
  ProductDetails,
  ProductPrice,
} from "./productCardStyles"
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
      </ProductCardWrapper>
    </>
  )
}

export default ProductCard
