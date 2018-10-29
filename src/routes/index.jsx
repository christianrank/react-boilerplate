import React from 'react'
import Loadable from 'react-loadable'

import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'

import { history } from 'plugins/history'

import Spinner from 'components/App/Spinner'

// Sections
import HomeSection from 'components/Home'

// Section Home
const HomeIndex = Loadable({ loader: () => import('components/Home/Page/Index'), loading: () => <Spinner /> })
const HomeSample = Loadable({ loader: () => import('components/Home/Page/Sample'), loading: () => <Spinner /> })

// Error pages
const Error404 = Loadable({ loader: () => import('components/App/Error/404'), loading: () => <Spinner /> })

// Routes
class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/">
          <HomeSection>
            <Switch>
              <Route exact path="/" component={HomeIndex} />
              <Route exact path="/sample" component={HomeSample} />
              <Route component={Error404} />
            </Switch>
          </HomeSection>
        </Route>
      </Router>
    )
  }
}

export default Routes
