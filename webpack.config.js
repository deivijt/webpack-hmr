// importamos la dependencia webpack
// Puedes revisar en el archivo package.json el listado completo de dependencias.
const webpack = require('webpack')
const path = require('path')

// La configuración es simplemente un objeto.
module.exports = {
  // Opciones que afectan a la resolución de los modulos
  resolve: {
    root: path.resolve('src'),
    modulesDirectories: ['node_modules'],
    // Le especificamos las extensiones de los archivos y entonces en el require() no tenemos que especificarla.
    extensions: ['', '.js', '.jsx', '.scss']
  },
  // El punto de entrada de nuestra aplicación
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/app.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Nombre con el que generará el bundle(empaquetado final)
    filename: 'app.js',
    // Especifica la dirección URL pública de los archivos de salida.
    // Como webpack-dev-server no generá un bundle físico sino en memoria
    // Esto nos sirve para referenciar el archivo final desde el html
    // ejm: <script src='dist/app.js'></script>
    publicPath: '/dist/'
  },
  // Servidor de desarrollo (Ojo, solo para desarollo)
  devServer: {
    // Desde donde cargará lo que va a servir
    contentBase: path.resolve('./dist'),
    // Habilita la caracteristica de html5
    historyApiFallback: true,
    // Importante para que el Hot module replacement funcione
    hot: true,
    // Activa el modo inline de webpack-dev-server
    inline: true
  },
  module: {
    // Se encarga de procesar los archivos .jsx de reactjs
    // incluye el loader babel, que nos permite código ES2015 y JSX
    loaders: [
      {
        // expresión regular que buscará los archivos que terminan con extensión .jsx
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          // Mejora el performance del proceso webpack
          cacheDirectory: true,
          // Es necesario indicar que presets queremos utilizar
          // también lo puedes indicar creando el archivo .babelrc
          presets: ['es2015', 'react', 'react-hmre']
        },
        // Para general el bundle solo rastreará desde el directorio que le indiquemos
        // Es bueno, ya que mejora el rendimiento, y por ende menos se demora en completar el proceso bundle
        include: path.join(__dirname, 'src')
      },
      {
        // Loader para procesar archivos sass
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  // Los plugins se pueden encadenar separándolos por comma
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
}
