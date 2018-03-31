import React        from 'react';
import Helmet       from 'react-helmet';
import CSSModules   from 'react-css-modules';

import styles       from './styles.scss';


class Sample extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div styleName="Sample">
                <Helmet title="Sample" />
                Sample Page
            </div>
        );
    }
}

export default CSSModules(Sample, styles, { allowMultiple: true });
