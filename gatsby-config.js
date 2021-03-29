module.exports = {
  siteMetadata: {
    title: `Accasion marquees`,
    titleTemplate: "%s · Marquee Hire",
    description: `High quality marquee hire for weddings, parties & events.`,
    url: "https://www.accasionmarquees.com",
    image: "src/images/gatsby-icon.png",
    twitterUsername: "@AccasionMarquee",
    author: `@AccasionMarquee`,
  },
  plugins: [
    `gatsby-plugin-custom-mui-theme`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `AccasionMarquees`,
        short_name: `AccasionMarquees`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
