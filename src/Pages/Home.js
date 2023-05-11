import React from 'react';
import Hero from '../Components/Hero';
import Featured from '../Components/Featured';
import Important from '../Components/Important';
import Reviews from '../Components/Reviews';
import Gallery from '../Components/Gallery';
import Map from '../Components/map';

const Home = () => {
  return (
    <>
      <Hero />
      <Map />
      <Featured />
      <Important />
      <Gallery />
      <Reviews />
    </>
  );
};

export default Home;
