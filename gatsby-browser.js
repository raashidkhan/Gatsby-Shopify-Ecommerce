import React from "react"
import Provider from "./src/context/provider"
import { GlobalStyle } from "./src/utils"
import GlobalFonts from "./src/fonts/fonts"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      {element}
    </>
  )
}
