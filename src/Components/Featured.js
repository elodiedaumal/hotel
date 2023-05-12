import React, { useState } from 'react';
import Room1 from '../Images/room4.jpg';
import Room2 from '../Images/room5.jpg';
import Room3 from '../Images/room7.jpg';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <section className='mb-20 mx-auto max-w-5xl mt-10 text-lg px-3 '>
      <h2 className='font-bold text-3xl text-teal-600 mb-10'>
        Our most popular rooms
      </h2>
      <div className='grid md:grid-cols-3 gap-5 mb-2'>
        <article className='rounded-lg p-2 relative text-center '>
          <img className=' w-full h-[200px] rounded-md' src={Room1} alt='' />

          <div className='opacity-0 hover:opacity-100  absolute top-4 left-0 text-white py-4 px-3 bg-teal-500/80'>
            <h3 className='font-bold text-xl text-center mb-2'>
              Standard double Room with sea view
            </h3>
            <p>
              Cozy room with incredible sea view. Double bed, shower,Tv, Kettle,
              Free tea and coffee.
            </p>
          </div>
        </article>
        <article className=' rounded-lg p-2 relative text-center '>
          <img className=' w-full h-[200px] rounded-md' src={Room2} alt='' />

          <div className='opacity-0 hover:opacity-100  absolute top-4 left-0 text-white py-4 px-3 bg-teal-500/80'>
            <h3 className='font-bold text-xl text-center mb-2'>
              Large studio double bed with sea view
            </h3>
            <p className='px-2'>
              Large studio with incredible sea view. Double bed, Kitchen, Sofa,
              2 Tvs, Free tea and coffee.
            </p>
          </div>
        </article>
        <article className=' rounded-lg p-2 relative text-center '>
          <img className='w-full h-[200px] rounded-md' src={Room3} alt='' />

          <div className='opacity-0 hover:opacity-100  absolute top-4 left-0 text-white py-4 px-3 bg-teal-500/80'>
            <h3 className='font-bold text-xl text-center mb-2'>
              Standard twin Room with sea view
            </h3>
            <p className='px-2'>
              Cozy room with incredible sea view. Twin bed, shower,Tv, Kettle,
              Free tea and coffee.
            </p>
          </div>
        </article>
      </div>
      <Link to='/rooms'>
        <p className='text-center text-teal-500'> See All Rooms</p>
      </Link>
    </section>
  );
};

export default Featured;
