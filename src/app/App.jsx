import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AllDishes } from '../features/dishes/AllDishes';
import { Header } from '../components/Layout/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllDishes />} />
      </Routes>
    </>
  );
}

export default App;
