import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AllDishes } from '../features/dishes/AllDishes';
import { Header } from '../components/Layout/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/menu" element={<AllDishes />} />
      </Routes>
    </>
  );
};
