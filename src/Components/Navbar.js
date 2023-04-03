import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 '>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <div className='w-32 h-32 rounded-full bg-white p-2 flex justify-center items-center'>
          <img className='' src={Logo} alt='hotel de la baie ' />
        </div>
      </div>
      <div className='block md:hidden'>
        <button
          onClick={openSidebar}
          className='flex items-center px-3 py-2  text-teal-200 border-teal-400 hover:text-white hover:border-white text-2xl'
        >
          {sidebar ? <AiOutlineClose className='z-50' /> : <FaBars />}
        </button>
      </div>
      <div className=' hidden md:block'>
        <div className='text-lg flex justify-between gap-5 items-center'>
          <Link
            to='/'
            className='block mt-4  text-teal-200 hover:text-white mr-4'
          >
            Home
          </Link>

          <Link
            to='/'
            className='block mt-4  text-teal-200 hover:text-white mr-4'
          >
            Our Rooms
          </Link>
          <Link to='/' className='block mt-4  text-teal-200 hover:text-white'>
            Restaurant
          </Link>
          <Link to='/' className='block mt-4  text-teal-200 hover:text-white'>
            Contact
          </Link>
          <Link to='/' className='block mt-4  text-teal-200 hover:text-white'>
            Tourism
          </Link>
          <button>
            <Link
              to='/'
              className='ml-10 inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 '
            >
              Book Now
            </Link>
          </button>
        </div>
      </div>
      {sidebar && (
        <aside className='block h-screen w-3/4  md:hidden absolute top-0 right-0 bg-teal-500 p-10 mt-32 z-50'>
          <div className='text-lg'>
            <Link
              onClick={openSidebar}
              to='/'
              className='block mt-4  text-teal-200 hover:text-white mr-4'
            >
              Home
            </Link>

            <Link
              onClick={openSidebar}
              to='/'
              className='block mt-4  text-teal-200 hover:text-white mr-4'
            >
              Our Rooms
            </Link>
            <Link
              onClick={openSidebar}
              to='/'
              className='block mt-4  text-teal-200 hover:text-white'
            >
              Restaurant
            </Link>
            <Link
              onClick={openSidebar}
              to='/'
              className='block mt-4  text-teal-200 hover:text-white'
            >
              Contact
            </Link>
            <Link
              onClick={openSidebar}
              to='/'
              className='block mt-4  text-teal-200 hover:text-white'
            >
              Tourism
            </Link>
          </div>
          <div>
            <Link
              onClick={openSidebar}
              to='/'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4'
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
