const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { test: /\.css$/, use: 'css-loader' },
            { enforce: "pre", test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};


// module.exports = {




//     externals: {
//         "react": "React",
//         "react-dom": "ReactDOM"
//     }
// };