import React from 'react';

function KeySection(props) {
    return (
        <div className="col-lg-12">
            <img src={props.icon} />
            <h3>{props.content}</h3>
        </div>
    );
}

export default KeySection;