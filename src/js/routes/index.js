import React                        from 'react';
import { Route, BrowserRouter }     from 'react-router-dom';

// Components
import App                          from 'components/App';


// Routes
class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={App} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
