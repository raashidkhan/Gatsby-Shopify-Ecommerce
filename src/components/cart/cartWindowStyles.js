import styled from "styled-components"
import {
  red,
  orange,
  green,
  elevation,
  radius,
  typeScale,
  Devices,
} from "../../utils"
export const Cart = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  background-color: white;
  z-index: 200;
  box-shadow: ${elevation[200]};
  padding: 2.4rem;
  border-top-left-radius: ${radius.large};
  border-bottom-left-radius: ${radius.large};
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(15px);

  @media ${Devices.mobile} {
    width: 100vw;
  }
`
export const CartHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  h3 {
    font-size: ${typeScale.header5};
  }
`
export const CloseButton = styled.button`
  display: block;
  background: none;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  position: relative;
  cursor: pointer;

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

export const CartWrapper = styled.div`
  width: 100%;
  height: 63%;
  overflow-y: auto;
  //box-shadow: ${elevation[100]};
  //background-color: ${props => props.theme.surface};
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: ${radius.large};
  padding: 2.4rem;

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.primaryColor};
    border-radius: 0.3rem;
  }
`
export const CartItemWrapper = styled.article`
  display: flex;
  margin: 1.2rem auto;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: ${radius.medium};
  padding: 2rem;
  position: relative;
  box-shadow: ${elevation[100]};
`
export const CartItemContent = styled.article`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartItemImage = styled.div`
  width: 7.5rem;
  position: relative;
  p {
    position: absolute;
    top: -1rem;
    right: -1rem;
    padding: 1rem;
    font-size: ${typeScale.helperText};
    border-radius: 2rem;
    line-height: 0.5;
    display: inline;
    font-weight: 700;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textOnPrimaryColor};
  }
  img {
    max-width: 100%;
    display: block;
    border-radius: ${radius.medium};
  }
`
export const CartPrice = styled.div`
  width: 100%;
  margin: 2.4rem 0;
  padding: 2.4rem;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: ${radius.large};

  p {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: hsl(0, 0%, 48%);
  }

  h3 {
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: hsl(0, 0%, 28%);
  }
`

export const RemoveItemButton = styled.button`
  cursor: pointer;
  display: block;
  padding: 0.4rem 0.8rem;
  background: none;
  font-size: ${typeScale.helperText};
  border: 1px solid ${red[100]};
  transition: 100ms ease;
  &:hover {
    transform: translateY(-2px);
    background: ${red[100]};
    color: white;
  }

  &:focus {
    transform: translateY(-2px);
    outline: none;
  }
  &:active {
    transform: translateY(0);
  }
`
