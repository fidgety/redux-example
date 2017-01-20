import { browserHistory } from 'react-router';

export const loginInProgress = () => ({
    type: 'login-progressing'
});

export const loginSuccess = loginResponse => {
	// this is really bad
    localStorage.setItem('token', loginResponse.token.token);

    browserHistory.push('/dashboard');

    return Object.assign({
        type: 'login-success'
    }, loginResponse);
};

export const loginFailure = (err) => ({
    type: 'login-faliure',
    err
});

export default (username, password) => dispatch => {
    dispatch(loginInProgress());
    fetch('http://brighthr-api-dev.azurewebsites.net/api/account/postValidateUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json, text/plain, */*'
        },
        body: `username=${username}&password=${password}`
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        }
        throw response;
    }).then((response) => {
        dispatch(loginSuccess(response));
    }).catch((err) => {
        dispatch(loginFailure(err));
    });
};
