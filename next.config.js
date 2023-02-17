'use strict';

const path = require('path');
const withMarkdoc = require('@markdoc/next.js');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withMarkdoc({ schemaPath: './src/markdoc' })({
    pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
    sassOptions: {
      includePaths: [path.join(__dirname, 'node_modules')],
    },
    webpack(config) {
      config.resolve.alias['~'] = path.join(__dirname, 'src');
      return config;
    },
  })
);
