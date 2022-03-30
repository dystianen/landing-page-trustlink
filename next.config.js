const withAntdLess = require('next-plugin-antd-less');
const antdVariables = require('./styles/antd_variables');
const { i18n } = require('./next-i18next.config')
module.exports = withAntdLess({
  i18n: {
    locales: ['en', 'id',],
    defaultLocale: 'en',
  },

  modifyVars: antdVariables,

  lessVarsFilePath: './styles/variables.less',

  lessVarsFilePathAppendToEndOfContent: false,

  cssLoaderOptions: {},

  images: {
    domains: ['www.images.unsplash.com','etapasbar-file.app.bangun-kreatif.com'],
  },

  webpack(config) {
    return config;
  },

  reactStrictMode: true
});
