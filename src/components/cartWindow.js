import { navigate } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import Store from "../context/store"

const CartWindow = () => {
  const { checkout, toggleCart, removeFromCart } = useContext(Store)

  return (
    <Cart>
      <CloseButton onClick={toggleCart}>Close</CloseButton>
      <CartWrapper>
        {checkout.lineItems.map(item => {
          return (
            <CartItemWrapper key={item.id}>
              <CartItemImage>
                <img src={item.variant.image.src} alt="" />
                <p>{item.quantity}</p>
              </CartItemImage>
              <CartItemContent>
                <h3>{item.title}</h3>
                <strong>{item.variant.price}</strong>
                <RemoveItemButton
                  onClick={() => {
                    removeFromCart(item.id)
                  }}
                >
                  Remove
                </RemoveItemButton>
              </CartItemContent>
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

      <a href={checkout.webUrl}>Checkout</a>
    </Cart>
  )
}

export default CartWindow

const Cart = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  background-color: var(--background);
  z-index: 100;
  box-shadow: var(--shadow-2);
  padding: 2rem;
`

const CloseButton = styled.button`
  display: block;
  margin-left: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
  line-height: 1;
  padding: 0.2rem;
  margin-bottom: 1rem;
`

const CartWrapper = styled.div`
  width: 100%;
  height: 65%;
  z-index: 100;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: var(--shadow);
`
const CartItemWrapper = styled.article`
  display: flex;
  width: 90%;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;
  background-color: var(--surface);
  border-radius: var(--bora-medium);
  padding: 2rem;
  position: relative;
  box-shadow: var(--shadow-1);
`
const CartItemContent = styled.article`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.8rem;

    color: hsl(0, 0%, 28%);
  }
`

const CartItemImage = styled.div`
  width: 7.5rem;
  position: relative;
  p {
    position: absolute;
    top: -1rem;
    right: -1rem;
    padding: 0.75rem;
    font-size: 1.4rem;
    border-radius: var(--bora-medium);
    background-color: var(--primary);
    line-height: 1;
    display: inline;
    color: hsl(0, 0%, 98%);
  }
  img {
    max-width: 100%;
    display: block;
    border-radius: var(--bora-medium);
  }
`
const CartPrice = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 2rem;

  p {
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: hsl(0, 0%, 48%);
  }

  h3 {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: hsl(0, 0%, 28%);
  }
`

const RemoveItemButton = styled.button`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
  line-height: 1;
  padding: 0.2rem;
`
