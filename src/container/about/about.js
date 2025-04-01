import React from "react";
import "./about.css";

export default function About() {
    return (
        <main className="about-main">
              <h1>About Me</h1>
            <div className="about-wrapper">
              
                <section className="section-1">
                    <div className="section-1-box">
                        <p>Hello, Im Pelumi Otegbola - a passionate Full Stack/Web Developer with over 2years experience.</p>
                        <p>I specialize in Web Development and Software Engineering, where i createseamless, user-friendly experience and solving real-life problems.</p>
                        <p>As a full stack developer, I manage both front-end and backend development which interest me to build high performance web apps with emphasis on clean, efficient code.</p>
                        <p>I hold B.S.C in Computer Science from  Higher Institute of Science, Biology and Applied Economy where i was introduced  to few programming language.</p>
                        <p>I started my career as a self taught developer  and i  further honed  my skills with bootcamp courses to stay upto date in the tech industry.</p>
                        <p>I have work as a freelance developer for months ,building innovative web application for business to create customized strategies and state-of-the-art solutions that drive growth , streamline operations and expand digital presence.</p>
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