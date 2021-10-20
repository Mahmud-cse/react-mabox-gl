import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
mapboxgl.accessToken = 'pk.eyJ1IjoibWFobXVkOSIsImEiOiJja3JmNjk1dDMwNmR1MzBwNmRtcmgxenViIn0.8qqgaVRbBTWGa3d9C51xww';

const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.4125181, 23.810332],
            zoom: 13
            });
     
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[]);
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;