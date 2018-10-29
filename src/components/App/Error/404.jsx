import React from 'react'
import Helmet from 'react-helmet'

class Error404 extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet title="Error 404" />

        <h1>Error 404</h1>

        <p>Not Found. ¯\_(ツ)_/¯</p>
      </>
    )
  }
}

export default Error404
