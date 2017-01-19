import store from './store';

import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

let history = createBrowserHistory();

import Login from './pages/login';

// require('./reset.scss');
// require('./style.scss');

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/login" component={Login} />
        </Router>
    </Provider>
), document.getElementById('app'));
