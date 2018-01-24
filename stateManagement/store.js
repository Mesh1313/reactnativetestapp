import userReducer from './reducer';
import dataReducer from './dataReducer';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

export default function configureStore() {
    let store = createStore(
        combineReducers({
            userReducer,
            dataReducer
        }),
        applyMiddleware(thunk)
    );

    return store
}