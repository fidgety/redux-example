import React from 'react';
import { connect } from 'react-redux';
import { loadRota } from '../actions/rota';

// require('./style.scss');
require('react-dom');

const selectState = (state) => {
    return {
		...state.rota
    };
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        this.props.dispatch(loadRota(this.props.params.id));
    },
    render() {
        return <div>{this.props.name}</div>;
    }
}));
