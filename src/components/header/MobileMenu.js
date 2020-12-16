import React from "react"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import Logout from "../accounts/Logout"
import { red, Devices, typeScale } from "../../utils"

const MobileMenu = ({ isAuthenticated, isOpen, setIsOpen }) => {
  const animation = useSpring({
    transform: isOpen ? `translate3d(0,0,0) ` : `translate3d(100%,0,0)`,
    pointerEvents: isOpen ? "all" : "none",
  })

  return (
    <animated.div style={animation} className="animatedDiv">
      <MobileMenuWrapper>
        <MobileMenuItem>
          <Link to="/shop">Shop</Link>
        </MobileMenuItem>
        <MobileMenuItem>
          <Link to="/blogs">Blog</Link>
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
      </MobileMenuWrapper>
    </animated.div>
  )
}

export default MobileMenu

const MobileMenuWrapper = styled.aside`
  display: none;
  @media ${Devices.mobile} {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    background-color: white;
    z-index: 200;
  }
`

const MobileMenuItem = styled.li`
  font-size: ${typeScale.header3};
  margin-bottom: 2rem;

  a {
    text-decoration: none;
  }
`

const MenuCloseButton = styled.button`
  background: none;
  position: absolute;
  top: 5vw;
  right: 5vw;
  width: 4.8rem;
  height: 4.8rem;
  border: none;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    width: 100%;
    height: 3px;
    background-color: ${red[300]};
  }

  span.one {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  span.two {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
