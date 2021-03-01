import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from "redux-thunk"

import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import appReducer from './reducers/index'

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);
const middlewares = [
    middleware,
    thunk
]

const store = createStore(
    appReducer,
    applyMiddleware(...middlewares),
);

export default store