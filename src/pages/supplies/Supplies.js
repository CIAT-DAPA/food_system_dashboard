import React from 'react';
import Select from 'react-select';

import Highlight from '../../components/highlight/Highlight';
import Sources from '../../components/sources/Sources';
import Infographic from '../../services/Infographic';
import Source from '../../services/Source';
import Map from '../../components/map/Map';


import './Supplies.css';
import MapsData from '../../services/MapsData';

function Supplies() {
    const [infographic, setInfographics] = React.useState();
    const [map_production, setMapProduction] = React.useState({ center: [3.4427581, -76.5146652], zoom: 5, height: "500px" });
    const [geo_production, setGeoProduction] = React.useState();
    const [points_storage, setPointsStorage] = React.useState();
    const [map_storage, setMapStorage] = React.useState({ center: [3.4427581, -76.5146652], zoom: 12, height: "500px" });
    const [optFoodType, setOptFoodType] = React.useState([{ label: "Frutas", value: "FRUTAS.geojson" },
    { label: "Lácteos y huevos", value: "LACTEOS.geojson" },
    { label: "Tubérculos, raíces y plátanos", value: "TUBERCULOS.geojson" },
    { label: "Carnes", value: "CARNES.geojson" },
    { label: "Granos y cereales", value: "GRANOS.geojson" },
    { label: "Pescados", value: "PESCADOS.geojson" },
    { label: "Procesados", value: "PROCESADOS.geojson" },
    { label: "Verduras y hortalizas", value: "VERDURAS.geojson" }]);

    const load_data = () => {
        Infographic.list("supply").then(
            (data) => {
                Source.list("supply").then(
                    (data2) => {
                        setInfographics({ info: data, sources: data2 });
                        load_markets();
                    }
                );
            }
        );
    }

    const load_markets = () => {
        const source = "supplies/galerias_cali.geojson";
        MapsData.get(source).then(
            (data) => {
                console.log(data);
                setPointsStorage(data.features);
            }
        );
    }

    React.useEffect(() => {
        load_data();
        return () => undefined;
    }, []);

    const changeFoodType = event => {
        const source = "supplies/" + event.value;
        MapsData.get(source).then((data) => {
            setGeoProduction({geo:data,key:event.label});
        });
    };

    return (
        <article>
            <h1>
                Sistema de suministro de alimentos
            </h1>
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
            <h2>Producción y abastecimiento</h2>
            <p>
                Las actividades económicas en el municipio (más del 90%) están esencialmente relacionadas con el sector de bienes
                y servicios. La zona rural concentra extensas áreas de cultivo de caña de azúcar, destinadas a la industria
                azúcarera del departamento, y una pequeña producción de hortalizas y cítricos para el autoconsumo, provenientes en el
                83% de los casos, de unidades de menos de 5 ha.
            </p>
            <div className="row">
                <label htmlFor="cboFoodType" className="col-lg-2 col-form-label">Tipo de alimento:</label>
                <div className="col-lg-3">
                    <Select key="cboFoodType" id="cboFoodType" inputId='cboFoodType'
                        options={optFoodType}
                        isSearchable={false}
                        onChange={changeFoodType}
                        placeholder={"Seleccionar"} />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <Map key={"mapFood"} conf={map_production}  geo={geo_production ? geo_production.geo: null} geo_key={geo_production ? geo_production.key: null} />
                </div>
            </div>
            <h2>Almacenamiento y distribucción</h2>
            <p>
                Cali cuenta con diversas fuentes de abastecimiento para sus consumidores: dos centrales mayoristas principales
                (la Central de Abastecimientos del Valle del Cauca – CAVASA y la Galería Santa Elena) y 5 plazas de mercado adicionales
                (Alfonso López, Siloé, Alameda, La Floresta y El Porvenir). CAVASA es la central de abastecimiento oficial del departamento
                y está ubicada a las afueras de la ciudad; recibe alimentos de diversas regiones que se redistribuyen en Cali y a otras
                ciudades y departamentos. Entre un 60 y 70% de lo que se distribuye desde CAVASA va para Cali. Tanto CAVASA como Santa
                Elena abastecen principalmente a graneros, supermercados, universidades, centros de reclusión, restaurantes, tiendas y
                otras plazas de mercado.
            </p>
            <div className="row">
                <div className="col-lg-12">
                    <Map key={"mapStorage"} conf={map_storage} points={points_storage} />
                </div>
            </div>
        </article>
    );
}

export default Supplies;