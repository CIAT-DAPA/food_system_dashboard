import React from 'react';
import Chart from 'react-apexcharts';

import Highlight from '../../components/highlight/Highlight';
import Sources from '../../components/sources/Sources';
import DeterminantsData from '../../services/DeterminantsData';
import Infographic from '../../services/Infographic';
import Source from '../../services/Source';

import './Supplies.css';

function Supplies() {
    const [infographic, setInfographics] = React.useState();

    const load_data = () => {
        Infographic.list("supply").then(
            (data) => {
                Source.list("supply").then(
                    (data2) => {
                        setInfographics({ info: data, sources: data2 });
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
                Sistema de suministro de alimentos
            </h1>
            <p>
                El término "determinantes" es un acercamiento a la palabra en ingles de "drivers."
                Se entienden como impulsores o conductores en sistemas alimentarios.
            </p>
            <h2>
                Datos claves
            </h2>
            {infographic ?
                <>
                    <Highlight data={infographic.info} />
                    <Sources items={infographic.sources} />
                </>
                :
                <></>
            }
        </article>
    );
}

export default Supplies;