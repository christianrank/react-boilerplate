import React from 'react'

import Navigation from './Navigation'

import styles from './styles.less'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Navigation />
      </header>
    )
  }
}

export default Header
