import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default function Mapbx() {
    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: [-4.42642, 36.7199],
            zoom: 11
        })
        return () => {
            map.remove();
        };
    }, []);
}
