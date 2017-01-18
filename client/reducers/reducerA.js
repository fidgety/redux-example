import { valueAdded } from '../constants';

export default (state, action) => {
    if (!state) {
        return {
            values: []
        };
    }

    if (action.type === valueAdded) {
        state.values = state.values.concat([action.newValue]);
    }

    return state;
};
