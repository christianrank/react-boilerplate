import { compose, createStore, applyMiddleware } from 'redux'
import persistState, { mergePersistedState } from 'redux-localstorage'
import adapter from 'redux-localstorage/lib/adapters/localStorage'
import filter from 'redux-localstorage-filter'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import objectFill from 'object-fill'

import rootReducer from 'reducers'


const logger = createLogger()

const reducer = compose(
  mergePersistedState((initialState, persistedState) => {
    const newState = objectFill(initialState, persistedState)
    return newState
  }),
)(rootReducer)

const storage = compose(
  filter([
    // 'account',
  ]),
)(adapter(window.localStorage))

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    logger,
  ),
  persistState(storage, 'redux'),
)

export default createStore(
  reducer,
  enhancer,
)
