import React from 'react';

function Highlight(props) {
    return (
        <>
            <img src={props.icon} />
            <h3>{props.content}</h3>
        </>
    );
}

export default Highlight;