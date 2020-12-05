import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
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
    font-family: "Avenir";
    background-color:${props => props.theme.background}
  
  }

  input, label, button{
    font-family:inherit;
  }
`

export const radius = {
  small: "0.25rem",
  medium: "0.5rem",
  large: "1rem",
}
