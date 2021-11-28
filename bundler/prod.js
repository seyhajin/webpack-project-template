const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const WebpackObfuscator = require('webpack-obfuscator')
const { merge } = require('webpack-merge')
const commonConfiguration = require('./common.js')
const path = require('path')

module.exports = merge(
    commonConfiguration, 
    {
        mode: 'production',
        devtool: false,
        plugins: [
            new WebpackObfuscator({
                rotateStringArray: true,
                reservedStrings: ['\s*']
            }),
            new CleanWebpackPlugin()
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        }
                    }
                })
            ]
        },
        module: {
            rules: [
                {
                    enforce: 'post',
                    use: {
                        loader: WebpackObfuscator.loader,
                        options: {
                            rotateStringArray: true,
                            reservedStrings: ['\s*']
                        }
                    }
                }
            ]
        }
    }
)