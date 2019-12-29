import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo/WTM-Main.svg";
import SM from "../components/socialmedia";
import LP from "../components/landing";
import EventSlide from "../components/EventSlide";
import EventSlideShow from "../components/EventSlideShow";
import About from "../components/about_us";
import Contact from "../components/contact_us";

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

    <h1>Our Events</h1>
    <div style={{ width: "100%", height: "30em", margin: "auto" }}>
      <EventSlideShow></EventSlideShow>
    </div>

    <div
      style={{
        maxWidth: `400px`,
        marginBottom: `0.5rem`,
        display: "block",
        margin: "auto"
      }}
    >
      <img src={logo} alt={"WTM Logo"} />
    </div>

    <p>Welcome to WTM Algiers Official Website.</p>
    <p>We are still working on it cuerrently, See you Soon ;)</p>

    <SM direction="" />
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Contact />
    </div>
  </Layout>
);

export default IndexPage;
