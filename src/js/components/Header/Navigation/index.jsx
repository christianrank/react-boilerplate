import React from 'react'
import CSSModules from 'react-css-modules'

import Button from 'snippets/Button'

import styles from './styles.scss'


class Navigation extends React.Component {
  render() {
    return (
      <nav styleName="Navigation">
        <Button to="/">Home</Button>
        <Button to="/sample">Sample</Button>
      </nav>
    )
  }
}

export default CSSModules(Navigation, styles, { allowMultiple: true })
