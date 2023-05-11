import React, { useEffect, useContext, useState } from 'react';
// import axios from 'axios';
import { RoomsData } from './utils';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState(RoomsData);
  const [text, setText] = useState('');
  const [selectGuests, setSelectGuests] = useState(2);
  const [selectBedrooms, setSelectBedrooms] = useState('all');
  const [selectPrice, setSelectPrice] = useState(175);
  const [seaview, setSeaview] = useState('all');
  const [Type, setType] = useState('all');

  // const optionsairbnb = {
  //   method: 'GET',
  //   url: 'https://airbnb13.p.rapidapi.com/search-location',
  //   params: {
  //     location: 'crozon',
  //     checkin: '2023-09-16',
  //     checkout: '2023-09-17',
  //     adults: '2',
  //     children: '0',
  //     infants: '0',
  //     pets: '0',
  //     page: '1',
  //     currency: 'EUR',
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': `${process.env.REACT_APP_ACCESS_KEY}`,
  //     'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  //   },
  // };

  // async function getRoomsAirbnb() {
  //   setLoading(true);
  //   try {
  //     const response = await axios(optionsairbnb);
  //     const data = response.data.results;
  //     setRooms(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getRoomsAirbnb();
  // }, []);

  const selectguests = (e) => {
    setSelectGuests(Number(e.target.value));
  };
  const selectbedrooms = (e) => {
    setSelectBedrooms(Number(e.target.value));
  };
  const selectprice = (e) => {
    setSelectPrice(Number(e.target.value));
  };
  const selectview = (e) => {
    setSeaview(e.target.value);
  };
  const selectype = (e) => {
    setType(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        rooms,
        text,
        setText,
        selectGuests,
        selectguests,
        selectbedrooms,
        selectBedrooms,
        selectprice,
        selectPrice,
        seaview,
        selectview,
        selectype,
        Type,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
