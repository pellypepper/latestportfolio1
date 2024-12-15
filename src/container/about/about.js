import React from "react";
import "./about.css";

export default function About() {
    return (
        <main className="about-main">
              <h1>About Me</h1>
            <div className="about-wrapper">
              
                <section className="section-1">
                    <div className="section-1-box">
                    <p>I am a driven and detail-oriented Web Developer with a strong foundation in Python, Node, JavaScript, React, HTML, CSS, Bootstrap, and Git. With a focus on clean, efficient code, I specialize in developing and deploying web applications. My passion for problem-solving fuels my desire to contribute technical expertise to a dynamic development team.

I have extensive experience working with web technologies and UI/UX design, consistently delivering high-quality work. Currently, I am available for freelance projects. If you have an idea you'd like to bring to life or need assistance with something specific, feel free to get in touch—I'd love to collaborate!</p>

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