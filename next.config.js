'use strict';

const path = require('path');
const glob = require('glob');
const withMarkdoc = require('@markdoc/next.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withMarkdoc({ schemaPath: './src/markdoc' })({
    productionBrowserSourceMaps: true /* include source map for debugging performance */,
    pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
    sassOptions: {
      includePaths: [path.join(__dirname, 'node_modules')],
    },
    webpack(config) {
      config.resolve.alias['~'] = path.join(__dirname, 'src');
      // tree-shake scss
      config.module.rules.push({
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          // Extract the css to file
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            /*
            options: {
              // Enable CSS modules
              modules: {
                // Specify format of class names
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
            */
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                indent: 'postcss',
                syntax: 'postcss-scss',
                plugins: () => [
                  // Purge unused CSS from .js and .jsx files
                  require('@fullhuman/postcss-purgecss')({
                    // You'll want to modify this glob if you're using TypeScript
                    content: glob.sync('src/**/*.{js,jsx}', { nodir: true }),
                    extractors: [
                      {
                        extractor: class {
                          static extract(content) {
                            // See a note on this in the #addenum section below
                            return content.match(/\w+/g) || [];
                          }
                        },
                        extensions: ['js', 'jsx'],
                      },
                    ],
                  }),
                  require('cssnano'),
                ],
              },
            },
          },
          // Compile SASS before importing with css-loader
          require.resolve('sass-loader'),
        ],
      });
      // WARNING assuming plugins is undefined here
      config.plugins.push(
        // Extract all css into a separate file
        new MiniCssExtractPlugin({
          filename:
            'static/css/[name].[contenthash].css' /* https://stackoverflow.com/questions/69097986/ */,
        })
      );
      // Important: return the modified config
      return config;
    },
  })
);
