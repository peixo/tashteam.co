const path = require("path")
const outputPath = 'www/'

const  MiniCssExtractPlugin  =  require ( "mini-css-extract-plugin" ) ;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');




module.exports = {
    entry: {
        main: ['/assets/js/main.js', '/assets/css/main.scss'],
    },

    module: {
      rules: 
          [
          {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          }
          },
          {
          test: /\.(sa|sc|c)ss$/,
          use: [
              MiniCssExtractPlugin.loader, 
              {
              loader: "css-loader",
              },
              {
              loader: 'postcss-loader',
              options: {
                  postcssOptions: {
                      plugins: [
                          [
                          "autoprefixer",
                          {},
                          ],
                      ],
                  }
              }
              },
              'sass-loader'
          ],           
          },

          {
          test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/i,
          use: [
              'file-loader'
          ]
          },

      ],
      
  },

  externals: {
      jquery: 'jQuery'
  },






};

