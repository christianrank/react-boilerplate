import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

window.onerror = (message) => {
  if (message.indexOf('SyntaxError') !== -1) {
    window.location.reload(true)
  }
}

// Render
ReactDOM.render(<App />, document.getElementById('app'))
