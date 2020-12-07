import styled from "styled-components"
import { radius } from "./global"
export const FormLabel = styled.label`
  font-family: inherit;
  margin-bottom: 0.8rem;
`

export const FormInput = styled.input`
  min-width: 20vw;
  width: 100%;
  display: block;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 4rem;
  outline: none;
  transition: 100ms ease;

  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    transform: translateY(-2px);
    outline: none;
  }
`
