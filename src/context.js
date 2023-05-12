import React, { useEffect, useContext, useState } from 'react';
// import axios from 'axios';
import { RoomsData } from './utils';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [text, setText] = useState('');
  const [selectGuests, setSelectGuests] = useState(2);
  const [selectBedrooms, setSelectBedrooms] = useState(0);
  const [seaview, setSeaview] = useState('all');
  const [Type, setType] = useState('all');
  const [sliderValue, setSliderValue] = useState(200);
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    setLoading(false);
    setRooms(RoomsData);
  }, []);

  const selectguests = (e) => {
    setSelectGuests(Number(e.target.value));
  };
  const selectbedrooms = (e) => {
    setSelectBedrooms(Number(e.target.value));
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

        seaview,
        selectview,
        selectype,
        Type,
        sliderValue,
        setSliderValue,
        singleProduct,
        setSingleProduct,
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
