import React from 'react';

import { MapContainer, TileLayer, GeoJSON, LayersControl, WMSTileLayer, Polygon, CircleMarker, Tooltip, Marker, Popup } from 'react-leaflet'
function Map(props) {
    return (
        <MapContainer center={props.conf.center} zoom={props.conf.zoom} style={{ height: props.conf.height }} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {props.points ?
                props.points.map((item, idx) => (
                    <Marker key={'point_' + idx} position={[item.geometry.coordinates[1], item.geometry.coordinates[0]]}>
                        <Popup>
                            <span>Galeria: {item.properties.Name}</span>
                        </Popup>
                    </Marker>
                )) :
                <></>}
            {props.geo ? <GeoJSON attribution="CIAT" key={"geo_municipalities"} data={props.geo} /> : <></>}
        </MapContainer>
    );
}

export default Map;