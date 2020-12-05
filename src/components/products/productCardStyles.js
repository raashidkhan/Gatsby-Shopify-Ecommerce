import styled from "styled-components"
import { radius, typeScale, Button, elevation } from "../../utils"

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  border-radius: ${radius.large};
  background-color: ${props => props.theme.white};
  box-shadow: ${elevation[100]};
`
export const ProductImage = styled.div`
  border-radius: ${radius.large};
  overflow: hidden;
  margin-bottom: 2.4rem;
  height: 60%;
`
export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.4rem;
`
export const ProductName = styled.h2`
  font-size: ${typeScale.header5};
  color: ${props => props.theme.textColor};
  margin-bottom: 1.2rem;
`
export const ProductPrice = styled.h3`
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.primaryColor};
`
export const CounterButtonWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${typeScale.paragraph};
`

export const CounterButton = styled.button`
  padding: 0.4rem;
  font-size: ${typeScale.paragraph};
  line-height: 1;
  width: 3rem;
  height: 3rem;
  background: none;
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.secondaryColor};
  border-radius: ${radius.small};
  transition: 100ms ease;
  &:hover {
    background: ${props => props.theme.secondaryHoverColor};
    color: ${props => props.theme.textOnSecondaryHoverColor};
    transform: translateY(-1.5px);
  }
  &:focus {
    outline: none;
    transform: translateY(-1.5px);
  }

  &:active {
    transform: translateY(0);
  }
`
