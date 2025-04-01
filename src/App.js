
import './App.css';
import React,{useState, useEffect} from 'react';
import Navbar from './component/navbar/navbar';
import Loader from "./component/loader/loader";
import {  Outlet , useLocation} from "react-router-dom";



function App() {
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main className='t-section'>
    <div className='navbar-section'>
      
          <Navbar />
    </div>
          <div className='outlet-section'>
         {routeLoading ? <Loader /> : <Outlet />}
          </div>
           
          <footer className='footer-section'>
           <div>
             <p>Designed and Developed by Pelumi Otegbola</p>
             <p>Copyright© 2025</p>
             </div>
            </footer>
        
    </main>
  );
}

export default App;
