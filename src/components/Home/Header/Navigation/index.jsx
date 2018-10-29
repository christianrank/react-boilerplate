import React from 'react'
import { observer } from 'mobx-react'

import { Button } from 'antd'

import RouterStore from 'stores/RouterStore'

import styles from './styles.less'

@observer
class Navigation extends React.Component {
  navigateTo = (path) => RouterStore.history.push(path)

  render() {
    return (
      <nav className={styles.navigation}>
        <Button className={styles.Button} onClick={() => { this.navigateTo('/') }}>Home</Button>
        <Button className={styles.Button} onClick={() => { this.navigateTo('/sample') }}>Sample</Button>
      </nav>
    )
  }
}

export default Navigation
