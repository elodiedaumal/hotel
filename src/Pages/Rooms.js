import Filters from '../Components/Filters';
import { useGlobalContext } from '../context';

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
      <div className='grid md:grid-cols-3 gap-x-5 gap-y-10'>
        {rooms
          .sort((a, b) => b.prix - a.prix)
          .filter((item) =>
            text === ''
              ? true
              : item.name.toLowerCase().includes(text.toLowerCase())
          )
          .filter((item) => (seaview === 'yes' ? item.seaView : item))
          .filter((item) => (Type !== 'all' ? item.category === Type : true))
          .filter((room) =>
            selectGuests !== 2 ? room.travelers === selectGuests : room
          )

          .filter((room) =>
            selectBedrooms !== 0 ? room.bedroom === selectBedrooms : room
          )
          .filter((item) => item.prix < sliderValue)
          .map((room) => (
            <div key={room.id}>
              <img
                className=' h-[250px] rounded-md'
                src={room.images[0]}
                alt={room.name}
              />
              <div className='grid grid-rows-2 jus'>
                <h3 className='font-bold '>{room.name}</h3>
                <div className='flex justify-between text-teal-500 text-[15px] font-bold'>
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
