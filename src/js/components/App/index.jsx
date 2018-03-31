import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from 'components/Page/Home'
import Error404 from 'components/Page/Error/404'
import Sample from 'components/Page/Sample'

import styles from './styles.scss'


// App
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main styleName="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sample" component={Sample} />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}


export default CSSModules(App, styles, { allowMultiple: true })
