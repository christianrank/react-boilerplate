import React from 'react'
import CSSModules from 'react-css-modules'
import { withRouter } from 'react-router-dom'

import { Button } from 'antd'

import styles from './styles.less'


class Navigation extends React.PureComponent {
  navigateTo = (path) => {
    this.props.history.push(path)
  }

  render() {
    return (
      <nav styleName="Navigation">
        <Button ghost className={styles.Button} onClick={() => { this.navigateTo('/') }}>Home</Button>
        <Button ghost className={styles.Button} onClick={() => { this.navigateTo('/sample') }}>Sample</Button>
      </nav>
    )
  }
}

export default withRouter(CSSModules(Navigation, styles, { allowMultiple: true }))
