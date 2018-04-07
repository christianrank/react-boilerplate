import React from 'react'
import Helmet from 'react-helmet'
import CSSModules from 'react-css-modules'

import styles from './styles.less'


class Sample extends React.Component {
  render() {
    return (
      <div styleName="Sample">
        <Helmet title="Sample" />
        Sample page
      </div>
    )
  }
}

export default CSSModules(Sample, styles, { allowMultiple: true })
