import React from "react"
import { graphql } from "gatsby"
import EventPage from "../components/EventPage";

export default function EventTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = markdownRemark
    return (

        <EventPage
            title={frontmatter.title}
            image={""}
            info={{
                location: frontmatter.location,
                date: frontmatter.date,
                website: frontmatter.website
            }}
            description={frontmatter.description}
        />
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        location
        website
        shortdescription
        description
      }
    }
  }
`