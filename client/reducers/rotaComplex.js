import moment from 'moment';

const mapParticipant = participant => ({
    id: participant.id,
    name: participant.name,
    icon: participant._links.icon.href
});

const mapShift = shift => ({
    id: shift._links.edit.href,
    participant: mapParticipant(shift._embedded['http://api.brighthr.com/rels/participant']),
    start: moment(shift.start),
    end: moment(shift.end)
});

const buildDays = (startDate, duration) => {
    var days = [];
    for (var i = 0; i < duration; i++) {
        days.push({
            date: moment(startDate).add(i, 'days')
        });
    }
    return days;
};

export default function(state, action) {
    if (!state) {
        return {
            days: [],
            shifts: [],
            name: '',
            start: undefined,
            end: undefined
        };
    }

    if (action.type === 'get-rota-success') {
        const start = moment(action.rota.startDate);
        return {
            days: buildDays(start, action.rota.duration),
            shifts: action.rota._embedded['http://api.brighthr.com/rels/shift'].map(mapShift),
            name: action.rota.name,
            start,
            end: start.add(7, 'days')
        };
    }

    return state;
}
