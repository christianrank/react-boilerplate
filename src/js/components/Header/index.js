import React            from 'react';
// import { injectIntl, FormattedHTMLMessage } from 'react-intl';
import CSSModules       from 'react-css-modules';

import styles           from './styles.less';

import Navigation       from './Navigation';


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <header styleName="Header">
                <Navigation />
            </header>
        );
    }
}

export default CSSModules(Header, styles, { allowMultiple: true });
