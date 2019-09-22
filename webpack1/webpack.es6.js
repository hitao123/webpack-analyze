const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/es6/index.js',
    },
    output: {
        path: path.join(__dirname, './src/es6/dist'),
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: './'
    },
    module: {
        // 加载器模块配置
        loaders: [
            { 
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] } 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            inject: true
        })
    ]
};