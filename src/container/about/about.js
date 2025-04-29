import React from "react";
import "./about.css";

export default function About() {
    return (
        <main className="about-main">
              <h1>About Me</h1>
            <div className="about-wrapper">
              
                <section className="section-1">
                    <div className="section-1-box">
                        <p>Hello, Im Pelumi Otegbola - a Full Stack/Web Developer , im originally from Nigeria but i based in England, Uk.</p>
                        <p>I specialize in Web Development and Software Engineering, where i create seamless, user-friendly experience and solving real-life problems.</p>
                        <p>As a full stack developer, I manage both front-end and backend development which interest me to build high performance web apps with emphasis on clean, efficient code.</p>
                        <p>My journey in tech started with a bachelor degree in Computer Science where i was introduced  to few programming languages which has given me strong background in both hardware and software systems and  i  further honed  my skills with bootcamp courses to stay upto date in the tech industry .</p>
                        <p>Currently i specialize full stack development in  building innovative web application for business to create customized strategies and state-of-the-art solutions that drive growth , streamline operations and expand digital presence.</p>
                        <p>Im always looking for opportunities  to contribute to impactful projects, continously learning new technologies and collaborating with like minded developer</p>
                        <p>When im not coding , you will find me watching a movie or sleeping or exploring the latest in tech innovations</p>
                        <p>To learn more about me , Click the button to contact me </p>
                         </div>
                               </section>

                <section className="section-2">
                    <h1>Get In Touch</h1>

                    <p  >PPELIANCE@GMAIL.COM</p>
                    <button><a href="mailto:ppeliance@gmail.com?subject=Enquiry&body=Enquiry%20there%20I%20would%20like%20to%20inquire%20about%20your%20services...">
                        Send an Mail
                    </a></button>
                    <p >+44 07542955386</p>
                    <button>< a href="https://wa.me/447542955386">
                        Send a Message on WhatsApp
                    </a></button>
                </section>
            </div>

        </main>
    )
}