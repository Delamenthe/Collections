const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/App.jsx',
        vendor: ['react','react-dom','whatwg-fetch', 'react-router'],
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'static'),
        filename: 'app.bundle.js',
        chunkFilename: "vendor.bundle.js"
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
    },
    devServer: {
        port: 8000,
        static: path.join(__dirname,'static'),
        proxy: {
            'api/*': {
                target: 'http://localhost:3000',
            },
        },
    }
};





