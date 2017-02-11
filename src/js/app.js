import React                            from 'react';
import ReactDOM                         from 'react-dom';
// import { Provider }                     from 'react-redux';
import Helmet                           from 'react-helmet';
import config                           from 'config';

import                                  'normalize.css/normalize.css';

import Routes                           from './routes/';

// import Store                            from './plugins/store';

// Render
ReactDOM.render(
    /*<Provider store={Store}>*/
        /*<IntlProvider locale="en">*/
            <div>
                <Helmet
                    defaultTitle="React Boilerplate"
                    titleTemplate="%s | Boilerplate"
                />
                <Routes />
            </div>
        /*</IntlProvider>*/
    /*</Provider>*/,
    document.getElementById('app')
);
