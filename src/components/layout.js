import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../styles/globalStyles"
import GlobalFonts from "../fonts/fonts"
import Header from "./header"
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

  // useEffect(() => {
  //   const FB = window.FB
  //   window.fbAsyncInit = function () {
  //     this.FB.init({
  //       xfbml: true,
  //       version: "v9.0",
  //     })
  //   }

  //   const fbChat = (d, s, id) => {
  //     var js,
  //       fjs = d.getElementsByTagName(s)[0]
  //     if (d.getElementById(id)) return
  //     js = d.createElement(s)
  //     js.id = id
  //     js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
  //     fjs.parentNode.insertBefore(js, fjs)
  //   }

  //   fbChat(document, "script", "facebook-jssdk")

  // }, [])

  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      {/* <!-- Load Facebook SDK for JavaScript --> */}
      {/* <div id="fb-root"></div> */}
      {/* <!-- Your Chat Plugin code --> */}
      {/* <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="105343014706572"
        ></div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
