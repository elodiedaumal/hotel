import React, { useState, useEffect, useRef } from 'react';
import Photo from './SingleFotoTourism';

const searchUrl = `https://api.unsplash.com/search/photos/`;

const key = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const FotosTourism = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const [newImages, setNewImages] = useState(false);

  const fetchImages = async () => {
    setLoading(true);

    let url;
    const ulrPage = `&page=1`;
    const urlQuery = `&query=crozon`;

    url = `${searchUrl}${key}${ulrPage}${urlQuery}`;

    try {
      const rep = await fetch(url);
      const data = await rep.json();
      setPhotos((oldPhotos) => {
        return data.results;
      });
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setNewImages(false);
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  // const SerpApi = require('google-search-results-nodejs');
  // const search = new SerpApi.GoogleSearch('secret_api_key');

  // const params = {
  //   engine: 'google_images',
  //   ijn: '0',
  //   q: 'crozon',
  //   google_domain: 'google.com',
  //   hl: 'fr',
  //   gl: 'fr',
  // };

  // const callback = function (data) {
  //   console.log(data);
  // };

  // // Show result as JSON
  // search.json(params, callback);

  return (
    <section className='py-5 mx-auto  max-w-5xl'>
      <div className='w-11/12 mx-auto grid md:grid-cols-3 gap-2'>
        {photos.map((image, index) => {
          return <Photo key={index} {...image} />;
        })}
      </div>
      {loading && <div className='loading'></div>}
    </section>
  );
};

export default FotosTourism;
