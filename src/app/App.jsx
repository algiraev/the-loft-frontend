import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllDishes from '../features/dishes/AllDishes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllDishes />} />
    </Routes>
  );
}

export default App;
