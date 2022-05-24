import React from 'react';

function KeySection(props) {
    return (
        <div className="col-lg-12">
            <img className="bd-placeholder-img rounded-circle" width="30" height="30" src={'' + (props.icon ?? '')} />
            <span> {props.content ?? ''}</span>
        </div>
    );
}

export default KeySection;