import { valueAdded } from '../constants';

export default (state, action) => {
    if (!state) {
        return {
            values: ['a']
        };
    }

    if (action.type === valueAdded) {
        return {
            values: state.values.concat([action.value])
        };
    }

    return state;
};
