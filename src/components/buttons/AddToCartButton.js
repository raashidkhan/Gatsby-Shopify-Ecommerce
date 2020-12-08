import React, { useContext, useState } from "react"
import Store from "../../context/store"
import Loader from "../loader"
import styled, { ThemeContext } from "styled-components"
import { orange, SolidButton } from "../../utils"

const AddToCartButton = ({ id, quantity }) => {
  const { addToCart } = useContext(Store)
  const themeContext = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      role="button"
      onClick={() => {
        addToCart(id, quantity, setIsLoading)
      }}
    >
      {isLoading ? <Loader color={orange[400]} /> : "Add to cart"}
    </Button>
  )
}

export default AddToCartButton

const Button = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
