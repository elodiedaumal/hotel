import React from 'react';
import { TbWheelchairOff } from 'react-icons/tb';

const Important = () => {
  return (
    <section className='mb-20 mx-auto max-w-5xl mt-10 text-lg px-3 '>
      <h2 className='font-bold text-3xl text-teal-600 mb-10 justify-center items-center text-center gap-10  flex '>
        <span>
          <TbWheelchairOff className=' text-2xl ' />
        </span>
        Important informations
        <span>
          <TbWheelchairOff className=' text-2xl ' />
        </span>
      </h2>
      <div className='flex gap-5 items-center'>
        <div className='flex gap-1'>
          <div className='bg-teal-500 w-1 h-[80px]'></div>
          <div className='bg-teal-500 w-1 h-[80px]'></div>
        </div>
        <p className='text-center md:text-left'>
          We do not have accommodation adapted to the new standards for
          accessibility for people with reduced mobility and have obtained an
          exemption from the prefecture. However, the breakfast room, the tea
          room and the terrace are wheelchair accessible. Do not hesitate to
          contact us for more information.
        </p>
        <div className='flex gap-1'>
          <div className='bg-teal-500 w-1 h-[80px]'></div>
          <div className='bg-teal-500 w-1 h-[80px]'></div>
        </div>
      </div>
    </section>
  );
};

export default Important;
