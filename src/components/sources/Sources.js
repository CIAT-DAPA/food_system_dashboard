import React from 'react';

function Sources(props) {
    return (
        <>
            <h5>
                Fuentes:
            </h5>
            <ul>
                {props.items.map((item, idx) => (
                    <li><a target='_blank' href={item.url}>{item.title}</a></li>
                )) ??
                    <></>
                }
            </ul>
        </>
    );
}

export default Sources;

