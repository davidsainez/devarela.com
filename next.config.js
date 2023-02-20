'use strict';

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  productionBrowserSourceMaps: true /* include source map for debugging performance */,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    return config;
  },
});
