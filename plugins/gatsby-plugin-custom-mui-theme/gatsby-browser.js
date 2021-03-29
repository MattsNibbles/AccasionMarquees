/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react"
import StyleProvider from "./StyleProvider"

export const wrapRootElement = ({ element }) => {
  return <StyleProvider>{element}</StyleProvider>
}
