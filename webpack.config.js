const path = require('path');

module.exports = {
  entry: './index.jsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.scss$/, // Match .css files
            use: [
              'style-loader', // Inject styles into the DOM
              {
                loader: 'css-loader', // Handle CSS modules
                options: {
                  modules: {
                    localIdentName: '[name]__[local]--[hash:base64:5]', // CSS module class name format
                  },
                },
              },
              {
                loader: 'postcss-loader', // Run postcss actions
                options: {
                  postcssOptions: {
                    // plugins: [
                    //   require('./postCssPlugin.js')
                    // ]
                  }
                },
              }
            ],
          },
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JSX
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx files
  },
};