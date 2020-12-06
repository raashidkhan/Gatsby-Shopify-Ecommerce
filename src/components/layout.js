import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { defaultTheme, GlobalStyle } from "../utils"
import GlobalFonts from "../fonts/fonts"
import Header from "./header/header"
import { ThemeProvider } from "styled-components"
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalFonts />
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
