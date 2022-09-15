// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "Gatsby Contentful Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Contentful",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/images/logo-square.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 1136,
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: "embedVideo-container",
            },
          },
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              maxWidth: 1136,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
  ],
}
