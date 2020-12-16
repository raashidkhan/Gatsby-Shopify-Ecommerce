import styled from "styled-components"
import {
  red,
  elevation,
  radius,
  typeScale,
  Devices,
  neutral,
} from "../../utils"

export const Cart = styled.aside`
  height: 100%;
  box-shadow: ${elevation[200]};
  padding: 2.4rem;
  border-top-left-radius: ${radius.large};
  border-bottom-left-radius: ${radius.large};
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
  width: 2rem;
  height: 2rem;
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
    background-color: ${red[100]};
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

  border-radius: ${radius.large};
  padding: 2.4rem;

  background-color: ${props => props.theme.surface};

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${neutral[400]};
    border-radius: 0.3rem;
  }
`
export const CartItemWrapper = styled.article`
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: 0.8fr 2fr 0.25fr;
  gap: 2rem;

  background-color: ${props => props.theme.background};
  border-radius: ${radius.medium};
  padding: 2rem;
  position: relative;
  box-shadow: ${elevation[100]};

  @supports (
    (-webkit-backdrop-filter: blur(5px)) or (backdrop-filter: blur(5px))
  ) {
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
`
export const CartItemContent = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //flex-wrap: wrap;

  p {
    width: 100%;
  }
`

export const CartItemImage = styled.div`
  position: relative;
  min-height: 9rem;
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
    background-color: ${props => props.theme.status.successColor};
    //color: ${props => props.theme.textOnSecondaryColor};
  }
  img {
    max-width: 100%;
    display: block;
    border-radius: ${radius.medium};
  }
`

export const RemoveItemButton = styled(CloseButton)`
  cursor: pointer;
  align-self: center;
  margin-left: auto;
  display: block;
  padding: 0.4rem 0.8rem;
  background: none;
  transition: 100ms ease;
  &:hover {
    transform: translateY(-2px);
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
