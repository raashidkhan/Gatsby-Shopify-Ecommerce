import React, { useContext } from "react"
import { navigate } from "gatsby"
import StoreContext from "../../context/store"

const AccountLayout = (props, log) => {
  const { customerAccessToken } = useContext(StoreContext)
  const isAuthenticated =
    customerAccessToken &&
    customerAccessToken.expiresAt &&
    customerAccessToken.expiresAt > new Date().toISOString()
      ? true
      : false

  return (
    <>
      {isAuthenticated
        ? typeof window !== "undefined"
          ? navigate(`/account`)
          : null
        : props.children}
    </>
  )
}

export default AccountLayout
