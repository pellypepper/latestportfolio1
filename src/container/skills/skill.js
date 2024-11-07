import React from "react";
import { FaReact, FaGitAlt, FaJsSquare, FaPython, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJquery, SiRedux } from "react-icons/si";
import { FiFigma } from 'react-icons/fi';
import "./skill.css"; // Optional: CSS for styling

export default function Skill() {
    return (
        <div className="skills">
            <h1>My Skills</h1>
            <div className="icon-grid">
                <div className="skill-icon">
                    <FaReact size={70} color="#61DBFB" />
                    <p>React</p>
                </div>
                <div className="skill-icon">
                    <FaJsSquare size={70} color="#F7DF1E" />
                    <p>JavaScript</p>
                </div>
                <div className="skill-icon">
                    <FaPython size={70} color="#306998" />
                    <p>Python</p>
                </div>
                <div className="skill-icon">
                    <FaBootstrap size={70} color="#7952B3" />
                    <p>Bootstrap</p>
                </div>
                <div className="skill-icon">
                    <SiJquery size={70} color="#0769AD" />
                    <p>jQuery</p>
                </div>
                <div className="skill-icon">
                    <SiRedux size={70} color="#764ABC" />
                    <p>Redux</p>
                </div>
                <div className="skill-icon">
                    <FaHtml5 size={70} color="#E34F26" />
                    <p>HTML</p>
                </div>
                <div className="skill-icon">
                    <FaCss3Alt size={70} color="#1572B6" />
                    <p>CSS</p>
                </div>
                <div className="skill-icon">
                    <FiFigma size={70} color="#F24E1E" /> {/* Set size and Figma's brand color */}
                    <p>Figma</p>
                </div>
                <div className="skill-icon">
                    {/* Git Icon with specified color and size */}
                    <FaGitAlt color="#F05033" size={50} />
                    <p>Git</p>
                </div>
            </div>
        </div>
    );
}
