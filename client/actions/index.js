import { valueAdded } from './constants';

export const addValue = value => {
    return {
        type: valueAdded,
        value
    };
};
