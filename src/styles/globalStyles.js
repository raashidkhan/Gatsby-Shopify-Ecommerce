//import { createGlobalStyle, styled } from "styled-components"
import * as styled from "styled-components"

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  :root {
    --background: #f2fef6;
    --surface: hsl(0, 0%, 100%);
    --primary: #d96846;
    --secondary: #596235;
    --onBackground: hsl(0, 0%, 38%);
    --onSurface: hsl(0, 0%, 13%);
    --onPrimary: hsl(0, 0%, 97%);
    --onSecondary: hsl(0, 0%, 7%);
    --onHover: #7ed321;
    --error: hsl(351, 100%, 50%);
    --bora-large: 1rem;
    --bora-medium: 0.5rem;
    --bora-small: 0.25rem;
    --shadow-1: 0 1px 1px 0 rgba(66, 66, 66, 0.04),
      0 1px 3px 1px rgba(66, 66, 66, 0.08);
    --shadow-2: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
      0 1px 3px 1px rgba(66, 66, 66, 0.16);
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: 4000px) {
      font-size: 250%;
    }

    @media screen and (min-width: 3200px) and (max-width: 4000px) {
      font-size: 180%;
    }

    @media screen and (min-width: 2600px) and (max-width: 3200px) {
      font-size: 150%;
    }

    @media screen and (min-width: 2000px) and (max-width: 2600px) {
      font-size: 125%;
    }

    @media screen and (min-width: 1600px) and (max-width: 2000px) {
      font-size: 95%;
    }

    @media screen and (min-width: 1400px) and (max-width: 1600px) {
      font-size: 75%;
    }
  }
  body {
    box-sizing: border-box;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overscroll-behavior-y: none;
    background-color: var(--background);
    font-family: "Avenir";
  }
`
export default GlobalStyle
