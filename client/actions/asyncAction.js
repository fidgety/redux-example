import { add } from '.';

const asyncResponse = value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value.toUpperCase());
        }, 1000);
    });
};

const upperCase = value => dispatch => {
    dispatch(tryToAdd(uppercased));
    asyncResponse(value)
        .then(uppercased => dispatch(add(uppercased)))
		.catch(fail => dispatch(failAdd(fail)));
};

export const uppercase = value => {
    return add(value);
};

export default upperCase;
