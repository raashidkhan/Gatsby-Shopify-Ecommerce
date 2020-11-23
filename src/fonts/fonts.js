import { createGlobalStyle } from "styled-components"
import AvenirMediumWoff from "./Avenir-Medium.woff"
import AvenirMediumWoff2 from "./Avenir-Medium.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'Avenir';
        src: local('Avenir'), local('Avenir'),
        url(${AvenirMediumWoff2}) format('woff2'),
        url(${AvenirMediumWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`
