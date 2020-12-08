import styled from "styled-components"
import { neutral, red, Devices, typeScale } from "../../utils"

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
  //background-color: ${props => props.theme.background};
  /* background-color: hsla(13, 70%, 100%, 0.4);
  backdrop-filter: blur(15px); */
  @media ${Devices.tab} {
    padding: 5vw;
  }
`

export const Menu = styled.div`
  display: flex;
  width: 50%;
  @media ${Devices.tab} {
    width: 70%;
  }
`

export const MobileMenu = styled.aside`
  display: none;
  @media ${Devices.mobile} {
    position: fixed;
    display: block;
    width: 100vw;
    height: 100vh;
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
export const MobileMenuItem = styled.li`
  font-size: ${typeScale.header3};
  margin-bottom: 2rem;

  a {
    text-decoration: none;
  }
`
export const MenuCloseButton = styled.button`
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
export const DesktopMenu = styled.ul`
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
  @media ${Devices.mobile} {
    display: block;
  }
`
export const CartButton = styled.button`
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
