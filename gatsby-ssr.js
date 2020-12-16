import React from "react"
import { GlobalStyle } from "./src/utils"
import GlobalFonts from "./src/fonts/fonts"

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      {element}
    </>
  )
}
