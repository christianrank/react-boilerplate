import React from 'react'
import CSSModules from 'react-css-modules'

import styles from './styles.less'


class Index extends React.Component {
  render() {
    return (
      <div styleName="Index">
        Hello World
      </div>
    )
  }
}

export default CSSModules(Index, styles, { allowMultiple: true })
