module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "./build/angular_app_bundle.js"
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
                }
            }
        ]
    }
}