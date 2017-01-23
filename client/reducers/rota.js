import moment from 'moment';

const parseParticipant = participant => ({
    id: participant.id,
    name: participant.name,
    icon: participant._links.icon.href
});

const parseShifts = shifts => {
    return shifts.map(shift => ({
        id: shift._links.edit.href,
        participant: parseParticipant(shift._embedded['http://api.brighthr.com/rels/participant']),
        start: moment(shift.start),
        end: moment(shift.end)
    }));
};

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
            shifts: parseShifts(action.rota._embedded['http://api.brighthr.com/rels/shift']),
            teams: action.rota._embedded['http://api.brighthr.com/rels/team'],
            name: action.rota.name,
            start,
            end: start.add(7, 'days')
        };
    }

    return state;
}
