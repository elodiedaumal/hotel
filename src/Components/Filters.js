import { useGlobalContext } from '../context';

const Filters = () => {
  const { selectguests, selectbedrooms, selectprice, text, setText } =
    useGlobalContext();

  const handleSubmit = (e) => {
    setText(e.target.value);
  };

  return (
    <section className='flex justify-between'>
      <form>
        <input
          type='text'
          placeholder='Search'
          value={text}
          onChange={handleSubmit}
          autoFocus
        />
      </form>
      <div>
        <form className='flex flex-col'>
          <label htmlFor='guests'>N° of guests:</label>
          <select
            className='mb-5 border-2 w-[110px]'
            name='guests'
            id='guests'
            onChange={selectguests}
          >
            <option value='2'>2-persons</option>
            <option value='4'>4-persons</option>
            <option value='6'>6-persons</option>
          </select>
        </form>
      </div>
      <div>
        <form className='flex flex-col'>
          <label htmlFor='bedrooms'>N° of Bedrooms:</label>
          <select
            className='mb-5 border-2 w-[130px]'
            name='bedrooms'
            id='bedrooms'
            onChange={selectbedrooms}
          >
            <option value='1'>1-bedroom</option>
            <option value='2'>2-bedrooms</option>
            <option value='3'>3-bedrooms</option>
          </select>
        </form>
      </div>
      <div>
        <form className='flex flex-col'>
          <label htmlFor='Price'>Price:</label>
          <select
            className='mb-5 border-2 w-[140px]'
            name='Price'
            id='price'
            onChange={selectprice}
          >
            <option value='125'>less than 125€</option>
            <option value='100'>less than 100€</option>
            <option value='75'>less than 75€</option>
            <option value='50'>less than 50€</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Filters;
