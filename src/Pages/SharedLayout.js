import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
