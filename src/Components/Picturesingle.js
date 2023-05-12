import React, { useState } from 'react';

const Picturesingle = ({ images }) => {
  const [mainPicture, setMainPicture] = useState([images[0]]);

  return (
    <div className='grid h-full w-full grid-cols-1 gap-y-4'>
      <img
        className='h-96 w-full object-cover'
        src={mainPicture}
        alt='hotel de la baie'
      />
      <div className='grid grid-cols-4 justify-center items-center gap-4'>
        {images.map((picture, index) => {
          return (
            <img
              key={index}
              src={picture}
              alt='hotel de la baie'
              onClick={() => setMainPicture(picture)}
              className={
                mainPicture === picture
                  ? 'border-4 border-blue-500 rounded-md  w-32 cursor-pointer object-cover '
                  : 'rounded-md h-24 w-32  cursor-pointer object-cover'
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Picturesingle;
