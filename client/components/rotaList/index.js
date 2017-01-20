import React from 'react';
import { Link } from 'react-router';

export default function(props) {
    const buildList = rota => <li key={rota._links.item.href}><Link to={`/rotas/rota/${rota.id}`}>{rota.name}</Link></li>;

    return (<div>
        <ul>{props.published.map(buildList)}</ul>
        <ul>{props.drafts.map(buildList)}</ul>
    </div>);
}
