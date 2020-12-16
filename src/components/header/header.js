import { Link } from "gatsby"
import React, { useContext, useState } from "react"
import Logout from "../accounts/Logout"
import StoreContext from "../../context/store"
import Cart from "../cart/cartWindow"
import Logo from "../../assets/logo.svg"
import styled from "styled-components"
import { neutral, Devices, elevation } from "../../utils"
import MobileMenu from "./MobileMenu"
import { useTransition, animated } from "react-spring"

const Header = () => {
  const { customerAccessToken, checkout, isCartOpen, toggleCart } = useContext(
    StoreContext
  )
  // console.log(checkout.lineItems.length)

  const [isOpen, setIsOpen] = useState(false)

  const isAuthenticated =
    customerAccessToken &&
    customerAccessToken.expiresAt &&
    customerAccessToken.expiresAt > new Date().toISOString()
      ? true
      : false

  const animation = useTransition(isCartOpen, null, {
    from: { transform: `translate3d(100%,0,0)` },
    enter: { transform: `translate3d(0, 0, 0)` },
    leave: { transform: `translate3d(100%,0,0)` },
  })
  return (
    <Navbar>
      <Link to="/" className="logo">
        <img style={{ display: "block" }} src={Logo} alt="" />
      </Link>
      <MobileMenu
        isAuthenticated={isAuthenticated}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Menu>
        <DesktopMenu>
          <DesktopMenuItem>
            <Link to="/shop">Shop</Link>
          </DesktopMenuItem>
          <DesktopMenuItem>
            <Link to="/blogs">Blog</Link>
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
        {checkout.lineItems.length === 0 || null ? (
          ""
        ) : (
          <Items>checkout.lineItems.length</Items>
        )}

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
      {animation.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className="cartWindow" key={key} style={props}>
              <Cart />
            </animated.div>
          )
      )}

      {/* {isCartOpen && <Cart />} */}
      <MenuButton onClick={() => setIsOpen(true)}>Menu</MenuButton>
    </Navbar>
  )
}

export default Header

const Navbar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${props => props.theme.background};
  box-shadow: ${elevation[100]}; //background-color: hsla(13, 70%, 100%, 0.4);
  //backdrop-filter: blur(15px);

  .animatedDiv {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .cartWindow {
    position: fixed;
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;
    background-color: white;
    z-index: 200;
    background-color: ${props => props.theme.background};

    @supports (
      (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
    ) {
      background-color: rgba(255, 255, 255, 0.4);
      -webkit-backdrop-filter: blur(15px);
      backdrop-filter: blur(15px);
    }
    // transform-origin: right bottom;
    @media ${Devices.mobile} {
      width: 100vw;
    }
  }
`

const Menu = styled.div`
  display: flex;
  width: 50%;
  @media ${Devices.tab} {
    width: 70%;
  }
`

const DesktopMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${neutral[800]};
  @media ${Devices.mobile} {
    display: none;
  }
  li {
    a {
      text-decoration: none;
      color: inherit;
      position: relative;
    }
  }
`
const DesktopMenuItem = styled.li`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: 150ms ease-in;
    transform-origin: center;
    background-color: ${props => props.theme.primaryColor};
  }
  &:hover {
    color: ${props => props.theme.primaryColor};
    &::after {
      transform: scaleX(1);
    }
  }
`
const MenuButton = styled.div`
  display: none;
  @media ${Devices.mobile} {
    display: block;
  }
`
const CartButton = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  border: none;
  background-color: ${props => props.theme.primaryHoverColor};
  padding: 1.6rem;
  width: 2.5rem;
  height: 2.5rem;
  box-sizing: content-box;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`
const Items = styled.span`
  position: absolute;
  top: 0rem;
  right: 0rem;
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.textOnSecondary};
  min-width: 2rem;
  min-height: 2rem;
  display: block;
  border-radius: 2rem;
`
