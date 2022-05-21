import React from 'react';
import KeySection from '../key_section/KeySection';

function Highlight(props) {
    return (
        <>
        {
            props.data ? props.data.map((item, index)=(
                <div className='row'>
                    <KeySection icon={item.hightlight.icon} content={item.hightlight.content}/>
                </div>
            )):
            <></>
        }
        </>
    );
}

export default Highlight;