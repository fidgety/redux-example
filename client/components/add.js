import { add } from '../actions';
import uppercase from '../actions/asyncAction';

const addComponent = store => {
    const valueAdded = () => {
        const value = document.getElementById('text-value').value;
        document.getElementById('text-value').value = '';
        store.dispatch(add(value));
    };

    const valueUppercased = () => {
        const value = document.getElementById('text-value').value;
        document.getElementById('text-value').value = '';
        store.dispatch(uppercase(value));
    };

    const render = () => {
        const input = '<input type="text" id="text-value"/><button id="add-button">add</button><button id="uppercase-button">uppercase</button>';
        document.write(input);
        document.getElementById('add-button')
           .addEventListener('click', valueAdded);

        document.getElementById('uppercase-button')
          .addEventListener('click', valueUppercased);
    };

    // store.subscribe(() => {
    //     render();
    // });

    render();
};

export default addComponent;
