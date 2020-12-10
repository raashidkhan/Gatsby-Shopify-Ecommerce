import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import { useSpring, animated } from "react-spring"
import Logout from "../accounts/Logout"
import StoreContext from "../../context/store"
import Cart from "../cart/cartWindow"
import Logo from "../../assets/logo.svg"
//import Cart from "../assets/cart.svg"
import {
  Navbar,
  Menu,
  DesktopMenu,
  MenuButton,
  MobileMenu,
  DesktopMenuItem,
  MobileMenuItem,
  CartButton,
  MenuCloseButton,
} from "./headerStyles"

const Header = () => {
  const { customerAccessToken, isCartOpen, toggleCart } = useContext(
    StoreContext
  )
  const [isOpen, setIsOpen] = useState(false)

  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "all" : "none",
  })
  const isAuthenticated =
    customerAccessToken &&
    customerAccessToken.expiresAt &&
    customerAccessToken.expiresAt > new Date().toISOString()
      ? true
      : false

  return (
    <Navbar>
      <Link to="/" className="logo">
        <img style={{ display: "block" }} src={Logo} alt="" />
      </Link>
      <Menu>
        <animated.div style={animation}>
          <MobileMenu>
            <MobileMenuItem>
              <Link to="/shop">Shop</Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link to="/blogs">Blog</Link>
            </MobileMenuItem>
            <MobileMenuItem>
              <Link to="/account">Contact</Link>
            </MobileMenuItem>
            <MobileMenuItem>
              {isAuthenticated ? (
                <Link to="/account">Account</Link>
              ) : (
                <Link to="/account/login">Login</Link>
              )}
            </MobileMenuItem>
            <MobileMenuItem>
              {isAuthenticated ? (
                <Logout />
              ) : (
                <Link to="/account/register">Sign Up</Link>
              )}
            </MobileMenuItem>
            <MenuCloseButton onClick={() => setIsOpen(false)}>
              <span className="one"></span>
              <span className="two"></span>
            </MenuCloseButton>
          </MobileMenu>
        </animated.div>
        <DesktopMenu>
          <DesktopMenuItem>
            <Link to="/shop">Shop</Link>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <Link to="/blogs">Blog</Link>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <Link to="/contact">Contact</Link>
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
        </DesktopMenu>
      </Menu>
      <CartButton onClick={toggleCart}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.087 81.655">
          <g
            id="Group_7"
            data-name="Group 7"
            transform="translate(-1376.12 1040.655)"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M1378.62-1038.155h12.642l9.114,54.686h60.272"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M1392.733-1028.746h69.975l-7.056,32.341-54.392,3.528Z"
              fill="#fff"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
            <g
              id="Ellipse_11"
              data-name="Ellipse 11"
              transform="translate(1404 -976)"
              fill="#fff"
              stroke="#fff"
              strokeWidth="1"
            >
              <circle cx="8.5" cy="8.5" r="8.5" stroke="none" />
              <circle cx="8.5" cy="8.5" r="8" fill="none" />
            </g>
            <g
              id="Ellipse_12"
              data-name="Ellipse 12"
              transform="translate(1437 -976)"
              fill="#fff"
              stroke="#fff"
              strokeWidth="1"
            >
              <circle cx="8.5" cy="8.5" r="8.5" stroke="none" />
              <circle cx="8.5" cy="8.5" r="8" fill="none" />
            </g>
          </g>
        </svg>
      </CartButton>
      {isCartOpen && <Cart />}
      <MenuButton onClick={() => setIsOpen(true)}>Menu</MenuButton>
    </Navbar>
  )
}

export default Header
