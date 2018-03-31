import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './styles.scss'

import Navigation from './Navigation'


class Header extends React.Component {
  render() {
    return (
      <header styleName="Header">
        <Navigation />
      </header>
    )
  }
}

export default CSSModules(Header, styles, { allowMultiple: true })
