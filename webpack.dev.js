const path = require("path")
const outputPath = 'www/'

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const  MiniCssExtractPlugin  =  require ( "mini-css-extract-plugin" ) ;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'development',
    watch: true,

    output: {
      path: path.resolve(__dirname, outputPath),
      filename: '[name].[hash].js',
    },


    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),

        new CleanWebpackPlugin({
            // cleanOnceBeforeBuildPatterns: ['**/*'],
        }),

        new HtmlWebpackPlugin({
            title: 'tashteam.co',
            template: './src/index.html'
        }),
    ],

});

