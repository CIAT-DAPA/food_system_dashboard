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
                            const pie_charts = data3.pies.map((item) => {
                                return {
                                    type: "donut",
                                    series: item.labels,
                                    options: {
                                        labels: item.series,
                                        legend: { show: false },
                                        title: { display: true, text: item.title }
                                    }
                                };
                            });
                            const bar_chart = {
                                type: "bar",
                                series: [{ data: data3.bars.values }],
                                options: {
                                    
                                    xaxis: {
                                        categories: data3.bars.categories
                                    },
                                    legend: { show: false },
                                    title: { display: true, text: "Cobertura de servicios públicos" }

                                }
                            };
                            console.log(bar_chart);
                            setPlots({ pies: pie_charts, bars: bar_chart });
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
                            options={plots.pies[0].options}
                            series={plots.pies[0].series}
                            type="donut"
                        /> :
                        <></>
                    }
                </div>
                <div className='col-lg-4'>
                    {plots ?
                        <Chart
                            options={plots.pies[1].options}
                            series={plots.pies[1].series}
                            type="donut"
                        /> :
                        <></>
                    }
                </div>
            </div>
            <h2>Determinantes demográficos</h2>
            <p>
                Entre 2005 y 2018, la población en la ciudad de Cali ha aumentado en un 7,3%, según los censos del
                Departamento Administrativo Nacional de Estadística (DANE). La población del área rural presentó una disminución del 27,7%.
                Las principales comunas de la cabecera municipal de la ciudad donde se ha presentado un aumento del número de
                personas son la 17, 21 y 22 (estrato 5, 1 y 6, respectivamente), aunque se presenta mayor densidad poblacional en las
                comunas 6, 13, 14 y 15 (principalmente estratos 1, 2 y 3, al oriente de la ciudad). Los estratos 1, 2 y 3
                concentran aproximadamente al 80% de la población de la ciudad. Cali ha sido históricamente receptora de migrantes,
                muchos de ellos desplazados por la violencia y provenientes principalmente del suroccidente del país y del litoral Pacífico.
                En los últimos años, a estos flujos migratorios internos se sumó la llegada de población venezolana.
            </p>
            <div className='row'>
                <div className='col-lg-2'>
                </div>
                <div className='col-lg-4'>
                    {plots ?
                        <Chart
                            options={plots.pies[2].options}
                            series={plots.pies[2].series}
                            type="donut"
                        /> :
                        <></>
                    }
                </div>
                <div className='col-lg-4'>
                    {plots ?
                        <Chart
                            options={plots.pies[3].options}
                            series={plots.pies[3].series}
                            type="donut"
                        /> :
                        <></>
                    }
                </div>
            </div>
            <h2>Determinantes técnologicos</h2>
            <p>
                El acceso a tecnología e infraestructura para cubrir las necesidades básicas creció fuertemente en la ciudad durante
                la última década. La cobertura de servicios básicos como energía, gas y agua potable, que son fundamentales para la
                preparación, conservación e inocuidad de los alimentos, es casi completa. Los servicios de recolección de basuras e
                internet tenían en 2018 una cobertura del 99,1% y del 72%, respectivamente.
            </p>
            <div className='row'>
                <div className='col-lg-12'>
                    {plots ?
                        <Chart
                            options={plots.bars.options}
                            series={plots.bars.series}
                            type="bar"
                            height={300}
                        /> :
                        <></>
                    }
                </div>
            </div>
        </article>
    );
}

export default Determinants;