
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo/WTM-Main.svg"
import SM from "../components/socialmedia"
const IndexPage = () => (
  <Layout>
    <SEO description="Women TechMakers Algiers / WTM Algiers Official Website" title="WTM Algiers Website Main Home" />

    <div style={{ maxWidth: `400px`, marginBottom: `0.5rem`, display:"block", margin:"auto" }}>
      <img src={logo} alt={"WTM Logo"}/>

    </div>
    <p>Welcome to WTM Algiers Official Website.</p>
    <p>We are still working on it cuerrently, See you Soon ;)</p>

    <SM direction="" />

  </Layout>
)

export default IndexPage
