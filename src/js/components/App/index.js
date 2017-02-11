import React        from 'react';
import CSSModules   from 'react-css-modules';

import Header       from 'components/Header';
import Footer       from 'components/Footer';

import styles       from './styles.less';


// App
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header />
                <main styleName="Main">
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}

export default CSSModules(App, styles, { allowMultiple: true });
