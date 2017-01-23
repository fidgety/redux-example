import React from 'react';
import Shift from './shift';

export default function(props) {
    if (!props.shifts.length) {
        return <div>loading....</div>;
    }

    return (<ul>
        {props.shifts.map(shift => (<li key={shift.id}>
            <Shift shift={shift}/>
        </li>))}
    </ul>);
}
