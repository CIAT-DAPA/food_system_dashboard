import React from 'react';

function KeyData(props) {
    return (
        <>
            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={props.icon} />
                <h4>{props.value}</h4>
                <p>{props.content}</p>
            </div>
        </>
    );
}

export default KeyData;