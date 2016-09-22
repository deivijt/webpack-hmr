// Only for development
module.hot.accept()
require('./styles.scss')

import React from 'react'
import { render } from 'react-dom'

function App () {
  return <div>
          <h1>PASO 2: WEBPACK MIDDLEWARE - HOT MODULE REPLACEMENT</h1>
          <h2>Webpack is Awesome!</h2>
          <p>Abre el archivo src/app.jsx y haz un cambio, y verás en acción a webpack y HMR</p>
        </div>
}

render(<App />, document.querySelector('.container'))
