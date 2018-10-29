import React from 'react'
import Helmet from 'react-helmet'
import { hot } from 'react-hot-loader'

import Routes from 'routes'

import './antd.global.less'
import './styles.less'

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet
          defaultTitle="PROJECT_NAME"
          titleTemplate="%s - PROJECT_NAME"
        />

        <Routes />
      </>
    )
  }
}

export default hot(module)(App)
