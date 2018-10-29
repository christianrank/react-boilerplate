import React from 'react'
import Helmet from 'react-helmet'

import styles from './styles.less'

class Sample extends React.Component {
  render() {
    return (
      <div className={styles.sample}>
        <Helmet title="Sample" />

        Sample page
      </div>
    )
  }
}

export default Sample
