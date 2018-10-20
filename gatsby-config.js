module.exports = {
  siteMetadata: {
    title: "The Bastion Bot - One of the best Discord Bot",
    description: "Give awesome perks to your Discord server!",
    image: "https://resources.bastionbot.org/og-image.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "The Bastion Bot - One of the best Discord Bot",
        short_name: "The Bastion Bot",
        start_url: "/",
        background_color: "#070A0C",
        theme_color: "#070A0C",
        display: "minimal-ui",
        icon: "https://resources.bastionbot.org/og-image.jpg",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#40C4FB",
      },
    },
    "gatsby-plugin-offline",
  ],
};
