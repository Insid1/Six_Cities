/* eslint-disable strict */
/* eslint-disable no-undef */
const path = require(`path`);

module.exports = {
  target: `web`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`),
  },
  devServer: {
    hot: false,
    static: path.resolve(__dirname, `public`),
    port: 1337,
    historyApiFallback: true,
    open: {
      app: {
        name: `firefox`,
      },
    },
  },
  mode: `development`,
  devtool: `source-map`,
  resolve: {
    extensions: [`.js`, `.jsx`],
    alias: {
      '@src': path.resolve(__dirname, `src/`),
      '@util': path.resolve(__dirname, `src/util/`),
      '@api': path.resolve(__dirname, `src/api/`),
      '@components': path.resolve(__dirname, `src/components/`),
      "@store": path.resolve(__dirname, `src/store/`),
      "@reducer": path.resolve(__dirname, `src/store/reducer`),
    }
  },
  module: {

    rules: [
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /. (png|jpe? g|gif)$/i,
        use: [`file-loader`],
      },
    ]
  }
};
