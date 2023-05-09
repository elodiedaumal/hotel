import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 p-10 text-white '>
      <div className='grid md:grid-cols-3 gap-8 md:gap-2 justify-center '>
        <div className='flex flex-col gap-2  items-center'>
          <div className='w-24 h-24 rounded-full bg-white p-2 flex justify-center items-center '>
            <img className='' src={Logo} alt='hotel de la baie ' />
          </div>
          <div className='text-center text-md'>
            <p>46 boulevard de la plage</p>
            <p>+33 2 98 27 07 51</p>
          </div>
        </div>
        <div className='flex text-5xl gap-2 justify-center items-center'>
          <Link to='https://www.facebook.com/Hotel.DelaBaie/'>
            <FaFacebookSquare className='hover:text-teal-400' />
          </Link>
          <Link to='https://www.instagram.com/hotel.delabaie/?igshid=YmMyMTA2M2Y%3D'>
            <FaInstagramSquare className='hover:text-teal-400' />
          </Link>
        </div>
        <div className='text-sm flex flex-col  gap-2  items-center'>
          <Link to='/' className=' text-teal-200 hover:text-white '>
            Home
          </Link>

          <Link to='/rooms' className=' text-teal-200 hover:text-white '>
            Rooms
          </Link>
          <Link to='/cafe' className=' text-teal-200 hover:text-white'>
            Café de la Baie
          </Link>
          <Link to='/contact' className=' text-teal-200 hover:text-white'>
            Contact
          </Link>
          <Link to='/tourism' className=' text-teal-200 hover:text-white'>
            Tourism
          </Link>
          <button>
            <Link
              to='/'
              className='inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 '
            >
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
