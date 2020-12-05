import React, { useState, useContext } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import AddToCartButton from "../buttons/AddToCartButton"
import { typeScale } from "../../utils"
const ProductCard = props => {
  const [count, setCount] = useState(1)
  return (
    <>
      <div itemScope itemType="https://schema.org/Product">
        <div itemProp="image">
          <Image fluid={props.image} alt={props.name} />
        </div>
        <ProductName itemProp="name">{props.name}</ProductName>
        <ProductPrice>
          <span itemProp="priceCurrency" content="INR">
            INR
          </span>
          &nbsp;
          <span itemProp="price" content={props.price}>
            {props.price}
          </span>
        </ProductPrice>
        <div>
          <button
            onClick={() => {
              count <= 0 ? setCount(0) : setCount(count - 1)
            }}
          >
            -
          </button>
          {count}
          <button
            onClick={() => {
              count >= 10 ? setCount(10) : setCount(count + 1)
            }}
          >
            +
          </button>
        </div>
        <AddToCartButton id={props.id} quantity={count} />
      </div>
    </>
  )
}

export default ProductCard

const ProductName = styled.h2`
  font-size: ${typeScale.header5};
  color: ${props => props.theme.textColor};
`
const ProductPrice = styled.h3`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.primaryColor};
`
// <div>
//       <Image fluid={props.image} />
//     </div>
//     <div>
//       <p className="productCard-details--name">{props.name}</p>
//       <h2 className="productCard-details--price">₹{props.price}</h2>
//     </div>
//     <ProjectCardActions>
//       <div>
//         <button
//           onClick={() => {
//             count <= 0 ? setCount(0) : setCount(count - 1)
//           }}
//         >
//           -
//         </button>
//         {count}
//         <button
//           onClick={() => {
//             count >= 10 ? setCount(10) : setCount(count + 1)
//           }}
//         >
//           +
//         </button>
//       </div>

//       <BuyNowButton id={props.id} quantity={count} />

//       <AddToCartButton id={props.id} quantity={count} />
//     </ProjectCardActions>
