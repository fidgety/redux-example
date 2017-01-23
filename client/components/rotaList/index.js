import React from 'react';
import { Link } from 'react-router';

import CreateRota from '../createRota';

export default function(props) {
    const buildList = rota =>
        <li key={rota._links.item.href}>
            {rota.startDate.format('DD/MM/YYYY')} <Link to={`/rotas/rota/${rota.id}`}>{rota.name}</Link>
        </li>;

    if (!props.published.length && !props.drafts.length) {
        return <div>Loading rotas...</div>;
    }

    return (
        <div>
            <CreateRota onCreateRota={props.onCreateRota}/>
            <h2>Published</h2>
            <ul>{props.published.map(buildList)}</ul>
            <h2>Drafts</h2>
            <ul>{props.drafts.map(buildList)}</ul>
        </div>
    );
}
