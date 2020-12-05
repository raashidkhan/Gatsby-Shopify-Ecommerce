import styled from "styled-components"
import { green, neutral, orange, red, yellow } from "./colors"
import { typeScale } from "./typography"
import { defaultTheme } from "./theme"

export const Button = styled.button`
  display: inline-block;
  padding: 0.8rem 2.4rem;
  font-size: ${typeScale.header5};
  cursor: pointer;
  width: ${props => props.width}%;
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textOnPrimary};
  border: 2px solid ${defaultTheme.primaryColor};

  &:hover,
  &:focus {
    background-color: ${defaultTheme.primaryHoverColor};
    color: white;
  }
`
export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.textOnSecondary};
  border: 2px solid ${defaultTheme.secondaryColor};

  &:hover,
  &:focus {
    background-color: ${defaultTheme.secondaryHoverColor};
    color: ${defaultTheme.textOnSecondaryHoverColor};
  }
`
