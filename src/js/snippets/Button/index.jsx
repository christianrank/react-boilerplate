import React from 'react'
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import styles from './styles.scss'


class Button extends React.Component {
  render() {
    const styleName = 'Button'

    if (this.props.to) {
      return (
        <NavLink
          className={this.props.className}
          styleName={`${styleName} ${this.props.noDefaultStyle ? '' : 'DefaultStyle'}`}
          to={this.props.to}
          activeClassName={this.props.activeClassName}
                    // exact was previously called "onlyActiveOnIndex"
          exact={this.props.exact}
        >
          {this.props.children}
        </NavLink>
      )
    } else if (this.props.href) {
      return (
        <a
          className={this.props.className}
          styleName={`${styleName} ${this.props.noDefaultStyle ? '' : 'DefaultStyle'}`}
          href={this.props.href}
          target={this.props.target}
        >
          {this.props.children}
        </a>
      )
    }

    // if it's no link
    return (
      <input
        className={this.props.className}
        styleName={`${styleName} ${this.props.noDefaultStyle ? '' : 'DefaultStyle'}`}
        type={this.props.type || 'button'}
        onClick={this.props.onClick}
        value={this.props.value || this.props.children}
      />
    )
  }
}

export default CSSModules(Button, styles, { allowMultiple: true })
