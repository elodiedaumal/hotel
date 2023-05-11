import React from 'react';

const Hero = () => {
  return (
    <section className='mb-20'>
      <div className=" bg-[url('../public/front.jpg')] w-full h-[500px] bg-cover text-center flex justify-center items-center bg-center  ">
        <div
          className='
text-white drop-shadow-md font-bold bg-slate-900/20 p-5 rounded-lg '
        >
          <h1 className='text-5xl mb-5 drop-shadow-md'>
            Welcome to the Hotel de la Baie
          </h1>
          <p className='text-2xl text-teal-300 drop-shadow-md '>
            Incredible view of Morgat's beach!
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-5xl mt-10 text-center text-lg px-3'>
        <p className='mb-4'>
          Located in front of the <strong>sandy beach of Morgat</strong> , this
          hotel features en suite rooms with free Wi-Fi, a breakfast room and a
          terrace with a sea view. The Crozon-Morgat Bus Station is 2 km away.
        </p>
        <p className='mb-4'>
          Decorated with <strong>warm colours</strong> , the rooms at Hôtel de
          la Baie have a private bathroom with a shower, an LCD TV and tea and
          coffee facilities.
        </p>
        <p className='mb-4'>
          A <strong>breakfast</strong> is served in the breakfast room. The
          Crozon market takes place several days per week and offers local
          produce.
        </p>
        <p>
          The Quimper Train Station is 55 km away. Crozon is an 8-minute drive
          and features <strong>many shops and music entertainment</strong>
          during its famous summer festival. Guipavas Airport is 1 hour by car
          and there is free public parking at a location nearby.
        </p>
      </div>
    </section>
  );
};

export default Hero;
