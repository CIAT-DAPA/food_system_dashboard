import React from 'react';

import './Home.css';
import intro from '../../assets/img/intro.png';
import home_highlight1 from '../../assets/img/home_highlight1.png';
import home_highlight2 from '../../assets/img/home_highlight2.png';
import home_highlight3 from '../../assets/img/home_highlight3.png';

function Home() {

    return (
        <main>
            <div className="landscape">
                <img className='bd-placeholder-img' width="100%" height="100%" aria-hidden="true" alt="" src={intro} />
            </div>
            <br />
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Introducción</h2>
                    <p className="lead text-justify">
                        Este tablero busca presentar todos los componentes del sistema alimentario de Cali como ciudad-región,
                        para entender sus características, dinámicas y vulnerabilidades, con el fin de identificar oportunidades
                        de fortalecimiento y acción desde diferentes perspectivas.  Si bien el ejercicio se enfoca en el municipio de
                        Cali como polo de consumo, busca también evidenciar su estrecha relación tanto con zonas productoras como
                        con otras localidades “receptoras” que se abastecen del flujo de alimentos que transita y se redistribuye por la ciudad.
                        <br />
                        Basado en la mejor evidencia disponible, este diagnóstico buscó ser una herramienta para la toma de decisiones,
                        que ayude a los actores del sistema alimentario de Cali a construir juntos una visión común y la hoja
                        de ruta necesaria para impulsar su transformación de modo sostenible.
                    </p>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                        height="500" src={home_highlight1} role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false" />

                </div>
            </div>
            <br />
            <div className="row featurette">
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                        height="500" src={home_highlight2} role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false" />

                </div>
                <div className="col-md-7">
                    <h2 className="featurette-heading">Consideraciones sobre los sistemas alimentarios</h2>
                    <p className="lead  text-justify">
                        Un sistema alimentario describe todos los elementos y actividades relacionados con la producción, 
                        la transformación, el envasado, la distribución, la comercialización, el consumo y 
                        la eliminación de los alimentos, así como todos los insumos y productos asociados.
                        <br />
                        Los sistemas alimentarios, si son sostenibles, aportan beneficios a las personas, a las comunidades, 
                        a la sociedad y al medio ambiente, ya que proporcionan alimentos sanos y nutritivos, generan 
                        oportunidades de negocio inclusivos y rentables para los agentes de la cadena de suministro – 
                        desde los agricultores familiares hasta los vendedores del mercado – y ayudan a conservar el 
                        entorno natural y su biodiversidad (HLPE, 2017).
                    </p>
                </div>
            </div>
            <br />
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Marco de análisis</h2>
                    <p className="lead text-justify">
                    El marco de análisis utilizado para caracterizar este sistema (De Brauw et al., 2019, adaptado de HLPE, 2017) 
                    ya ha sido aplicado para entender sistemas alimentarios de otras ciudades y países de Asia, 
                    África y Latinoamérica. Este marco analítico considera tres grandes bloques de información: (a) 
                    los determinantes del sistema; (b) los componentes del sistema, y (c) los resultados del sistema.
                    <br />
                    Reconoce cómo los determinantes ambientales, demográficos, tecnológicos, políticos, económicos, 
                    sociales y culturales influencian el sistema alimentario – desde la producción hasta el consumo –, 
                    así como el funcionamiento de los componentes del sistema: el suministro de alimentos, el entorno alimentario, 
                    el comportamiento del consumidor y las dietas. Además, considera las diversas interacciones que tienen 
                    lugar entre estos componentes y cuáles son, finalmente, sus resultados en los estados nutricionales y de salud, 
                    en la seguridad alimentaria, y en las condiciones ambientales y socioeconómicas de la población en general.  
                    </p>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                        height="500" src={home_highlight3} role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false" />

                </div>
            </div>
        </main>
    );
}

export default Home;