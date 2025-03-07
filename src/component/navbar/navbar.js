import React from "react";
import { FaHome, FaUserAlt, FaTools, FaSuitcase } from "react-icons/fa"; // Importing icons from react-icons
import "./navbar.css"; // Importing the navbar.css file
import { NavLink } from "react-router-dom";

export const ROUTES = {
    About: "/about",
    Home: "/",
    Skill: "/skill",
    Project: "/project"
};

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.Home} activeClassName="active" aria-current="page">
                        <FaHome size={24} className="icon" />
                        <span className="nav-text">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.About} activeClassName="active">
                        <FaUserAlt size={24} className="icon" />
                        <span className="nav-text">About Me</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.Skill} activeClassName="active">
                        <FaTools size={24} className="icon" />
                        <span className="nav-text">Skills</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.Project} activeClassName="active">
                        <FaSuitcase size={24} className="icon" />
                        <span className="nav-text">Project</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
