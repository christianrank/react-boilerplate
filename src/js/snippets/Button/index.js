import React        from 'react';
import { Link }     from 'react-router';
import CSSModules   from 'react-css-modules';

import styles       from './styles.scss';


class Button extends React.Component {

    render() {
        const styleName = 'Button';

        if (this.props.to) {
            return (
                <Link
                    className={this.props.className}
                    styleName={styleName}
                    to={this.props.to}
                >
                    {this.props.children}
                </Link>
            );
        }

        // if it's no link
        return (
            <input
                className={this.props.className}
                styleName={styleName}
                type={this.props.type || 'button'}
                onClick={this.props.onClick}
                value={this.props.value || this.props.children}
            />
        );
    }

}

export default CSSModules(Button, styles, { allowMultiple: true });
