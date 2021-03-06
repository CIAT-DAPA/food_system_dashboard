import React from 'react';
import KeyData from '../key_data/KeyData';
import KeySection from '../key_section/KeySection';

function Highlight(props) {
    const calculate_space = (amount) => {
        return amount == 4
            ? "3"
            : amount == 3
                ? "4"
                : amount == 2
                    ? "6" : "6"
            ;
    }
    return (
        <>
            {props.data ? props.data.map((item, index) => (
                <section>
                    <div className='row'>
                        <KeySection icon={item.hightlight.icon} content={item.hightlight.content} />
                    </div>
                    <div className='row'>
                        {item.key_data.map((item2, index2) => (
                            <KeyData icon={item2.icon} content={item2.content} value={item2.value} space={calculate_space(item.key_data.length)} />
                        )) ??
                            <></>
                        }
                    </div>
                </section>
            )) :
                <></>
            }
        </>
    );
}

export default Highlight;