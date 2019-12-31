import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LP from "../components/landing";
import EventSection from '../components/EventSection'
import About from "../components/about_us"
import Contact from "../components/contact_us"

const IndexPage = () => (
  <Layout>
    <SEO
      description="Women TechMakers Algiers / WTM Algiers Official Website"
      title="WTM Algiers Website Main Home"
    />

    <div id="section0">
      <LP />
    </div>

    <div id="section1">
      <About />
    </div>

    <div id="section2">
      <EventSection />
    </div>

    <div id="section4" style={{ backgroundColor: "#f2f2f2" }}>
      <Contact />
    </div>
  </Layout>
);

export default IndexPage;