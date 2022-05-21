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
        load_data();
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
            {data ?
                <>
                    <Highlight data={data.info} />
                    <Sources items={data.sources} />
                </>
                :
                <></>
            }

            <h2>Determinantes ambientales</h2>
            <p>
                El 70% del territorio municipal de Cali (56.400 ha) es zona rural, constituida
                esencialmente por laderas ubicadas entre los 1.200 y los 1.800 m s. n. m. La mayor parte de estas laderas
                corresponden al Parque Nacional Natural Farallones de Cali y a zona de reserva forestal.
            </p>
        </article>
    );
}

export default Determinants;