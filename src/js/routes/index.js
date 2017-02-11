import React                                            from 'react';
import { Router, Route, IndexRoute, browserHistory }    from 'react-router';

// Components
import App          from 'components/App';
import Home         from 'components/Page/Home';
import Error404     from 'components/Page/Error/404';
import Sample       from 'components/Page/Sample';


// Routing
class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/sample" component={Sample} />
                    <IndexRoute component={Home} />
                    <Route path="*" component={Error404} />
                </Route>
            </Router>
        );
    }
}

export default Routes;
