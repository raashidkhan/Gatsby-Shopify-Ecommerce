import React, { useContext, useState } from "react"
import Store from "../../context/store"
import styled from "styled-components"

import {
  Cart,
  CartItemContent,
  CartItemImage,
  CartItemWrapper,
  CartPrice,
  CartWrapper,
  CloseButton,
  RemoveItemButton,
  CartHeading,
} from "./cartWindowStyles"
import { PrimarySolidButton } from "../../utils"
import RemoveButton from "../buttons/RemoveButton"
const CartWindow = () => {
  const { checkout, toggleCart, removeFromCart } = useContext(Store)

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
            <CartItemWrapper key={item.id}>
              <CartItemImage>
                <img src={item.variant.image.src} alt="" />
                <p>{item.quantity}</p>
              </CartItemImage>
              <CartItemContent>
                <p>{item.title}</p>
                <strong>{item.variant.price}</strong>
              </CartItemContent>
              {/* <RemoveItemButton
                title="Remove Item"
                aria-label="Remove Item"
                onClick={() => {
                  removeFromCart(item.id, setIsLoading)
                }}
              >
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    <span className="one"></span>
                    <span className="two"></span>
                  </>
                )}
              </RemoveItemButton> */}
              <RemoveButton id={item.id} />
            </CartItemWrapper>
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
