const withAntdLess = require('next-plugin-antd-less');
const antdVariables = require('./styles/antd_variables');
module.exports = withAntdLess({

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
