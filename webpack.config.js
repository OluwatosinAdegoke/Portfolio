const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/resources/js/index.js']
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
            filename: isProd ?  "[name]-[contenthash].css" : "[name].css"
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
                use: {
                    loader: 'css-loader'
                }
            }
        ]
    }
};