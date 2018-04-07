import React from 'react'
import Helmet from 'react-helmet'


class Error404 extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Error 404" />
        <h1>Error 404</h1>
        <p>Not Found. ¯\_(ツ)_/¯</p>
      </div>
    )
  }
}

export default Error404
