import Filters from '../Components/Filters';
import { useGlobalContext } from '../context';

const Rooms = () => {
  const {
    loading,
    rooms,
    selectGuests,
    selectBedrooms,
    selectPrice,
    text,
    setText,
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
      <div className='grid md:grid-cols-3 gap-5'>
        {rooms
          .sort((a, b) => b.price.total - a.price.rate)
          .filter((room) => room.persons === selectGuests)
          .filter((room) => room.price.rate < selectPrice)
          .filter((room) => room.bedrooms === selectBedrooms)
          .map((room) => (
            <div key={room.id}>
              <img
                className='w-[400px] h-[250px] rounded-md'
                src={room.images[0]}
                alt={room.name}
              />
              <div className='grid grid-rows-2 jus'>
                <h3 className='font-bold h-[56px]'>{room.name}</h3>
                <div className='flex justify-between text-teal-500 text-[15px] font-bold'>
                  <h4>Ideal for: {room.persons} persons</h4>
                  <h4>Price: {room.price.total}€</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Rooms;
