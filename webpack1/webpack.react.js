var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            './src/react/src/index.js'
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, './src/react/dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].chunk.[chunkhash:8].js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'react'] } 
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=20000&name=[name].[ext]'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[chunkhash:8].js')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
