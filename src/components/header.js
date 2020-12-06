import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import Logout from "../components/accounts/Logout"
import StoreContext from "../context/store"
import Cart from "./cartWindow"
import Logo from "../assets/logo.svg"
import {
  Navbar,
  Menu,
  DesktopMenu,
  MobileMenu,
  MenuButton,
  DesktopMenuItem,
} from "../utils/shared"
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
    <Navbar>
      <div className="logo">
        <img style={{ display: "block" }} src={Logo} alt="" />
      </div>
      <Menu className="menu">
        <MobileMenu className="mobile-menu"></MobileMenu>
        <DesktopMenu className="desktop-menu">
          <DesktopMenuItem>
            <Link to="/account">Shop</Link>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <Link to="/account">Blog</Link>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <Link to="/account">Contact</Link>
          </DesktopMenuItem>
          <DesktopMenuItem>
            {isAuthenticated ? (
              <Link to="/account">Account</Link>
            ) : (
              <Link to="/account/login">Login</Link>
            )}
          </DesktopMenuItem>
          <DesktopMenuItem>
            {isAuthenticated ? (
              <Logout />
            ) : (
              <Link to="/account/register">Sign Up</Link>
            )}
          </DesktopMenuItem>

          <li>
            <button onClick={toggleCart}>Cart</button>
          </li>

          {isCartOpen && <Cart />}
        </DesktopMenu>
        <MenuButton className="menu-btn">Menu</MenuButton>
      </Menu>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

//  <header>
//       <div>
//         <h1
//           style={{
//             margin: 0,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             position: "relative",
//           }}
//         >
//           <Link
//             to="/"
//             style={{
//               color: `white`,
//               textDecoration: `none`,
//             }}
//           >
//             <img src={Logo} alt="" />
//           </Link>
//           {isAuthenticated ? (
//             <Link to="/account">Account</Link>
//           ) : (
//             <Link to="/account/login">Login</Link>
//           )}
//           {isAuthenticated ? (
//             <Logout />
//           ) : (
//             <Link to="/account/register">Sign Up</Link>
//           )}

//           <button onClick={toggleCart}>Cart</button>

//           {isCartOpen && <Cart />}
//         </h1>
//       </div>
//     </header>
