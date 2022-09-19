import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Start from './components/Start/Start';
import Game from './components/Game/Game';
import Finish from './components/Finish/Finish';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path='/game' element={<div className='wrapper'><Game /></div>} />
      <Route path='/finish' element={<div className='wrapper'><Finish /></div>} />
      <Route path='' element={<div className='wrapper'><Start /></div>} />
    </Routes>
  )
}

export default App;