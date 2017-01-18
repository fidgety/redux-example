import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducerA from '../reducers/reducerA';
import createLogger from 'redux-logger';

const reducers = combineReducers({
    reducerA
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
