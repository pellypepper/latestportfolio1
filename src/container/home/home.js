import React from "react";
import { FaInstagram, FaLinkedin} from "react-icons/fa"; // Import icons
import "./home.css"; // Import home.css file
import { FaGithub } from 'react-icons/fa';

export default function Home() {

    return (
        <main>
            <div className="home-grid">
                <section className="grid-1">
                    <h1>Hi, I'm Pelumi <span>Otegbola</span></h1>
                    <p>Full Stack Developer</p>
                    <div className="icon-div">
                        <a className="icons" href="https://www.instagram.com/iamdjppeliance"
                        target="_blank"
                         rel="noopener noreferrer" >
                          <FaInstagram size={40} style={{ color: '#E4405F' }} />

                        </a>
                        <a href="https://www.linkedin.com/in/pellypepper" 
                        target="_blank"
                        className="icons" 
                        rel="noopener noreferrer" >
                        <FaLinkedin size={40} style={{ color: '#0A66C2' }} />

                        </a>
                        <a href="https://www.github.com/pellypepper/" 
                        target="_blank"
                        className="icons" 
                        rel="noopener noreferrer" >
                          <FaGithub size={40}   />
                        </a>
                        
                    </div>
                    <div className="download-btn">
                        <a href="/assets/new.docx" download>
                            <button>Download CV</button>
                        </a>
                    </div>

                </section>

                <section className="grid-2">
          <img src="/assets/avatar.png" alt="avatar" />
        </section>



            </div>
        </main>
    )
}