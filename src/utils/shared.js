import styled, { keyframes } from "styled-components"
import { green, neutral } from "./colors"
import { elevation, radius } from "./global"
import { typeScale } from "./typography"
export const FormLabel = styled.label`
  font-family: inherit;
  margin-bottom: 1.6rem;
  font-size: ${typeScale.paragraph};
  //font-weight: 700;
  display: block;
`

export const FormInput = styled.input`
  //min-width: 20vw;
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: ${radius.medium};
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
  color: inherit;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: ${radius.medium};
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

  & > option:nth-child(odd) {
    background-color: ${neutral[100]};
    font-size: 1.6rem;
  }
  & > option:nth-child(even) {
    background-color: ${neutral[200]};
    font-size: 1.6rem;
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
export const Tags = styled.span`
  font-size: ${typeScale.helperText};
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 0.4rem 0.8rem;
  border-radius: ${radius.small};
  margin: 0.5rem 1rem;
  margin-left: 0;
  display: inline-block;

  transition: 100ms ease;
`
export const SuccessTags = styled(Tags)`
  background-color: ${props => props.theme.status.successColor};
  &:hover {
    background-color: ${props => props.theme.status.successColorHover};
  }
`
export const InProgressTags = styled(Tags)`
  background-color: ${props => props.theme.status.warningColor};
  &:hover {
    background-color: ${props => props.theme.status.warningColorHover};
  }
`
export const CancelledTags = styled(Tags)`
  background-color: ${props => props.theme.status.errorColor};
  color: ${props => props.theme.white};
  &:hover {
    background-color: ${props => props.theme.status.errorColorHover};
  }
`
export const OutlineTags = styled(Tags)`
  border: 1px solid ${props => props.theme.secondaryColor};
  &:hover {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.textOnSecondaryHoverColor};
  }
`
