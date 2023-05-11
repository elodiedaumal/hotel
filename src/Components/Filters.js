import { useGlobalContext } from '../context';

const Filters = () => {
  const {
    selectguests,
    selectbedrooms,
    selectprice,
    text,
    setText,
    selectview,
    selectype,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    setText(e.target.value);
  };

  return (
    <section className='flex justify-between'>
      <form className='flex flex-col'>
        <label htmlFor='guests'>Name of the room</label>
        <input
          type='text'
          placeholder='Search'
          value={text}
          onChange={handleSubmit}
          autoFocus
          className='mb-5 border-2 p-1 rounded-md'
        />
      </form>

      <form className='flex flex-col'>
        <label htmlFor='guests'>N° of guests:</label>
        <select
          className='mb-5 border-2 p-1 rounded-md '
          name='guests'
          id='guests'
          onChange={selectguests}
        >
          <option value='2'>2-persons</option>
          <option value='4'>4-persons</option>
          <option value='5'>5-persons</option>
          <option value='6'>6-persons</option>
        </select>
      </form>

      <form className='flex flex-col'>
        <label htmlFor='bedrooms'>N° of Bedrooms:</label>
        <select
          className='mb-5 border-2 p-1 rounded-md'
          name='bedrooms'
          id='bedrooms'
          onChange={selectbedrooms}
        >
          <option value='0'>All</option>
          <option value='1'>1-bedroom</option>
          <option value='2'>2-bedrooms</option>
        </select>
      </form>
      <form className='flex flex-col'>
        <label htmlFor='Type'>Type d'hébergement:</label>
        <select
          className='mb-5 border-2 p-1 rounded-md'
          name='Type'
          id='Type'
          onChange={selectype}
        >
          <option value='all'>All</option>
          <option value='Hotel'>Hotel</option>
          <option value='Gîte'>Gîte</option>
          <option value='Appartement'>Appartement</option>
        </select>
      </form>
      <form className='flex flex-col'>
        <label htmlFor='bedrooms'>Sea View:</label>
        <select
          className='mb-5 border-2 p-1 rounded-md'
          name='seaview'
          id='sewview'
          onChange={selectview}
        >
          <option value='all'>Indifferent</option>
          <option value='yes'>Yes</option>
        </select>
      </form>

      <form className='flex flex-col'>
        <label htmlFor='Price'>Price:</label>
        <select
          className='mb-5 border-2 p-1 rounded-md'
          name='Price'
          id='price'
          onChange={selectprice}
        >
          <option value='200'>Less than 200€</option>
          <option value='150'>Less than 150€</option>
          <option value='130'>Less than 130€</option>
          <option value='100'>Less than 110€</option>
          <option value='90'>Less than 90€</option>
          <option value='80'>Less than 80€</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
