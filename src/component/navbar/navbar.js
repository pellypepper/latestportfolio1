import React from "react";
import { FaHome, FaUserAlt, FaTools,  FaSuitcase } from "react-icons/fa"; // Importing icons from react-icons
import "./navbar.css"; // Importing the navbar.css file
import {  NavLink } from "react-router-dom";

export const ROUTES = {
    About: "/about",
    Home: "/",
    Skill: "/skill",
    Project: "/project"
  };


export default function Navbar() {
    return(
   
            <nav>
                <ul>
                <NavLink to={ROUTES.Home} >
                    <li> <FaHome size={24} className="icon"  />
                    <span className="nav-text">Home</span></li>      </NavLink>
                    <NavLink to={ROUTES.About} >
                    <li><FaUserAlt size={24} className="icon"  />
                    <span className="nav-text">About Me</span></li>  </NavLink >
                    <NavLink to={ROUTES.Skill} >
                    <li><FaTools size={24} className="icon" />
                    <span className="nav-text">Skills</span></li> </NavLink >

                    <NavLink to={ROUTES.Project} >
                    <li><FaSuitcase size={24}className="icon"  />
                    <span className="nav-text">Project</span></li> </NavLink >
                </ul>
            </nav>

  
    )
}