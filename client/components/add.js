import { add } from '../actions';

const addComponent = store => {
    const valueAdded = () => {
        const value = document.getElementById('text-value').value;
        document.getElementById('text-value').value = '';
        store.dispatch(add(value));
    };

    const render = () => {
        const input = '<input type="text" id="text-value"/><button id="add-button">add</button>';
        document.write(input);
        document.getElementById('add-button')
           .addEventListener('click', valueAdded);
    };

    // store.subscribe(() => {
    //     render();
    // });

    render();
};

export default addComponent;
