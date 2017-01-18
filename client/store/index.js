import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import list from '../reducers/list';
import createLogger from 'redux-logger';

const reducers = combineReducers({
    list
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
