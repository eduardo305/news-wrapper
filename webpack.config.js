const path = require('path');
const webpack = require('webpack');

const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        path: '/dist',
        filename: 'bundle.js',
        publicPath: '/dist'
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