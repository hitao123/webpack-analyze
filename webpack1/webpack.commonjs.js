var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/commonjs/index.js',
    },
    output: {
        path: path.join(__dirname, './src/commonjs/dist'),
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify("production")
            },
            TWO: '1 + 1',
            SOME_BOOLEAN: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            inject: true
        })
    ]
};