module.exports = {
  siteMetadata: {
    title: 'Маширо - Один из лучших ботов дискорда',
    description: 'Единственный дискорд бот который вам понадобится!',
    image: 'https://bot.gachi.ru/og-image.jpg'
  },
  plugins: [
    {
    resolve: 'gatsby-plugin-yandex-metrika',
    options: {
      trackingId: '48903419',
      webvisor: true,
      trackHash: true,
	  version: 2,
    },
  },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#62d7fb'
      },
    }
  ]
};
