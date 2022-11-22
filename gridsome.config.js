// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config()

module.exports = {
  siteName: 'Gridsome Starter ButterCMS',
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png',
  },
  chainWebpack: (config) => {
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/EnvironmentPlugin'), [
        'GRIDSOME_APP_BUTTER_CMS_API_KEY',
        'GRIDSOME_APP_BUTTER_CMS_PREVIEW',
      ])
  },
  plugins: [
    {
      use: 'gridsome-plugin-seo',
    },
  ],
}
