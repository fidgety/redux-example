export default function(state, action) {
    if (!state) {
        return {
            published: [],
            draft: []
        };
    }

    if (action.type === 'get-rotas-success') {
        const allRotas = action.rotas._embedded.collection.map(rota => {
            return Object.assign({
                id: rota._links.item.href.match(/\d+/g)[0]
            }, rota);
        });

        return {
            published: allRotas.filter(rota => rota.published),
            draft: allRotas.filter(rota => !rota.published)
        };
    }

    return state;
}
