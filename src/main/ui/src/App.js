import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth, ErrorPage, Cargo, Trucks, Drivers, Trailers, Users, Profile } from './pages'

import { restrict, isAuthorised } from './service/AuthService';

function App() {
  const [accessRight, setAccessRight] = useState('none')
  const [username, setUsername] = useState('')
  return (
    <div className='root-elem'>
      <Router>
        <Navbar accessRight={accessRight} />
        <div className='body'>
          <Routes>
            <Route exact path='/auth' element={<Auth authType={''} setAccessRight={setAccessRight} />} />
            <Route path='/cargo' element={<Cargo accessRight={accessRight} />} />
            <Route path='/trucks' element={<Trucks accessRight={accessRight} />} />
            <Route path='/trailers' element={<Trailers accessRight={accessRight} />} />

            {isAuthorised(accessRight) &&
              <Route path='/profile' element={<Profile accessRight={accessRight} username={username} />} />}

            {restrict(accessRight, 'operator') &&
              <Route path='/drivers' element={<Drivers accessRight={accessRight} />} />}

            {restrict(accessRight, 'admin') &&
              <Route path='users' element={<Users accessRight={accessRight} />} />}

            {!isAuthorised(accessRight) &&
              <Route path='/login' element={<Auth authType={'login'} setAccessRight={setAccessRight} setUsername={setUsername} />} />}

            {!isAuthorised(accessRight) &&
              <Route path='/register' element={<Auth authType={'register'} setAccessRight={setAccessRight} setUsername={setUsername} />} />}

            {isAuthorised(accessRight) &&
              <Route path='/logout' element={<Auth authType={'logout'} setAccessRight={setAccessRight} setUsername={setUsername} />} />}

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
