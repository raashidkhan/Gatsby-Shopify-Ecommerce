import { navigate } from "gatsby"
import React, { useContext } from "react"
import styled from "styled-components"
import Store from "../context/store"
import Button from "../styles/buttons/buttons"
const CartWindow = () => {
  const { checkout, toggleCart } = useContext(Store)

  console.log(checkout)
  return (
    <Cart>
      <button onClick={toggleCart}>Close</button>
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

      <Button
        width="100"
        onClick={() => {
          navigate(checkout.webUrl)
        }}
      >
        Checkout
      </Button>
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

  padding: 2rem;
`

const CartWrapper = styled.div`
  width: 100%;
  height: 70%;
  z-index: 100;
  overflow-y: auto;
`
const CartItemWrapper = styled.article`
  display: flex;
  width: 90%;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;

  background-color: var(--surface);
  border-radius: var(--bora-small);
  padding: 2rem;
  position: relative;
`
const CartItemContent = styled.article`
  width: 70%;
  display: flex;
  justify-content: space-between;

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
    background-color: red;
    padding: 0.75rem;
    font-size: 1.4rem;
    border-radius: var(--bora-medium);
    background-color: hsl(0, 0%, 77%);
    line-height: 1;
    display: inline;
    color: hsl(0, 0%, 28%);
  }
  img {
    max-width: 100%;
    display: block;
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
