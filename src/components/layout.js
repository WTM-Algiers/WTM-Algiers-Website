/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NB from "../components/navbar"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

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
    <div style={{
      background: "white",
      minHeight: "100vh",
      textAlign: "center"
    }}>

      <NB menuelements={["HOME", "ABOUT", "EVENTS", "PARTNERS", "CONTACT"]} />

      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          display:"contents"
        }}
      >
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
