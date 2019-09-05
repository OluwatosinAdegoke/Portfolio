const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: ['@babel/polyfill/noConflict', './src/resources/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    target: 'node',
    plugins: [
        new HTMLWebpackPlugin({
            filename:   'index.html',
            template:   './src/index.html' 
        }),
        new HTMLWebpackPlugin({
            filename:   'words.html',
            template:   './src/words.html',
            inject: false
        }),
        new miniCSSExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ miniCSSExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ]
            }
        ]
    }
};