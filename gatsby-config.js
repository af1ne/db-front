module.exports = {
  siteMetadata: {
    title: `Delphine Brunet Développeuse web et webmobile React / Node.js`,
    description: `Site de mes réalisations : ma vie, mon oeuvre !`,
    author: `Delphine BRUNET, alias af1ne`,
    menuLinks:[
      {
         name:'home',
         link:'/'
      },
      {
         name:'portfolio',
         link:'/portfolio'
      },
      {
        name:'curriculum-vitae',
        link:'/cv'
      },
     {
        name:'a propos',
        link:'/a-propos'
      },
      {
        name:'contact',
        link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [
          `diploma`,
          `experience`,
          `project`,
          `techno`,
          `user`
        ],
        queryLimit: 1000,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Overlock`,
          },
          {
            family: `Aclonica`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
