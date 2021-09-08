module.exports = {
  siteMetadata: {
    title: "Kate's Website",
    author: "Kate Le",
    description: "A Gatsby.js V2 Starter based on Forty by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo-fill.png', // This path is relative to the root of the site. Change file to type .ico
        cache_busting_mode: 'none',
      },
    },
    'gatsby-plugin-sass'
  ],
}
