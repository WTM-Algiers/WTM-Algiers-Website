import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo/WTM-Main.svg"
import SM from "../components/socialmedia"
import EventSlide from '../components/EventSlide'
import EventSlideShow from '../components/EventSlideShow'
const IndexPage = () => (
  <Layout>
    <SEO description="Women TechMakers Algiers / WTM Algiers Official Website" title="WTM Algiers Website Main Home" />
    <h1>Our Events</h1>
    <EventSlideShow></EventSlideShow>
   
  </Layout>
)

export default IndexPage
