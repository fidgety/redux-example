import React from 'react';
import { connect } from 'react-redux';
import { loadRotas } from '../actions/rotas';
import { createRota } from '../actions/createRota';
import RotaList from '../components/rotaList';

// require('./style.scss');
require('react-dom');

const selectState = (state) => {
    return {
        drafts: state.rotas.draft,
        published: state.rotas.published
    };
};

export default connect(selectState)(React.createClass({
    componentWillMount() {
        this.props.dispatch(loadRotas());
    },
    render() {
        return <RotaList
            published={this.props.published}
            drafts={this.props.drafts}
            onCreateRota={(name, startDate) => {
                this.props.dispatch(createRota(name, startDate));
            }}
        />;
    }
}));
