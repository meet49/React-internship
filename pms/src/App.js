// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Card from './componets/Card';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cards' element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
