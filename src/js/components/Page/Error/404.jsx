import React    from 'react';
import Helmet   from 'react-helmet';


class error404 extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Helmet title="Error 404" />
                <h1>Error 404</h1>
                <p>Not Found. ¯\_(ツ)_/¯</p>
            </div>
        );
    }
}

export default error404;
