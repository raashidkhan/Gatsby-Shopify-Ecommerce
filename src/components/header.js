import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import Logout from "../components/accounts/Logout"
import StoreContext from "../context/store"
import Cart from "./cartWindow"

const Header = ({ siteTitle }) => {
  const { customerAccessToken, isCartOpen, toggleCart, checkout } = useContext(
    StoreContext
  )
  const isAuthenticated =
    customerAccessToken &&
    customerAccessToken.expiresAt &&
    customerAccessToken.expiresAt > new Date().toISOString()
      ? true
      : false

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1
          style={{
            margin: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          {isAuthenticated ? (
            <Link to="/account">Account</Link>
          ) : (
            <Link to="/account/login">Login</Link>
          )}
          {isAuthenticated ? (
            <Logout />
          ) : (
            <Link to="/account/register">Sign Up</Link>
          )}

          <button onClick={toggleCart}>
            Cart <span>{checkout.lineItems.length}</span>
          </button>

          {isCartOpen && <Cart />}
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
