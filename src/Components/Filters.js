import { useGlobalContext } from '../context';
import Range from './Range';

const Filters = () => {
  const { selectguests, selectbedrooms, text, setText, selectview, selectype } =
    useGlobalContext();

  const handleSubmit = (e) => {
    setText(e.target.value);
  };

  const flexfilter = 'flex flex-col gap-2';

  return (
    <section className='flex justify-between flex-col  sm:grid sm:grid-cols-2 sm:gap-x-5 lg:flex lg:flex-row '>
      <form className={flexfilter}>
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

      <form className={flexfilter}>
        <label htmlFor='guests'>N° of guests:</label>
        <select
          className='mb-5 border-2 p-1 rounded-md '
          name='guests'
          id='guests'
          onChange={selectguests}
        >
          <option value='2'>2-persons</option>
          <option value='3'>3-persons</option>
          <option value='4'>4-persons</option>
          <option value='5'>5-persons</option>
          <option value='6'>6-persons</option>
        </select>
      </form>

      <form className={flexfilter}>
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
      <form className={flexfilter}>
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
      <form className={flexfilter}>
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

      <Range />
    </section>
  );
};

export default Filters;
