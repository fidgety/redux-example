import React from 'react';
import { connect } from 'react-redux';
import { loadRota } from '../actions/rota';
import ShiftList from '../components/shiftList';
// require('./style.scss');
require('react-dom');

const selectState = (state) => {
    return {
        shifts: state.rota.shifts
    };
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        this.props.dispatch(loadRota(this.props.params.id));
    },
    render() {
        return <div>
            <ShiftList
                shifts={this.props.shifts}
                addShift={() => alert('delete')}
            />
        </div>;
    }
}));
