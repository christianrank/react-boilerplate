import React            from 'react';
import CSSModules       from 'react-css-modules';

import styles           from './styles.scss';


class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <footer styleName="Footer">
                Footer
            </footer>
        );
    }
}

export default CSSModules(Footer, styles, { allowMultiple: true });
