import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth, Cargo, Trucks, ErrorPage } from './pages'

import { restrict } from './service/AuthService';

function App() {
  const [accessRight, setAccessRight] = useState('admin')
  return (
    <div className='root-elem'>
      <Router>
        <Navbar accessRight={accessRight}/>
        <Routes>
          <Route exact path='/auth' element={<Auth authType={''} setAccessRight={setAccessRight} />} />
          <Route path='/cargo' element={<Cargo accessRight={accessRight} />} />
          <Route path='/trucks' element={<Trucks accessRight={accessRight}/>} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
