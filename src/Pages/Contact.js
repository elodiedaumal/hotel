const Contact = () => {
  return (
    <>
      <header className='text-center my-5 px-5'>
        <h2 className='text-3xl'>
          Horaires de la réception: de 9h à 12h et de 15h à 19h
        </h2>{' '}
        <h2 className='text-3xl'>
          N'hésitez pas à nous contacter au 02 98 27 07 51 ou
          hotel.delabaie@orange.fr
        </h2>
      </header>
      <div class='w-full md:w-96 md:max-w-full mx-auto my-10 px-5'>
        <div class='p-6 border border-gray-300 sm:rounded-md'>
          <form
            method='POST'
            action='https://public.herotofu.com/v1/fdc69690-f3f9-11ed-b2e2-c10354b56774'
          >
            <label class='block mb-6'>
              <span class='text-gray-700'>Your name</span>
              <input
                type='text'
                name='name'
                class='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder='Joe Bloggs'
              />
            </label>
            <label class='block mb-6'>
              <span class='text-gray-700'>Email address</span>
              <input
                name='email'
                type='email'
                class='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                placeholder='joe.bloggs@example.com'
                required
              />
            </label>
            <label class='block mb-6'>
              <span class='text-gray-700'>Message</span>
              <textarea
                name='message'
                class='
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          '
                rows='3'
                placeholder='We are here to help you. (Note that no booking can be made over email as a credit card number will be needed.)'
              ></textarea>
            </label>
            <div class='mb-6 text-right'>
              <button
                type='submit'
                class='
            h-10
            px-5
            text-indigo-100
            bg-teal-600
            rounded-lg
            border-2 border-teal-600
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-white hover:text-teal-600 hover:border-2 hover:border-teal-600
          '
              >
                Contact Us
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
