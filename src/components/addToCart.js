import React, { useContext, useState } from "react"
import Store from "../context/store"
import Button from "../styles/buttons/buttons"
import Loader from "../components/loader"
import styled from "styled-components"
const AddToCart = props => {
  const { addToCart } = useContext(Store)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Button
        width="40"
        onClick={() => {
          addToCart(props.id, props.quantity, setIsLoading)
        }}
      >
        {isLoading ? <Loader /> : "Add to cart"}
      </Button>
    </>
  )
}

export default AddToCart
