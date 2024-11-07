import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import  { ROUTES } from "./component/navbar/navbar";
import App from "./App"
import Home from "./container/home/home";
import About from "./container/about/about";
import Skill from "./container/skills/skill";
import Project from "./container/project/project";

function Main() {
  /* Add state variables and functions */
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <App/> }>
      <Route path={ROUTES.Home} element={  <Home/>} /> 
      <Route path={ROUTES.About} element={ <About />} /> 
      <Route path={ROUTES.Skill} element={ <Skill />} /> 
      <Route path={ROUTES.Project} element={ <Project/>} /> 
      
  
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default Main;
