import React, { useContext, useState } from "react"
import Store from "../../context/store"
import styled from "styled-components"
import CartItem from "./CartItem"
import {
  Cart,
  CartItemContent,
  CartItemImage,
  CartItemWrapper,
  CartPrice,
  CartWrapper,
  CloseButton,
  CartHeading,
} from "./cartWindowStyles"
import { PrimarySolidButton } from "../../utils"
import RemoveButton from "../buttons/RemoveButton"

const CartWindow = () => {
  const { checkout, toggleCart, isCartOpen } = useContext(Store)

  return (
    <Cart>
      <CartHeading>
        <h3>Your Cart</h3>
        <CloseButton
          title="Close Cart"
          aria-label="Close cart"
          onClick={toggleCart}
        >
          <span className="one"></span>
          <span className="two"></span>
        </CloseButton>
      </CartHeading>

      <CartWrapper>
        {checkout.lineItems.map(item => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.variant?.image.src}
              quantity={item.quantity}
              title={item.title}
              price={item.variant?.price}
            />
          )
        })}
      </CartWrapper>
      <CartPrice>
        <p>
          <span>Subtotal:</span>
          <span> {checkout.subtotalPrice}</span>
        </p>
        <h3>
          <span>Total:</span>
          <span> {checkout.totalPrice}</span>
        </h3>
      </CartPrice>
      <PrimarySolidButton width="100">
        <CheckoutLink href={checkout.webUrl}>Checkout</CheckoutLink>
      </PrimarySolidButton>
    </Cart>
  )
}

export default CartWindow

const CheckoutLink = styled.a`
  width: 100%;
  display: block;
`
