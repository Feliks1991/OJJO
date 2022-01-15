const path = require('path');

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  // entry: './src/index.js',
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 3000,
    watchContentBase: true,
  },
  sourcemaps: 'inline',
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
};
