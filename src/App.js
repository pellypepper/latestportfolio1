
import './App.css';
import React from 'react';
import Navbar from './component/navbar/navbar';

import {  Outlet } from "react-router-dom";



function App() {
  return (
    <main className='t-section'>
    <div className='navbar-section'>
      
          <Navbar />
    </div>
          <div className='outlet-section'>
          <Outlet />
          </div>
    </main>
  );
}

export default App;
