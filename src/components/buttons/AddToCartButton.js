import React, { useContext, useState } from "react"
import Store from "../../context/store"
import Loader from "../loader"
import styled from "styled-components"
import { orange, PrimaryButton } from "../../utils"

const AddToCartButton = props => {
  const { addToCart } = useContext(Store)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PrimaryButton
      width="100"
      onClick={() => {
        addToCart(props.id, props.quantity, setIsLoading)
      }}
    >
      {isLoading ? <Loader color={orange[300]} /> : "Add to cart"}
    </PrimaryButton>
  )
}

export default AddToCartButton
