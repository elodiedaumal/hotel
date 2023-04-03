import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <div className='w-32 h-32 rounded-full bg-white p-2 flex justify-center items-center'>
          <img className='' src={Logo} alt='hotel de la baie ' />
        </div>
      </div>
      <div className='block lg:hidden'>
        <button
          onClick={openSidebar}
          className='flex items-center px-3 py-2  text-teal-200 border-teal-400 hover:text-white hover:border-white text-2xl'
        >
          <FaBars />
        </button>
      </div>
      {sidebar && (
        <aside className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <Link
              to='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            >
              Home
            </Link>

            <Link
              to='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            >
              Our Rooms
            </Link>
            <Link
              to='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
            >
              Restaurant
            </Link>
            <Link
              to='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
            >
              Contact
            </Link>
            <Link
              to='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
            >
              Tourism
            </Link>
          </div>
          <div>
            <Link
              to='/'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
            >
              Book Now
            </Link>
          </div>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
