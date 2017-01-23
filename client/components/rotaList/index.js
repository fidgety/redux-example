import React from 'react';
import { Link } from 'react-router';

export default function(props) {
    const buildList = rota => <li key={rota._links.item.href}><Link to={`/rotas/rota/${rota.id}`}>{rota.name}</Link></li>;

    if (!props.published.length && !props.drafts.length) {
        return <div>Loading rotas...</div>;
    }

    return (<div>
		<h2>Published</h2>
        <ul>{props.published.map(buildList)}</ul>
		<h2>Drafts</h2>
        <ul>{props.drafts.map(buildList)}</ul>
    </div>);
}
