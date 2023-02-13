'use strict';

const path = require('path');
const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc({ schemaPath: './src/markdoc' })({
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    return config;
  },
});
