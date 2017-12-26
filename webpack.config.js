const path = require('path');
const webpack = require('webpack');

const config = {
    // Use this way for running the tests
    // entry: path.resolve(__dirname, 'src/index.js'),

    // Use this way when generating the UMD for browser testing
    entry: path.resolve(__dirname, 'index.js'),
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname + 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
        libraryTarget: 'umd',
        library: 'NewsWrapper'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015', 'stage-0'] 
            }
        }]
    }
}

module.exports = config;