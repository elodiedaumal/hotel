const Contact = () => {
  return (
    <>
      <header className='text-center'>
        <h2 className='text-2xl'>
          Horaires de la réception: de 9h à 12h et de 15h à 19h
        </h2>{' '}
        <h2 className='text-2xl'>
          N'hésitez pas à nous contacter au 02 98 27 07 51 ou
          hotel.delabaie@orange.fr
        </h2>
      </header>
      <form
        action='https://public.herotofu.com/v1/fdc69690-f3f9-11ed-b2e2-c10354b56774'
        method='post'
        accept-charset='UTF-8'
      >
        <div>
          <label for='name'>Your Name</label>
          <input name='Name' id='name' type='text' required />
        </div>
        <div>
          <label for='email'>Your Email</label>
          <input name='Email' id='email' type='email' required />
        </div>
        <div>
          <input type='submit' value='Download CTA' />
          <div
            className='flex-nowrap overflow-hidden absolute'
            aria-hidden='true'
          >
            <input
              type='text'
              name='_gotcha'
              tabindex='-1'
              autocomplete='off'
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
