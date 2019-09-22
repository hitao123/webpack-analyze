var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            inject: true
        })
    ]
};