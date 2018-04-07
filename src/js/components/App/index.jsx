import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import '!style-loader!css-loader!less-loader?javascriptEnabled=true!./antd.less'; // eslint-disable-line
import styles from './styles.less'


// App
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CSSModules(App, styles, { allowMultiple: true })
