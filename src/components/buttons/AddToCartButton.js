import React, { useContext, useState } from "react"
import Store from "../../context/store"
import Loader from "../loader"
import styled, { keyframes } from "styled-components"
import { orange, green } from "../../utils"

const AddToCartButton = ({ id, quantity }) => {
  const { addToCart } = useContext(Store)

  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Button
      role="button"
      className={isLoaded ? "animate" : ""}
      onClick={() => {
        addToCart(id, quantity, setIsLoading, setIsLoaded)
      }}
    >
      {isLoading ? (
        <Loader color="white" />
      ) : isLoaded ? (
        "Added"
      ) : (
        "Add to cart"
      )}
    </Button>
  )
}

export default AddToCartButton

const topBubbles = keyframes`
0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
`
const bottomBubbles = keyframes`
  0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
`
const Button = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform ease-in 0.1s;

  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 15rem;
    height: 15rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  &:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(
        ellipse,
        ${green[300]} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${green[300]} 20%,
        transparent 30%
      ),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(
        ellipse,
        transparent 10%,
        ${green[300]} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(ellipse, ${green[300]} 20%, transparent 20%),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
    //background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%;
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(
        circle,
        ${green[300]} 20%,
        transparent 20%
      ),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(
        circle,
        transparent 10%,
        ${green[300]} 15%,
        transparent 20%
      ),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%),
      radial-gradient(circle, ${green[300]} 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;
    //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }

  &.animate {
    &:before {
      display: block;
      animation: ${bottomBubbles} ease-in-out 0.95s forwards;
    }
    &:after {
      display: block;
      animation: ${topBubbles} ease-in-out 0.95s forwards;
    }
  }
`
