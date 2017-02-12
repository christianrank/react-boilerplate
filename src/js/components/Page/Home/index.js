import React        from 'react';
// import { Link }     from 'react-router';
import CSSModules   from 'react-css-modules';

import styles       from './styles.scss';


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div styleName="Home">
                Hello World
            </div>
        );
    }
}

export default CSSModules(Home, styles, { allowMultiple: true });
