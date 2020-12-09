import React from "react"
import styled from "styled-components"
import { radius, typeScale } from "../../utils"
const CounterButtons = ({ count, setCount }) => {
  return (
    <CounterButtonWrapper>
      <CounterButton
        aria-label="Increment Button"
        onClick={() => {
          count <= 1 ? setCount(1) : setCount(count - 1)
        }}
      >
        <strong>-</strong>
      </CounterButton>
      <p>{count}</p>
      <CounterButton
        aria-label="Decrement Button"
        onClick={() => {
          count >= 10 ? setCount(10) : setCount(count + 1)
        }}
      >
        <strong>+</strong>
      </CounterButton>
    </CounterButtonWrapper>
  )
}

export default CounterButtons

export const CounterButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${typeScale.paragraph};
  & > p {
    margin: 0 1rem;
  }
`

export const CounterButton = styled.button`
  padding: 0.4rem;
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
