import express from "express"
const server = express()
import path from "path"

const webpack = require("webpack")
const isProd = process.env.NODE_ENV === "development";
if (!isProd) {
  const config = require("../../config/webpack.dev.js")
  const compiler = webpack(config)
  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  )
  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  )
  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  console.log("Middleware enabled")
}

// const staticMiddleware = express.static("dist")
// server.use(staticMiddleware)

const expressStaticGzip = require("express-static-gzip");
server.use(expressStaticGzip("dist", {
  enableBrotli: true
  })
);

const PORT = 8080
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
