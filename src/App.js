
import './App.css';
import React from 'react';
import Navbar from './component/navbar/navbar';

import {  Outlet } from "react-router-dom";



function App() {
  return (
    <main>
          <Navbar />
          <Outlet />
    </main>
  );
}

export default App;
