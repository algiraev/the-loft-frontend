import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import AllDishes from '../features/dishes/AllDishes';

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
