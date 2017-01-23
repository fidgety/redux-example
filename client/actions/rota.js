const getRotaInProgress = () => ({
    type: 'get-rota-progressing'
});

const getRotaSuccess = (rota) => ({
    type: 'get-rota-success',
    rota
});

const getRotaFailure = (err) => ({
    type: 'get-rota-faliure',
    err
});

export const loadRota = (id) => dispatch => {
    dispatch(getRotaInProgress());
    fetch(`http://brighthr-api-dev.azurewebsites.net/rotas/Rota/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json, text/plain, */*',
            Authorization: `bearer ${localStorage.getItem('token')}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        }
        throw response;
    }).then((response) => {
        dispatch(getRotaSuccess(response));
    }).catch((err) => {
        dispatch(getRotaFailure(err));
    });
};
