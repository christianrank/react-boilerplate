import React                from 'react';
import CSSModules           from 'react-css-modules';

import Button               from 'snippets/Button';

import styles               from './styles.less';


class Navigation extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <nav styleName="Navigation">
                <Button to="/">Home</Button>
                <Button to="/sample">Sample</Button>
            </nav>
        );
    }
}

export default CSSModules(Navigation, styles, { allowMultiple: true });
