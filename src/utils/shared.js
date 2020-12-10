import styled from "styled-components"
import { green } from "./colors"
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
