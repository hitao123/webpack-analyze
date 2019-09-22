const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV_CSS_LOADER = process.env.NODE_ENV === 'production'
    ? MiniCssExtractPlugin.loader : 'style-loader';

const PORT = 5000

module.exports = {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    entry: {
        main: [
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/preset-env', {
                                useBuiltIns: 'entry'
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.(gif|jpg|png|html)\??.*$/,
                use: {
                    loader: 'url-loader?limit=1&name=[path][name].[ext]'
                }
            },
            {
                test: /\.(gif|svg|eot|ttf|svg|woff2?)$/,
                use: 'file-loader?name=images/[name].[hash].[ext]'
            },
            {
                test: /\.less$/,
                use: [
                    ENV_CSS_LOADER,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    ENV_CSS_LOADER,
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            src: path.join(__dirname, 'src')
        }
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            showErrors: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[chunkhash:8].css',
            chunkFilename: 'css/[chunkhash:8].css'
        })
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     historyApiFallback: true,
    //     port: PORT
    // }
};
