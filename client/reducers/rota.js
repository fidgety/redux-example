import moment from 'moment';

const mapParticipant = participant => ({
    id: participant.id,
    name: participant.name,
    icon: `${participant._links.icon.href}?height=25&width=25&mode=crop`
});

const mapShift = shift => ({
    id: shift._links.edit.href,
    participant: mapParticipant(shift._embedded['http://api.brighthr.com/rels/participant']),
    start: moment(shift.start),
    end: moment(shift.end)
});

export default function(state, action) {
    if (!state) {
        return {
            shifts: [],
            name: '',
            start: undefined,
            end: undefined
        };
    }

    if (action.type === 'get-rota-success') {
        const start = moment(action.rota.startDate);
        return {
            shifts: action.rota._embedded['http://api.brighthr.com/rels/shift'].map(mapShift),
            name: action.rota.name,
            start,
            end: start.add(7, 'days')
        };
    }

    return state;
}
