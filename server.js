// Creamos un servidor en express
const express = require('express')
const app = express()
const path = require('path')
const webpack = require('webpack')
// requerimos la misma configuración de webpack
const config = require('./webpack.config')
const compiler = webpack(config)

// para cargar los estáticos, por ejemplo el index.html
app.use(express.static(path.resolve('./dist')))

// aquí es donde utilizamos a webpack como middleware
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true
}))

// hablitamos el hot-middleware
app.use(require('webpack-hot-middleware')(compiler))

app.listen(8080, () => console.log('localhost:8080'))
