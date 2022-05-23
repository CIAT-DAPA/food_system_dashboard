import React from 'react';

import { MapContainer, TileLayer, GeoJSON, LayersControl, WMSTileLayer, Polygon, CircleMarker, Tooltip, Marker, Popup } from 'react-leaflet'
function Map(props) {
    return (
        <MapContainer center={props.conf.center} zoom={props.conf.zoom} style={{ height: props.conf.height }} scrollWheelZoom={true}>
            <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {console.log(props.geo)}
            {props.geo ? <GeoJSON attribution="CIAT" key={"geo_municipalities"} data={props.geo} /> : <GeoJSON attribution="" />}
        </MapContainer>
    );
}

export default Map;