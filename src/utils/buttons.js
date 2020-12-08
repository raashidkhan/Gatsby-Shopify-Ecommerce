import styled from "styled-components"
import { green, neutral, orange, red, yellow } from "./colors"
import { typeScale } from "./typography"
import { elevation, radius } from "./global"
import { defaultTheme } from "./theme"
import { Link } from "gatsby"

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8rem 2.4rem;
  cursor: pointer;
  font-size: ${typeScale.paragraph};
  width: ${props => props.width}%;
  box-shadow: ${elevation[100]};
  border-radius: ${radius.medium};
  transition: 100ms linear;
`
export const PrimarySolidButton = styled(Button)`
  min-height: 4.8rem;
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};
  //color: ${props => props.theme.textColor};
  color: ${neutral[900]};
  transform: translateY(0);

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textOnPrimaryHoverColor};
    transform: translateY(-2px);
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
    outline-offset: 2px;
  }
  &:active {
    outline: none;
    transform: translateY(0);
  }
`

export const PrimaryOutlineButton = styled(Button)`
  min-height: 4.8rem;
  background: none;
  border: 1px solid ${props => props.theme.primaryColor};
  transform: translateY(0);

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    transform: translateY(-2px);
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
    outline-offset: 2px;
  }
  &:active {
    outline: none;
    transform: translateY(0);
  }
`

export const SecondarySolidButton = styled(Button)`
  min-height: 4.8rem;
  background-color: ${props => props.theme.secondaryColor};
  border: 1px solid ${props => props.theme.secondaryColor};
  color: ${props => props.theme.textOnSecondary};
  transform: translateY(0);

  &:hover {
    background-color: ${props => props.theme.secondaryHoverColor};
    color: ${props => props.theme.textOnSecondaryHoverColor};
    transform: translateY(-2px);
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
    outline-offset: 2px;
  }
  &:active {
    outline: none;
    transform: translateY(0);
  }
`

export const SecondaryOutlineButton = styled(Button)`
  min-height: 4.8rem;
  background: none;
  border: 1px solid ${props => props.theme.secondaryColor};
  transform: translateY(0);

  &:hover {
    background-color: ${props => props.theme.secondaryHoverColor};
    color: ${props => props.theme.textOnSecondaryHoverColor};
    transform: translateY(-2px);
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
    outline-offset: 2px;
  }
  &:active {
    outline: none;
    transform: translateY(0);
  }
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
export const InternalLinkButton = styled.span`
  text-align: center;
  cursor: pointer;
  font-size: ${typeScale.header5};
  text-decoration: none;
  padding: 0.8rem 2.4rem;
  display: block;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textOnPrimary};
  border: 2px solid ${props => props.theme.primaryColor};
  box-shadow: ${elevation[100]};
  border-radius: ${radius.medium};
  transition: 100ms linear;
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
