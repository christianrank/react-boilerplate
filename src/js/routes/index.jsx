import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from 'plugins/history'

// Sections
import HomeSection from 'components/Home'

// Section Home
import HomeIndex from 'components/Home/Page/Index'
import HomeSample from 'components/Home/Page/Sample'

// Error pages
import Error404 from 'components/App/Error/404'


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
