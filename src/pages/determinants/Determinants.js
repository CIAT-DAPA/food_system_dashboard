import React from 'react';

import Highlight from '../../components/highlight/Highlight';
import Infographic from '../../services/Infographic';

import './Determinants.css';

function Determinants() {
    const [data,setData] = React.useState([]);

    const load_highlights = () =>{
        Infographic.list("determinantes_info.json").then(
            (data)=>{
                setData(data);
            }
        );
    }
    React.useEffect(() => {
        load_highlights();
        return () => undefined;
    }, []);

    return (
        <>
            <h1>
                Factores determinantes para el sistema alimentario
            </h1>
            <h2>
                Datos claves
            </h2>
            <Highlight data={data} />
        </>
    );
}

export default Determinants;