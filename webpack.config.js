const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './index.jsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
    library: {
      type: 'umd'
    }
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.s?css$/, // Match .css files
            use: [
              {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: 'css-loader',
                // options: {
                //   modules: {
                //     localIdentName: '[name]__[local]--[hash:base64:5]', // CSS module class name format
                //   },
                // },
            },
            {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      require('postcss-prefix-selector')({
                        prefix: '.my-prefix', // Replace with your desired prefix,
                        exclude: ['var'],
                      }),
                      require('postcss-selector-replace')({
                        before: [":root"],
                        after: [""]
                      }),
                    ]
                  }
                }
            },
            {
                loader: 'sass-loader'
            },
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
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx files
  },
  target: 'webworker',
};