const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: ['./src/App.jsx'],
        vendor: ['react','react-dom','whatwg-fetch', 'react-router'],
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'static'),
        filename: 'app.bundle.js',
        chunkFilename: 'vendor.bundle.js',
    },
    plugins: [],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                }
            }
        }
    },
    devServer: {
        static: path.resolve(__dirname,'static'),
        hot: true,
        port: 8000,
        proxy: {
            "/api": {
                target: 'http://localhost:3000',
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/react', '@babel/env']
                        }
                    }
                ]
            }
        ]
    }

};





