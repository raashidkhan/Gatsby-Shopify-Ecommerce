import styled from "styled-components"
import { Devices } from "../mediaBreakpoint"
const Button = styled.button`
  cursor: pointer;
  //padding: 1rem 2rem;
  width: ${props => props.width}%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary);
  border-radius: var(--bora-medium);
  font-weight: 400;
  font-size: 1.6rem;
  background: ${props => (props.primary ? "var(--primary)" : "transparent")};
  color: ${props => (props.primary ? "var(--onPrimary)" : "var(--primary)")};

  @media ${Devices.mobile} {
    width: 100%;
    padding: 2rem;
    &:last-child {
      margin-top: 2rem;
    }
  }
`
export default Button
