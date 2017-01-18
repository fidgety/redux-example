import { valueAdded } from '../constants';

export const add = value => {
    return {
        type: valueAdded,
        value
    };
};
