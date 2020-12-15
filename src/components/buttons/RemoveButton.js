import React, { useState, useContext } from "react"
import { RemoveItemButton } from "../cart/cartWindowStyles"
import Loader from "../loader"
import Store from "../../context/store"
import { orange } from "../../utils"
const RemoveButton = ({ id }) => {
  const { removeFromCart } = useContext(Store)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <RemoveItemButton
      title="Remove Item"
      aria-label="Remove Item"
      onClick={() => {
        removeFromCart(id, setIsLoading)
      }}
    >
      {isLoading ? (
        <Loader color={orange[400]} />
      ) : (
        <>
          <span className="one"></span>
          <span className="two"></span>
        </>
      )}
    </RemoveItemButton>
  )
}

export default RemoveButton
