import React from "react"
import Provider from "./src/context/provider"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
