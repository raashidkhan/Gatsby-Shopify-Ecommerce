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
    background-color:${props => props.theme.background};
    color:${props => props.theme.textColor};
  font-size:1.6rem;
  }


  img{
    display: inline-block;
    max-width:100%;
  }

 li{
   list-style-type:none;
 }

 a{
   text-decoration:none;
   color:inherit;
 }
 button, li, a{
   &:focus{
    outline:1px solid ${props => props.theme.primaryColor};
    outline-offset:2px;
   }
 }

  input, label, button{
    font-family:inherit;
  }

`

export const radius = {
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
}

export const elevation = {
  100: "0 1px 1px 0 rgba(66, 66, 66, 0.04), 0 1px 3px 1px rgba(66, 66, 66, 0.08)",
  200: "0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16)",
}
