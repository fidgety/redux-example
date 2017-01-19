import { add } from '.';

const asyncResponse = value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value.toUpperCase());
        }, 1000);
    });
};

const upperCase = value => dispatch => {
    asyncResponse(value)
        .then(uppercased => dispatch(add(uppercased)));
};

export const uppercase = value => {
    return add(value);
};

export default upperCase;
