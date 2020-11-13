module.exports = {
  siteMetadata: {
    title: `Women Techmakers Algiers`,
    description: `The offical website of the WTM Algiers Community, A community that supports Women in tech and tries its best to make the local community goes above their biases and make tech accessible`,
    author: `@gattalraouf`,
    siteUrl: 'https://www.wtm-algiers.tech'
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/markdown-pages/events`,
      },
    },
    `gatsby-transformer-remark`,
  ],
  pathPrefix: "/WTM-Kolachi-Website",
}
