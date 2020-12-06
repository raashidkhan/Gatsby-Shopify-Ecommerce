import React, { useContext } from "react"
import Store from "../../context/store"
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
import { InternalLinkButton } from "../../utils"
const CartWindow = () => {
  const { checkout, toggleCart, removeFromCart } = useContext(Store)

  return (
    <Cart>
      <CartHeading>
        <h3>Your Cart</h3>
        <CloseButton onClick={toggleCart}>
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
      <InternalLinkButton>
        <a href={checkout.webUrl}>Checkout</a>
      </InternalLinkButton>
    </Cart>
  )
}

export default CartWindow
