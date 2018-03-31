import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './styles.less'


class Home extends React.Component {
  render() {
    return (
      <div styleName="Home">
        Hello World
      </div>
    )
  }
}

export default CSSModules(Home, styles, { allowMultiple: true })
