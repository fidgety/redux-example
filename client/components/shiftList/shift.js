import React from 'react';

export default props => {
    const shift = props.shift;
    return (
        <div>
            <img src={shift.participant.icon} style={{ height: '20px' }} />
            { shift.participant.name }
        </div>
    );
};
