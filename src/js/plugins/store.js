import { compose, createStore, applyMiddleware }        from 'redux';
import persistState, { mergePersistedState }            from 'redux-localstorage';
import adapter                                          from 'redux-localstorage/lib/adapters/localStorage';
import filter                                           from 'redux-localstorage-filter';
import thunkMiddleware                                  from 'redux-thunk';
import createLogger                                     from 'redux-logger';

import objectFill                                       from 'plugins/object-fill';

import rootReducer                                      from 'reducers';


const logger = createLogger();

const reducer = compose(
    mergePersistedState((initialState, persistedState) => {
        // console.log('initialState', initialState);
        // console.log('persistedState', persistedState);
        const newState = objectFill(initialState, persistedState);
        // console.log('newState', newState);
        return newState;
    }),
)(rootReducer);

const storage = compose(
    filter([
        'account',
    ])
)(adapter(window.localStorage));

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        logger
    ),
    persistState(storage, 'redux')
);

export default createStore(
    rootReducer,
    reducer,
    enhancer,
);
