import React        from 'react';
import { Link }     from 'react-router';
import CSSModules   from 'react-css-modules';

import styles       from './styles.less';


class Sample extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div styleName="Sample">
                Sample Page
            </div>
        );
    }
}

export default CSSModules(Sample, styles, { allowMultiple: true });
