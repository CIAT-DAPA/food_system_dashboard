import React from 'react';

import Highlight from '../../components/highlight/Highlight';
import Sources from '../../components/sources/Sources';
import Infographic from '../../services/Infographic';
import Source from '../../services/Source';

import './Determinants.css';

function Determinants() {
    const [data, setData] = React.useState([]);

    const load_data = () => {
        Infographic.list("determinants").then(
            (data) => {
                Source.list("determinants").then(
                    (data2) => {
                        setData({ info: data, sources: data2 });
                    }
                );
            }
        );
    }
    React.useEffect(() => {
        load_highlights();
        return () => undefined;
    }, []);

    return (
        <article>
            <h1>
                Factores determinantes para el sistema alimentario
            </h1>
            <p>
                El término "determinantes" es un acercamiento a la palabra en ingles de "drivers."
                Se entienden como impulsores o conductores en sistemas alimentarios.
            </p>
            <h2>
                Datos claves
            </h2>
            <Highlight data={data.info} />
            <Sources items={data.sources} />

        </article>
    );
}

export default Determinants;