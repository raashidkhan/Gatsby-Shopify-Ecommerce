import React, { useContext } from "react"
import Store from "../context/store"
import Button from "../styles/buttons/buttons"
const AddToCart = props => {
  const { addToCart } = useContext(Store)
  //console.log(props.id)
  return (
    <Button
      width="40"
      onClick={() => {
        addToCart(props.id, 1)
      }}
    >
      Add to Cart
    </Button>
  )
}

export default AddToCart
