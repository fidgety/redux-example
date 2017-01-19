export const loginInProgress = () => ({
    type: 'login-progressing'
});

export const loginSuccess = (token) => ({
    type: 'login-success',
    token
});

export const loginFailure = (err) => ({
    type: 'login-faliure',
    err
});

// curl 'http://brighthr-api-dev.azurewebsites.net/api/account/postValidateUser' -H 'Pragma: no-cache' -H 'Origin: http://localhost:9000' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-GB,en-US;q=0.8,en;q=0.6' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: application/json, text/plain, */*' -H 'Cache-Control: no-cache' -H 'Referer: http://localhost:9000/login' -H 'Connection: keep-alive' --data 'username=clark_bright%40mailinator.com&password=appleapple' --compressed
// curl 'http://brighthr-api-dev.azurewebsites.net/api/account/postValidateUser' -H 'Pragma: no-cache' -H 'Origin: http://localhost:9000' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-GB,en-US;q=0.8,en;q=0.6' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36' -H 'content-type: application/x-www-form-urlencoded' -H 'Accept: application/json, text/plain, */*' -H 'Cache-Control: no-cache' -H 'Referer: http://localhost:9000/login' -H 'Connection: keep-alive' --data $'------WebKitFormBoundaryBfFaz4PwvQuIz1Wi--\r\n' --compressed

export default (username, password) => dispatch => {
    dispatch(loginInProgress());
    fetch('http://brighthr-api-dev.azurewebsites.net/api/account/postValidateUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json, text/plain, */*'
        },
        body: `username=${username}&password={password}`
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
