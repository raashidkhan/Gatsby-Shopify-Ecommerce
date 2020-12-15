import styled from "styled-components"
import { Link } from "gatsby"
import { typeScale } from "./typography"
import { elevation, radius } from "./global"

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
  color: ${props => props.theme.textOnPrimary};

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
    outline: none;
    transform: translateY(-3px);
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

export const TextLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  color: ${props => props.theme.primaryColor};
  display: block;

  &:hover {
    color: ${props => props.theme.primaryHoverColor};
  }
`
export const SmallButton = styled.button`
  font-size: ${typeScale.helperText};
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${props => props.theme.secondaryColor};
  background: none;
  transition: 100ms ease;
  color: inherit;

  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.textOnSecondaryHoverColor};
  }
`
