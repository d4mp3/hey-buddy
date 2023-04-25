import Map, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import getcenter from 'geolib/es/getCenter';


function BaseMap({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform search results object into the { latitude: 52.00000, longitude: 13.000000 } object

  const coords = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat,
  }));

  const center = getcenter(coords)

  const [viewState, setViewState] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 2,
  });

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      //   initialViewState={{
      //     longitude: -100,
      //     latitude: 40,
      //     zoom: 3.5,
      //   }}
      {...viewState}
      mapStyle='mapbox://styles/d4mp3/clgp9b8ga00ie01o10zgx6t64'
      onMove={evt => setViewState(evt.viewState)}
    >
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              🐶
            </p>
          </Marker>

          {/* The popup that should show if we click on a marker */}
          {selectedLocation.long === result.long ? (
            <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >
            {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}



    </Map>
  );
}
export default BaseMap;
