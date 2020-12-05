import React, { useContext, useState } from "react"
import Store from "../../context/store"
import Loader from "../loader"
import styled from "styled-components"
import { neutral, PrimaryButton } from "../../utils"

const BuyNowButton = props => {
  const { buyNow } = useContext(Store)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PrimaryButton
      width="40"
      onClick={() => {
        buyNow(props.id, props.quantity, setIsLoading)
      }}
    >
      {isLoading ? <Loader color={neutral[100]} /> : "Buy now"}
    </PrimaryButton>
  )
}

export default BuyNowButton
