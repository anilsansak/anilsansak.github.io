//
module.exports = {
  siteMetadata: {
    title: "Yaşar Anıl Sansak",
    author: "Yaşar Anıl Sansak",
    description: "Anıl Sansak personal web site.",
    siteUrl: "https://anilsansak.github.io"
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-jss`,
    `gatsby-plugin-typescript`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
