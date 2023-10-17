import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Mapbx() {
    mapboxgl.accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";

    const [marker, setMarker] = useState([-4.4491762, 36.69364739434165]);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: marker,
            zoom: 13,
        });

        const newMarker = new mapboxgl.Marker()
            .setLngLat(marker)
            .addTo(map);

        return () => {
            newMarker.remove();
            map.remove();
        };
    }, [marker]);

    const handleCoffeeShopChange = (event) => {
        const selectedCoffeShop = event.target.value;
        const coffeeShopCoordinates = stores[selectedCoffeShop];
        setMarker(coffeeShopCoordinates);
    };

    const stores = {
        "100coffee": [-4.4491762, 36.69364739434165],
        "nextLevel": [-4.424148449170563, 36.717778682600596],
        "terraMia": [-4.439746416959903, 36.6946465331424]
    };

    return (
        <>
            <div className="map-overlay">
                <h5>Select the store: </h5>
                <select className="ui-textfield" onChange={handleCoffeeShopChange}>
                    <option value="100coffee">100% Coffee</option>
                    <option value="nextLevel">next Level</option>
                    <option value="terraMia">terra Mia</option>
                </select>
            </div>
            <div id="map"></div>
        </>
    );
}
