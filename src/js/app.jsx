import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'

import App from './components/App'
import Routes from './routes'

// Render
ReactDOM.render(
  <App>
    <Helmet
      defaultTitle="PROJECT_NAME"
      titleTemplate="%s | PROJECT_NAME"
    />
    <Routes />
  </App>,
  document.getElementById('app'),
)
