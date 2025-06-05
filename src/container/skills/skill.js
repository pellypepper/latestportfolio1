import React from "react";
import {
  FaReact, FaGitAlt, FaJsSquare, FaPython, FaBootstrap, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import {
  SiJquery, SiTypescript , SiNextdotjs, SiZustand, SiRedux, SiExpress, SiPostgresql, SiNodedotjs
} from "react-icons/si";
import { FiFigma } from 'react-icons/fi';
import "./skill.css";

export default function Skill() {
  const skills = [
    { id: 1, icon: <SiNodedotjs size={50} title="Node.js" color="#68A063" />, name: "Node.js" },
    { id: 2, icon: <FaJsSquare size={50} title="JavaScript" color="#F7DF1E" />, name: "JavaScript" },
    { id: 3, icon: <SiTypescript size={50} title="TypeScript" color="#F05033" />, name: "TypeScript" },
    { id: 4, icon: <FaPython size={50} title="Python" color="#306998" />, name: "Python" },
    { id: 5, icon:   <SiNextdotjs size={50} className="text-black" /> , name: "Next"},
    { id: 6, icon: <FaReact size={50} title="React" color="#61DBFB" />, name: "React" },
    { id: 7, icon: <SiExpress size={50}title="Express.js" color="#fff" />, name: "Express" },
    { id: 8, icon: <SiPostgresql size={50} title="PostgreSQL" color="#336791" />, name: "PostgreSQL" },
    { id: 9, icon: <FaBootstrap size={50} title="Bootstrap" color="#7952B3" />, name: "Bootstrap" },
    { id: 10, icon: <SiJquery size={50} title="jQuery" color="#0769AD" />, name: "jQuery" },
    { id: 11, icon: <SiRedux size={50} title="Redux" color="#764ABC" />, name: "Redux" },
    {id : 12, icon : <SiZustand size={50} className="text-green-600" />, name: "Zustand"},
    { id: 13, icon: <FaHtml5 size={50} title="HTML" color="#E34F26" />, name: "HTML" },
    { id: 14, icon: <FaCss3Alt size={50} title="CSS" color="#1572B6" />, name: "CSS" },
    { id: 15, icon: <FiFigma size={50} title="Figma" color="#F24E1E" />, name: "Figma" },
    { id: 16, icon: <FaGitAlt size={50} title="Git" color="#F05033" />, name: "Git" }
 
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="icon-grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill-icon">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

   
    
  );
}