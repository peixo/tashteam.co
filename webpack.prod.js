const path = require("path")
const outputPath = 'wordpress/wp-content/themes/tash-theme/dist/'
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const  MiniCssExtractPlugin  =  require ( "mini-css-extract-plugin" ) ;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WebpackAssetsManifest = require('webpack-assets-manifest');


module.exports = merge(common, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, outputPath),
        filename: '[name].[contenthash].js',
      },
  
      plugins: [
          new MiniCssExtractPlugin({
              filename: '[name].[contenthash].css',
              chunkFilename: '[id].[contenthash].css',
  
          }),
  
          // new WebpackAssetsManifest({
          //   }),
  
          new CleanWebpackPlugin({
              cleanOnceBeforeBuildPatterns: ['**/*'],
          }),
      ],
});

