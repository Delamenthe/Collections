const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/App.jsx',
        vendor: ['react','react-dom','whatwg-fetch'],
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'static'),
        filename: 'app.bundle.js',
        chunkFilename: 'vendor.bundle.js',
    },
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





