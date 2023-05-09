import { useGlobalContext } from '../context';

const Filters = () => {
  const {
    selectguests,
    selectbedrooms,
    selectprice,
    text,
    setText,
    selectview,
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
          <option value='1'>1-bedroom</option>
          <option value='2'>2-bedrooms</option>
          <option value='3'>3-bedrooms</option>
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
          <option value='125'>Less than 125€</option>
          <option value='100'>Less than 100€</option>
          <option value='75'>Less than 75€</option>
          <option value='50'>Less than 50€</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
