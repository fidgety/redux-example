const list = store => {
    const render = items => {
        const listItems = store.getState().list.values;

        const listLis = listItems.map(item => `<li>${item}</li>`).join('');
        const html = `<ul>${listLis}</ul>`;

        document.getElementById('list').innerHTML = html;
    };

    store.subscribe(() => {
        render();
    });

    render();
};

export default list;
