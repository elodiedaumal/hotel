import Filters from '../Components/Filters';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const {
    loading,
    rooms,
    selectGuests,
    selectBedrooms,
    text,
    setText,
    seaview,
    Type,
    sliderValue,
  } = useGlobalContext();

  if (loading) {
    return <div className='loading'></div>;
  }
  return (
    <section className='mb-20 mx-auto max-w-5xl mt-10 text-lg px-3 '>
      <h2 className='font-bold text-3xl text-teal-600 mb-10 justify-center items-center text-center gap-10  flex '>
        Our Rooms
      </h2>
      <Filters text={text} setText={setText} />
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-10 justify-center'>
        {rooms
          .sort((a, b) => b.prix - a.prix)
          .filter((item) =>
            text === ''
              ? true
              : item.name.toLowerCase().includes(text.toLowerCase())
          )
          .filter((item) => (seaview === 'yes' ? item.seaView : true))
          .filter((item) => (Type !== 'all' ? item.category === Type : true))
          .filter((room) => room.travelers >= selectGuests)

          .filter((room) =>
            selectBedrooms !== 0 ? room.bedroom === selectBedrooms : true
          )
          .filter((item) => item.prix < sliderValue)
          .map((room) => (
            <div key={room.id}>
              <div className='relative  '>
                <Link to={`/${room.id}`} className=''>
                  <img
                    className=' h-[250px] rounded-md  '
                    src={room.images[0]}
                    alt={room.name}
                  />
                  <div
                    className='h-[250px] w-full absolute top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2 opacity-0 bg-white/20 hover:opacity-100'
                  >
                    <button
                      className='rounded-md bg-teal-600 px-4 py-2 text-white font-bold border-2 border-teal-600 hover:bg-white  hover:text-teal-600 hover:opacity-100 absolute top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2 '
                    >
                      Description
                    </button>
                  </div>
                </Link>
              </div>
              <div className='grid grid-rows-2 '>
                <h3 className='font-bold '>{room.name}</h3>
                <div className='flex justify-between text-teal-500  text-[15px] font-bold w-full'>
                  <h4>Ideal for: {room.travelers} persons</h4>
                  <h4>Price from: {room.prix}€</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Rooms;
