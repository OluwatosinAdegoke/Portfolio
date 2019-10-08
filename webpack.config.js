const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: ['@babel/polyfill/noConflict', './src/resources/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
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
        new HTMLWebpackPlugin({
            filename:   'videos.html',
            template:   './src/videos.html',
            inject: false
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
            }
        ]
    }
};