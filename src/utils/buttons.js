import styled from "styled-components"
import { green, neutral, orange, red, yellow } from "./colors"
import { typeScale } from "./typography"
import { elevation, radius } from "./global"
import { defaultTheme } from "./theme"

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8rem 2.4rem;
  min-height: 4.8rem;
  font-size: ${typeScale.header5};
  cursor: pointer;
  font-size: ${typeScale.paragraph};
  width: ${props => props.width}%;
  box-shadow: ${elevation[100]};
  border-radius: ${radius.medium};
  transition: 100ms linear;
`

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textOnPrimary};
  border: 2px solid ${props => props.theme.primaryColor};

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textOnPrimaryHoverColor};
  }
  &:focus {
    outline: none;
    transform: translateY(-4px);
  }
  &:active {
    outline: 2px solid ${props => props.theme.secondaryColor};
    outline-offset: 2px;
  }
`
export const SecondaryButton = styled(Button)`
  background: none;
  color: ${props => props.theme.textOnSecondary};
  border: 2px solid ${props => props.theme.secondaryColor};
  outline: none;

  &:hover {
    background-color: ${props => props.theme.secondaryHoverColor};
    color: ${props => props.theme.textOnSecondaryHoverColor};
    transform: translateY(-3px);
  }
  &:focus {
    outline: none;
    transform: translateY(-3px);
  }
  &:active {
    outline: none;
    transform: translateY(0);
    box-shadow: ${elevation[200]};
  }
`
