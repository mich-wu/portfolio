/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Basic`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `a4e9727ae7987aecb4885b73d904d1`,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        pageSize: 500,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: 'hc--[folder]--[local]',
            namedExport: false,
            exportLocalsConvention: 'asIs',
          },
        },
        // Override the file regex for Sass
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
        sassOptions: {
          includePaths: [`${__dirname}/src/assets/scss`],
        },
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
  ],
};
