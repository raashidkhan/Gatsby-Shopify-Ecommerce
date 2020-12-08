import styled from "styled-components"
import { green, neutral } from "./colors"
import { radius } from "./global"
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
