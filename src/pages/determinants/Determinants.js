import React from 'react';
import Chart from 'react-apexcharts';

import Highlight from '../../components/highlight/Highlight';
import Sources from '../../components/sources/Sources';
import DeterminantsData from '../../services/DeterminantsData';
import Infographic from '../../services/Infographic';
import Source from '../../services/Source';

import './Determinants.css';

function Determinants() {
    const [infographic, setInfographics] = React.useState();
    const [plots, setPlots] = React.useState();

    const load_data = () => {
        Infographic.list("determinants").then(
            (data) => {
                Source.list("determinants").then(
                    (data2) => {
                        setInfographics({ info: data, sources: data2 });

                        DeterminantsData.get().then((data3) => {
                            const pie_charts = data3.map((item) => {
                                return {
                                    type: "donut",
                                    series: item.labels,
                                    options: {
                                        labels: item.series,
                                        legend: { show: false }
                                    }
                                };
                            });
                            setPlots(pie_charts);
                        });
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
            {infographic ?
                <>
                    <Highlight data={infographic.info} />
                    <Sources items={infographic.sources} />
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
            <div className='row'>
                <div className='col-lg-2'>
                </div>
                <div className='col-lg-4'>
                    {plots ?
                        <Chart
                            options={plots[0].options}
                            series={plots[0].series}
                            type="donut"
                            width="500"
                        /> :
                        <></>
                    }

                </div>
                <div className='col-lg-4'>

                </div>
            </div>
        </article>
    );
}

export default Determinants;