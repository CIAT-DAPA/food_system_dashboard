import React from 'react';

function KeyData(props) {
    return (
        <div className={"text-center col-lg-" + props.space}>
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={'' + (props.icon ?? '')} />
            <h4>{props.value ?? ''}</h4>
            <p>{props.content ?? ''}</p>
        </div>
    );
}

export default KeyData;