const path = require('path')

module.exports = {
    entry: {
        resources: './src/resources/js/index.js',
        vendors: './src/vendors/js/jquery.waypoints.min.js'
    },
    output: {
        path: path.resolve(__dirname, '/dist/js'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    target: 'node'
}