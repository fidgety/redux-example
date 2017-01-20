import store from './store';

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

const history = syncHistoryWithStore(browserHistory, store);

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Rotas from './pages/rotas';
import Rota from './pages/rota';

// require('./reset.scss');
// require('./style.scss');

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/rotas" component={Rotas} />
            <Route path="/rotas/rota/:id" component={Rota} />
        </Router>
    </Provider>
), document.getElementById('app'));
