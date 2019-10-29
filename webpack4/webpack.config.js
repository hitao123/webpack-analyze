const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('webpack-test-loader');
const WebpackTestPlugin = require('webpack-test-plugin');
const ENV_CSS_LOADER = process.env.NODE_ENV === 'production'
    ? MiniCssExtractPlugin.loader : 'style-loader';

const PORT = 5000

module.exports = {
    mode: 'production',
    entry: {
        main: [
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash:8].js',
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
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-react',
                                ['@babel/preset-env', {
                                    useBuiltIns: 'entry'
                                }]
                            ]
                        }
                    },
                    {
                        loader: 'webpack-test-loader',
                        options: {
                            test: true
                        }
                    },
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
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    minChunks: 1,
                    name: 'vendor',
                    priority: -10
                },
                default: {
                    test: /[\\/]src[\\/]js[\\/]/,
                    minChunks: 2,
                    name: 'main',
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //       NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        //     }
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './index.ejs'),
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[chunkhash:8].css',
            chunkFilename: 'css/[chunkhash:8].css'
        }),
        new WebpackTestPlugin({
            banner: `
@license 
(c) 2019-${new Date().getFullYear()} Billow

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
            `
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        port: PORT
    }
};
