import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Helmet } from 'react-helmet'

import Header from 'components/Home/Header'

import styles from './styles.less'


class Home extends React.Component {
  render() {
    return (
      <div styleName="Home">
        <Helmet>
          <body className="home" />
        </Helmet>
        <Header />
        <main styleName="Main">
          {this.props.children}
        </main>
      </div>
    )
  }
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CSSModules(Home, styles, { allowMultiple: true })
