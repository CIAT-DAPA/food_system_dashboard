import React from 'react';
import L from "leaflet";

import { MapContainer, TileLayer, GeoJSON, LayersControl, WMSTileLayer, Polygon, CircleMarker, Tooltip, Marker, Popup } from 'react-leaflet'
import MapLegend from '../map_legend/MapLegend';
import Color from '../tools/Color';

function Map(props) {

    const onEachFeature = (feature, layer) => {
        layer.options.color = Color.get_color(feature.properties.Frec);
        layer.options.fillOpacity = 0.8;
        layer.options.weight = 2;
        layer.options.dashArray = 1;
        layer.options.opacity = 1;
        layer.bindPopup(feature.properties.NOMBRE_DPT + ", " + feature.properties.NOM_MUNICI + ":" +  feature.properties.Frec + "%");
        layer._popup.options.closeButton = false;
    }

    return (
        <MapContainer center={props.conf.center} zoom={props.conf.zoom} style={{ height: props.conf.height }} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {props.points ?
                props.points.map((item, idx) => (
                    <Marker key={'point_' + idx} position={[item.geometry.coordinates[1], item.geometry.coordinates[0]]}
                        icon={L.icon({ iconUrl: "icons/" + item.properties.Type + ".png", iconSize: [40, 40] })}>
                        <Popup closeButton={false}>
                            <span>Galeria: {item.properties.Name}</span>
                        </Popup>
                    </Marker>
                ))
                : <></>}
            {props.geo ?
                <>
                    <GeoJSON attribution="CIAT" key={props.geo_key} data={props.geo} onEachFeature={onEachFeature} />
                    <MapLegend />
                </>
                : <></>}
        </MapContainer>
    );
}

export default Map;