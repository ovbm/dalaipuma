module.exports = {
  siteMetadata: {
    title: `Dalai Puma`,
    description: `Dalai Puma is a newly formed Zürich super-trio consisting of Franziska Staubli, Ramón Oliveras and Yannik Sandhofer. They define their style as: Rhabarber Pop, Barbershop Hop, Indie Rap, Rock Lobster. Raaaa!`,
    author: `@ovbm`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://band.us18.list-manage.com/subscribe/post?u=2abfeaaabd3d0205adb46d2de&amp;id=be683207e5',
          timeout: 3500,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon.png',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};