import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });

  const center = useMemo(() => ({ lat: 48.2261384, lng: -4.5042244 }), []);
  return (
    <div className='max-w-5xl mx-auto'>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName='map-container'
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
