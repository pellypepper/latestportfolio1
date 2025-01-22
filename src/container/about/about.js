import React from "react";
import "./about.css";

export default function About() {
    return (
        <main className="about-main">
              <h1>About Me</h1>
            <div className="about-wrapper">
              
                <section className="section-1">
                    <div className="section-1-box">
                    <p>I am a highly motivated and meticulous Web Developer with a solid background in  Node, JavaScript, React, Redux, Python, Django, HTML, CSS, Bootstrap, and Git. I build and deploy web apps, with an emphasis on clean, efficient code. Being a problem solver by nature, my interest has always been to share some technical know-how with an agile development team.

I'm well versed in web technologies and UI/UX design, and take great pride in the quality of my work. Now I am available for freelance writing. I am also open to full-time opportunities. I am a quick learner and a team player, and I am always looking for ways to improve my skills and knowledge.</p>
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