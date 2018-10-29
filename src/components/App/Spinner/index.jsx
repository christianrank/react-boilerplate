import React from 'react'

import {
  Spin,
} from 'antd'

import './styles.less'

class Spinner extends React.PureComponent {
  render() {
    return (
      <div className="centeredSpinner">
        <Spin size="large" />
      </div>
    )
  }
}

export default Spinner
