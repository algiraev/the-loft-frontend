import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import AllDishes from '../features/dishes/AllDishes';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllDishes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
