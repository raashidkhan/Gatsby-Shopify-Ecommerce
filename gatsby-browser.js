import React from "react"
import Provider from "./src/context/provider"
import "./src/fonts/fonts.css"
import { GlobalStyle } from "./src/utils"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
