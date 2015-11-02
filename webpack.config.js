module.exports = {
    entry: "./index",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};
