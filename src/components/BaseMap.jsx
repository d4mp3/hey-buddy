import Map, { GeolocateControl } from "react-map-gl";
import { useState } from "react";


function BaseMap() {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 52.47,
        longitude: 19.13,
        zoom: 5,
    });

    return (
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        //   initialViewState={{
        //     longitude: -100,
        //     latitude: 40,
        //     zoom: 3.5,
        //   }}
        {...viewport}
          mapStyle="mapbox://styles/d4mp3/clgp9b8ga00ie01o10zgx6t64"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </Map>
    );
  }
  export default BaseMap;
