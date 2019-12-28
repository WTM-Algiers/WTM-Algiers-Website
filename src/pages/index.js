import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo/WTM-Main.svg"
import SM from "../components/socialmedia"

import EventSection from '../components/EventSection'
const IndexPage = () => (
  <Layout>
    <SEO description="Women TechMakers Algiers / WTM Algiers Official Website" title="WTM Algiers Website Main Home" />
    <EventSection></EventSection>
    
  </Layout>
)

export default IndexPage
