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
      id={frontmatter.id}
      title={frontmatter.title}
      image={frontmatter.picture}
      fb_link={frontmatter.facebook}
      twitter_link={frontmatter.twitter}
      github_link={frontmatter.github}
      linkedin_link={frontmatter.linkedin}
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
        id
        date(formatString: "MMMM DD, YYYY")
        path
        title
        location
        picture
        facebook
        twitter
        github
        linkedin
        website
        shortdescription
        description
      }
    }
  }
`