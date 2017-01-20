import moment from 'moment';

export default function(state, action) {
    if (!state) {
        return {
            shifts: [],
            teams: [],
            name: '',
            start: undefined,
            end: undefined
        };
    }

    if (action.type === 'get-rota-success') {
        const start = moment(action.rota.startDate);
        return {
            shifts: action.rota._embedded['http://api.brighthr.com/rels/shift'],
            teams: action.rota._embedded['http://api.brighthr.com/rels/team'],
            name: action.rota.name,
            start,
            end: start.add(7, 'days')
        };
    }

    return state;
}
