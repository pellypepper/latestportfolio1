import React from "react";
import { FaInstagram, FaLinkedin} from "react-icons/fa"; 
import "./home.css";
import { FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

    return (
        <main className="home-main">
            <div className="home-grid">
            <section className="grid-1">
    <h1>Hi, I'm Pelumi <span>Otegbola</span></h1>
    <p> <Typewriter
            words={['Full Stack Developer']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={120}
            deleteSpeed={70}
            delaySpeed={1000}
          /></p>
   
    <div className="icon-div">
        <a 
            className="icons" 
            href="https://www.instagram.com/iamdjppeliance"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
        >
            <FaInstagram size={40} style={{ color: '#E4405F' }} />
        </a>

        <a 
            href="https://www.linkedin.com/in/pellypepper" 
            target="_blank"
            className="icons" 
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
        >
            <FaLinkedin size={40} style={{ color: '#0A66C2' }} />
        </a>

        <a 
            href="https://www.github.com/pellypepper/" 
            target="_blank"
            className="icons" 
            rel="noopener noreferrer"
            aria-label="GitHub profile"
        >
            <FaGithub size={40} />
        </a>
    </div>

    <div className="download-btn">
        <a href="/assets/pelumi.pdf" download aria-label="Download CV">
            <button>Download CV</button>
        </a>
        
    </div>
</section>


                <section className="grid-2">
                <img src="/assets/avatar.webp" alt="avatar" width="200" height="200" />

        </section>


             


            

       
             

            </div>
        </main>
    )
}