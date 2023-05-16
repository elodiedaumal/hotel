import marker from '../Images/location-sign-svgrepo-com.svg';
import Logofull from '../Images/logofull.png';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const myIcon = new L.Icon({
  iconUrl: Logofull,
  shadowUrl: marker,
  iconAnchor: [36, 51],
  popupAnchor: [25, 40],
  iconSize: [60, 60],
  shadowSize: [70, 70],
  shadowAnchor: [40, 50],
});

const Map = () => {
  return (
    <div className='max-w-5xl mx-auto '>
      <MapContainer
        center={[48.2261384, -4.5042244]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker icon={myIcon} position={[48.2261384, -4.5042244]}>
          <Popup>Hotel de la baie: 46, boulevard de la plage</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
