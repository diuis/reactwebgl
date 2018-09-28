module.exports = {
    mode: 'development',
    entry: './src/index.tsx',

    devtool: 'source-map',
    devServer: {
        port: 8080,
        publicPath: '/',
        contentBase: './dist'
    },

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