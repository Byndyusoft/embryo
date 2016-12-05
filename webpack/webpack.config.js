const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, '../src', 'index.js')
    },

    output: {
        path: path.join(__dirname, '../build'),
        filename: 'js/[name].[hash].js',
        publicPath: '/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=img/[name].[hash].[ext]'
        }]
    },

    postcss() {
        return [autoprefixer];
    },

    resolve: {
        extensions: ['', '.jsx', '.js', '.json'],
        modulesDirectories: ['node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, '../src', 'index.html') })
    ]
};
