import reducers from '../reducers';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

export default function configureStore() {
    let store = createStore(
        combineReducers(reducers),
        applyMiddleware(thunk)
    );

    return store;
}