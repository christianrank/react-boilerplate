import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'

import Store from './plugins/store'

import App from './components/App'
import Routes from './routes'

// Render
ReactDOM.render(
  <Provider store={Store}>
    <App>
      <Helmet
        defaultTitle="PROJECT_NAME"
        titleTemplate="%s | PROJECT_NAME"
      />
      <Routes />
    </App>
  </Provider>,
  document.getElementById('app'),
)
