import React from "react";
import "./project.css";

export default function Project() {
  const projects = [
    {
      web: "https://companyrotasoftware-3f6dcaa37799.herokuapp.com",
      github: "https://github.com/pellypepper/Company-Management-Rota-Software",
      text: "A Real Life Project for a Company Rota System",
      image: "assets/rota.jpg",
      stack: "React, Node.js, Express, Postgres, Bootstrap, Heroku"
    },
    {
      web: "https://medmorestore.onrender.com/",
      text: "A Real Life Project for a Foodstuff Website",
      image: "assets/foodstuff.jpg",
      stack: "React, Node.js, Express, Postgres, Bootstrap, Render, Stripe"
    },
    {
      github: "https://github.com/pellypepper/Estate",
      web: "https://pellyestate.netlify.app",
      text: "A Real Estate website that showcases properties for sale",
      image: "assets/estate.jpg",
      stack: "React, Node.js, Express, Postgres, Bootstrap, Netlify"
    },
    {
      github: "https://github.com/pellypepper/oilrefinery",
      web: "https://pellyrefinery.netlify.app",
      text: "A Real Life Project for an Oil Refinery Company",
      image: "assets/oil.jpg",
      stack: "React, Bootstrap, SEO, Google Analytics, Netlify"
    },
    {
      github: "https://github.com/pellypepper/weather",
      web: "https://pellyweather.netlify.app",
      text: "Weather App using REST API",
      image: "assets/weather.jpg",
      stack: "React, Bootstrap, OpenAPI, Netlify"
    },
    {
      github: "https://github.com/pellypepper/appointment-app",
      web: "https://pellyappointment.netlify.app",
      text: "Appointment Planner that tracks user contacts and appointments",
      image: "assets/appointment.jpg",
      stack: "React, Bootstrap, Netlify"
    },
    {
      github: "https://github.com/pellypepper/onlinemarket",
      web: "https://pellyonlinemarket.netlify.app",
      text: "An E-commerce website that sells products online",
      image: "assets/ecommerce.jpg",
      stack: "React, Bootstrap, Netlify"
    },
    {
      github: "https://github.com/pellypepper/Django",
      web: "http://pellysticky-35c9341f2838.herokuapp.com",
      text: "A Notepad App using Django",
      image: "assets/notepad.jpg",
      stack: "Python, Django, Heroku"
    }
  ];

  return (
    <main className="project-wrapper">
      <h1>My Recent Projects</h1>
      <section className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="project-overlay">
                <p>{project.text}</p>
                <div className="project-buttons">
                  <a href={project.web} target="_blank" rel="noopener noreferrer">
                    <button>Live Demo</button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-details">
              <h2>Tech Stack: <span>{project.stack}</span></h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}