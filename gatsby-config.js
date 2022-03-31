module.exports = {
  siteMetadata: {
    title: 'Vi-Legal Estudio de Abogados',
    author: 'Nicolay Camacho - Helios Web Development',
    description:
      'Vi-Legal es un estudio de abogados ubicado en La Paz Bolivia. Los juristas principales son el Dr. Victor Manuel Villarroel Vargas y el Dr. Ricardo Ivan Aleman Menduiña. Expertos en Derecho Civil, Derecho Comercial, Derecho Laboral, Derecho Tributario y Derecho Penal. Vi-Legal ofrece un blog con articulos de derecho y ciencias jurídicas',
    icon: `src/images/logovilegal.webp`,
    url: `http://www.vi-legal.com/`,
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logovilegal.webp`,
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
  ],
};
