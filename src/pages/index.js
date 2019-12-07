import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/logo/WTM-Main.svg"

const IndexPage = () => (
  <Layout>
    <SEO description="Women TechMakers Algiers / WTM Algiers Official Website" title="WTM Algiers Website Main Home" />
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <img src={logo}/>
    </div>
    <p>Welcome to WTM Algiers Official Website.</p>
    <p>We are still working on it cuerrently, See you Soon ;)</p>

  </Layout>
)

export default IndexPage
