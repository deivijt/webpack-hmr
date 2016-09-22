// Only for development
module.hot.accept()
require('./styles.scss')

import React from 'react'
import { render } from 'react-dom'

function App () {
  return <div>
          <h1>WEBPACK - HOT MODULE REPLACEMENT</h1>
          <h2>Webpack is Awesome!</h2>
        </div>
}

render(<App />, document.querySelector('.container'))
