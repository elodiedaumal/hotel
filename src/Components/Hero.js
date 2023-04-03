import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="bg-[url('../public/heroImg.jpg')] w-full h-[500px] bg-cover text-center flex justify-center items-center bg-center  ">
        <div
          className='
text-white drop-shadow-xl  '
        >
          <h1 className='text-5xl mb-5'>Welcome to the Hotel de la Baie</h1>
          <p className='text-xl '>Incredible view of Morgat's beach!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
