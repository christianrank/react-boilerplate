import React from 'react'
import CSSModules from 'react-css-modules'
import { withRouter } from 'react-router'

import { Menu } from 'antd'

import styles from './styles.less'


class Navigation extends React.Component {
  render() {
    const {
      history,
    } = this.props

    return (
      <Menu
        mode="horizontal"
        selectedKeys={[history.location.pathname]}
        onClick={({ item, key, keyPath }) => { this.navigateTo(key) }}
      >
        <Menu.Item key="/">
          Home
        </Menu.Item>
        <Menu.Item key="/sample">
          Sample
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(CSSModules(Navigation, styles, { allowMultiple: true }))
