import styled from "styled-components"
import { neutral } from "./colors"
import { Devices } from "./mediaBreakpoints"

export const Navbar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 5vw;
  z-index: 100;
  background-color: ${props => props.theme.background};
  /* background-color: hsla(13, 70%, 100%, 0.4);
  backdrop-filter: blur(15px); */
`

export const Menu = styled.div`
  display: flex;
  width: 50%;
`

export const MobileMenu = styled.aside`
  display: none;
`

export const DesktopMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${neutral[800]};

  li {
    a {
      text-decoration: none;
      color: inherit;
      position: relative;
    }
  }
`
export const DesktopMenuItem = styled.li`
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
export const MenuButton = styled.div`
  display: none;
`
