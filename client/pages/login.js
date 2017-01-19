import React from 'react';

import { connect } from 'react-redux';

import login from '../actions/user';

import Login from '../components/login';

// require('./style.scss');
require('react-dom');

const selectState = (state) => {
    return {
    };
};

export default connect(selectState)(React.createClass({
    render() {
        return <Login
            onSubmit={(username, password) => {
                this.props.dispatch(login(username, password));
            }}
        />;
    }
}));
