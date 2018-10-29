import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from 'components/Home/Header'

import styles from './styles.less'

class Home extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.home}>
        <Helmet>
          <body className="home" />
        </Helmet>
        <Header />
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Home
