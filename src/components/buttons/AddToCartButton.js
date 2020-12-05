import React, { useContext, useState } from "react"
import Store from "../../context/store"
import Loader from "../loader"
import styled from "styled-components"
import { orange, SecondaryButton } from "../../utils"

const AddToCartButton = props => {
  const { addToCart } = useContext(Store)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <SecondaryButton
      onClick={() => {
        addToCart(props.id, props.quantity, setIsLoading)
      }}
    >
      {isLoading ? <Loader color={orange[400]} /> : "Add to cart"}
    </SecondaryButton>
  )
}

export default AddToCartButton
