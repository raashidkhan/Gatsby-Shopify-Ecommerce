import React from "react"
import RemoveButton from "../buttons/RemoveButton"
import {
  CartItemImage,
  CartItemContent,
  CartItemWrapper,
} from "./cartWindowStyles"
const CartItem = ({ id, image, title, price, quantity }) => {
  return (
    <CartItemWrapper>
      <CartItemImage>
        <img src={image} alt="" />
        <p>{quantity}</p>
      </CartItemImage>
      <CartItemContent>
        <p>{title}</p>
        <strong>{price}</strong>
      </CartItemContent>
      <RemoveButton id={id} />
    </CartItemWrapper>
  )
}

export default CartItem
