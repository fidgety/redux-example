import { loadRotas } from './rotas';

const createRotaInProgress = () => ({
    type: 'create-rota-progressing'
});

const createRotaSuccess = (rota) => ({
    type: 'create-rota-success',
    rota
});

const createRotaFailure = (err) => ({
    type: 'create-rota-faliure',
    err
});

export const createRota = (name, date) => dispatch => {
    dispatch(createRotaInProgress());
    fetch('http://brighthr-api-dev.azurewebsites.net/rotas/rota?v=1', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            Authorization: `bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            name,
            startDate: date.format()
        })
    })
    .then((response) => {
        if (response.status === 201) {
            return response.json();
        }
        throw response;
    }).then((response) => {
        dispatch(createRotaSuccess(response));
        dispatch(loadRotas(response));
    }).catch((err) => {
        dispatch(createRotaFailure(err));
    });
};
