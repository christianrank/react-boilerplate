import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'

import 'normalize.css/normalize.css'

import Routes from './routes/'

import Store from './plugins/store'

// Render
ReactDOM.render(
  <Provider store={Store}>
    <div>
      <Helmet
        defaultTitle="PROJECT_NAME"
        titleTemplate="%s | PROJECT_NAME"
      />
      <Routes />
    </div>
  </Provider>,
  document.getElementById('app'),
)
