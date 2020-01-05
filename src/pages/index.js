import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import LP from "../components/landing";
import EventSection from '../components/EventSection'
import About from "../components/about_us"
import Contact from "../components/contact_us"
import Partners from "../components/partners"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const events = edges
    .map(edge => ({
      title: edge.node.frontmatter.title,
      image: edge.node.frontmatter.picture,
      description: edge.node.frontmatter.shortdescription,
      link: edge.node.frontmatter.path
    }))

  return (
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
        <EventSection eventData={events} />
      </div>

      <div id="section3">
        <Partners />
      </div>

      <div id="section4" style={{ backgroundColor: "#f2f2f2" }}>
        <Contact />
      </div>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            shortdescription
            picture
          }
        }
      }
    }
  }
`