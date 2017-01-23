import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rotas from '../reducers/rotas';
import rota from '../reducers/rota';
import rotaComplex from '../reducers/rotaComplex';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
    rotas,
    rota,
    rotaComplex,
    routing: routerReducer
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
