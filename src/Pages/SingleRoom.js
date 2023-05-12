import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { TbWheelchairOff } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
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
          <div key={room.id} className='grid grid-cols-2 gap-6 '>
            <h2 className='col-span-full text-4xl font-bold text-center '>
              {room.name}
            </h2>
            <Picturesingle images={room.images} className='' />

            <div className='flex flex-col gap-1'>
              <p className='flex items-center gap-1'>
                <strong>Type d'hébergement:</strong> {room.category}
                {room.category === 'Hotel' && (
                  <div className='flex text-sm text-yellow-400'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                )}
              </p>
              <p>
                <strong>Adresse de l'hébergement:</strong> {room.address}, 29160
                Morgat{' '}
              </p>
              <p>
                <strong>Nombre max de voyager:</strong> {room.travelers}
              </p>
              <p>
                <strong>Nombre de chambre:</strong> {room.bedroom}
              </p>
              <p>
                <strong>Nombre de lit:</strong> {room.bed}
              </p>
              <p>
                <strong>Type de lit:</strong> {room.bedType}
              </p>
              {room.sofa && (
                <p>
                  <strong>Canapé lit:</strong> {room.sofa}
                </p>
              )}
              <p>
                <strong>Cuisine équipé:</strong> {room.kitchen ? 'Oui' : 'Non'}
              </p>
              <p>
                <strong>Salon:</strong> {room.livingRoom ? 'Oui' : 'Non'}
              </p>
              <p>
                <strong>Salle de bain:</strong> équipé d'une douche
              </p>
              <p>
                <strong>Vue sur la mer:</strong> {room.seaView ? 'Oui' : 'Non'}
              </p>
              <p>
                <strong>Inclut:</strong>{' '}
              </p>
              <ul className='list-disc ml-10'>
                <li>Wifi</li>
                <li>Bouilloire</li>
                <li>TV</li>
                <li>Sèche cheveux</li>
                <li>Serviettes</li>
                <li>Linge de maison</li>
                <li>Plateau de courtoisie</li>
                {room.parking ? (
                  <li>Parking privé</li>
                ) : (
                  <li>Parking public a 50m</li>
                )}
              </ul>
              <p>
                <strong>Nombre d'hébergement disponible:</strong> {room.stock}
              </p>
              <p>
                {' '}
                <strong>Petit-déjeuner: </strong>
                {room.breakfast}/pers en suplement{' '}
                {room.category !== 'Hotel' &&
                  `(servis à l'hotel 46,
                boulevard de la plage)`}
              </p>
            </div>

            <div className='col-span-full text-center justify-center flex flex-col items-center'>
              <p className='font-bold text-3xl text-teal-600 my-4 '>
                Important
              </p>
              <p className='  font-bold mb-4'>
                Le check-in se fait à l'hotel au 46 boulevard de la plage
              </p>
              <div className='flex gap-2'>
                <TbWheelchairOff className=' text-2xl text-teal-600' />

                <p>Hébergement accessibles uniquement par les escaliers</p>
                <TbWheelchairOff className=' text-2xl text-teal-600' />
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default SingleRoom;
