import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Logout from "../components/accounts/Logout"
import StoreContext from "../context/store"

const Header = ({ siteTitle }) => {
  const { customerAccessToken } = useContext(StoreContext)
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
