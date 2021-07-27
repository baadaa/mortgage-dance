module.exports = {
  siteMetadata: {
    title: `Mortgage Dance`,
    description: `Mortgage can be frustrating and intimidating. Relax and dance with it.`,
    author: `@baadaa`,
    siteUrl: `https://mortgage.dance/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mortgage-dance`,
        short_name: `mortgage-dance`,
        start_url: `/`,
        background_color: `#33A1CE`,
        theme_color: `#33A1CE`,
        display: `minimal-ui`,
        icon: `src/assets/circle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
