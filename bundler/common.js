// Common project configuration

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

// Webpack configuration

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        clean: true,
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js', 
        path: path.resolve(__dirname, '../build'),
    },
    devtool: 'source-map',
    // Plugins
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../static')
            }]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname, '../favicon.ico'),
            minify: true,
        }),
        new MiniCSSExtractPlugin()
    ],
    // Modules
    module: {
        rules: [{
                // HTML
                test: /\.(html|htm)$/,
                use: ['html-loader']
            },{
                // JS
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                // CSS
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },{
                // Images
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext]'
                }
            },{
                // Fonts
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext]'
                }
            },{
                // Shaders
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader']
            }
        ]
    }
}

