// Se incluye webpack-dashboard
const express = require('express')
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')
const app = express()
const compiler = webpack(config)
const dashboard = new Dashboard()

compiler.apply(new DashboardPlugin(dashboard.setData))
app.use(express.static(path.resolve('./dist')))

app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {}
}))

app.listen(8080, () => console.log('localhost:8080'))
