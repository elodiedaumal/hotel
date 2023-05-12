import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Error from './Error';
import Picturesingle from '../Components/Picturesingle';

const SingleRoom = () => {
  let { id } = useParams();
  const { rooms, singleProduct } = useGlobalContext();
  const { images } = singleProduct;
  return (
    <section className='max-w-6xl mx-auto p-2 my-10'>
      {rooms
        .filter((item) => item.id.toLowerCase().includes(id.toLowerCase()))

        .map((room) => (
          <div key={room.id} className='grid grid-cols-2 gap-4'>
            <Picturesingle images={room.images} className='' />
            <div>
              <h2 className='text-4xl font-bold text-center '>{room.name}</h2>
              <p>Type d'hébergement: {room.category}</p>
              <p>Adresse de l'hébergement: {room.address}, 29160 Morgat </p>
              <p>Nombre max de voyager: {room.travelers}</p>
              <p>Nombre de chambre: {room.bedroom}</p>
              <p>Nombre de lit: {room.bed}</p>
              <p>Type de lit: {room.bedType}</p>
              {room.sofa && <p>Canapé lit: {room.sofa}</p>}
              <p>Cuisine équipé: {room.kitchen ? 'Oui' : 'Non'}</p>
              <p>Salon: {room.livingRoom ? 'Oui' : 'Non'}</p>
              <p>Salle de bain: équipé d'une douche</p>
              <p>Vue sur la mer: {room.seaView ? 'Oui' : 'Non'}</p>
              <p>Nombre d'hébergement disponible: {room.stock}</p>
              <p>
                Petit-déjeuner: {room.breakfast}/pers en suplement (servis à
                l'hotel 46, boulevard de la plage)
              </p>
              {room.category !== 'Hotel' && (
                <div>
                  <p>Important</p>
                  <p>
                    Le check-in se fait à l'hotel au 46 boulevard de la plage
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
    </section>
  );
};

export default SingleRoom;
