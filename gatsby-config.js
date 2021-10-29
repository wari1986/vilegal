module.exports = {
  siteMetadata: {
    title: 'Vi-Legal',
    author: 'Nicolay Camacho- Helios Web Development',
    description: 'A Gatsby website for Vi-Legal Estudio Juridico',
    copyright: 'This website is copyright 2021 - Helios Web Development',
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
  ],
};
