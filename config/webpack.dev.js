const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
// const cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'];

module.exports = {
  entry: {
    // vendor: [
    //   "gsap"
    // ],
    main: [
           "webpack-hot-middleware/client?reload=true",
           "./src/script/main.js"
          ],
    team: [
          "webpack-hot-middleware/client?reload=true",
          "./src/script/team.js"
          ],
    about:[
          "webpack-hot-middleware/client?reload=true",
          "./src/script/about.js"
          ]        
  },
  mode: "development",
  optimization: {
    splitChunks: {
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: "./src/pug/index.pug",
      title: "Cervini Bhatia PC",
      minify: {
                collapseWhitespace: true
            },
            hash: true,
            inject: true,
            excludeChunks: ['team', 'about']
    }),
    new HTMLWebpackPlugin({
      template: "./src/pug/news.pug",
      title: "Cervini Bhatia PC",
      filename: "news.html",
      minify: {
        collapseWhitespace: true
    },
      hash: true,
      inject: true,
      excludeChunks: ['main','team', 'about']
    }),
    new HTMLWebpackPlugin({
      template: "./src/pug/about.pug",
      title: "Team - Cervini Bhatia PC",
      filename: "about.html",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      inject: true,
      excludeChunks: ['main', 'team','news']      
    }),
    new HTMLWebpackPlugin({
      template: "./src/pug/team.pug",
      title: "Team - Cervini Bhatia PC",
      filename: "team.html",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      inject: true,
      excludeChunks: ['main', 'about', 'news']      
    }),
  ]
}
