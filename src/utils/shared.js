import styled, { keyframes } from "styled-components"
import { green, neutral } from "./colors"
import { elevation, radius } from "./global"
import { typeScale } from "./typography"
export const FormLabel = styled.label`
  font-family: inherit;
  margin-bottom: 2.4rem;
  font-size: ${typeScale.paragraph};
  //font-weight: 700;
`

export const FormInput = styled.input`
  min-width: 20vw;
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: ${radius.large};
  outline: none;
  transition: 100ms ease;
  margin-top: 0.8rem;

  &:hover {
    transform: translateY(-2px);
    background-color: ${green[100]};
  }

  &:focus {
    transform: translateY(-2px);
    outline: none;
  }

  &:active {
    transform: translateY(0);
  }
`

export const Select = styled.select`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: inline-block;
  margin-left: 2.4rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: ${radius.small};
  background-color: ${green[100]};
  border: none;
  box-shadow: ${elevation[100]};
  border-bottom: 2px solid ${green[300]};

  &:hover {
    border-bottom-color: ${green[400]};
  }

  &:active {
    background-color: ${green[200]};
  }

  &:focus {
    outline: 1px solid ${props => props.theme.secondaryColor};
    outline-offset: 3px;
  }

  & > option:nth-child(odd) {
    background-color: ${green[100]};
  }
  & > option:nth-child(even) {
    background-color: ${green[200]};
  }
`

const move1 = keyframes`
0%, 5% {
		transform: translateX(-50vw) scaleX(0.7);
    
	}
	to {
		transform: translateX(100vw) scaleX(3);
	}
`

export const Skeleton = styled.div`
  min-height: 12rem;
  width: 100%;
  background-color: ${neutral[300]};
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border-radius: ${radius.large};
  margin-bottom: 2rem;
  div {
    min-height: 2rem;
    margin-bottom: 1rem;
    background-color: ${neutral[200]};
    width: 100%;
    border-radius: ${radius.small};
    border: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      width: 20%;
      height: 100%;
      top: 0;
      left: 0;
      filter: blur(20px) hue-rotate(90deg);
      background-color: rgba(0, 0, 0, 0.1);
      animation: ${move1} 1000ms linear infinite normal;
    }
  }

  & > div:nth-child(1) {
    &::after {
      animation-delay: 0.5s;
    }
  }
  & > div:nth-child(2) {
    &::after {
      animation-delay: 0.8s;
    }
  }

  & > div:last-child {
    min-height: 4rem;
  }
`
