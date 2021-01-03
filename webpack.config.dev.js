const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({filename: "main.css"}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html",
            inject: true,
            minify: true,
        }),
    ],
    entry: "./src/index.js",
    output: {
        publicPath: "",
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use : [
                    'file-loader'
                ]
            }
        ],
    },
    watch: true,
    watchOptions: {
        ignored: ["node_modules"]
    },
    optimization: {
        minimize: true
    },
}