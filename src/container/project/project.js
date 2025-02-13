import React, { Suspense, lazy } from "react";
import "./project.css";

// Lazy load individual project components
const ProjectCard = lazy(() => import("./projectCard"));

export default function Project() {
  const projects = [
    {
      web: "https://companyrotasoftware-3f6dcaa37799.herokuapp.com",
      github: "https://github.com/pellypepper/Company-Management-Rota-Software",
      text: "A Real Life Project for a Company Rota System",
      image: "assets/rota.webp",
      stack: "React, Node.js, Express, Postgres, Bootstrap, Heroku"
    },
    {
      web: "https://medmorestore.onrender.com/",
      text: "A Real Life Project for a Foodstuff Website",
      image: "assets/foodstuff.webp",
      stack: "React, Node.js, Express, Postgres, Bootstrap, Render, Stripe"
    },
    {
      github: "https://github.com/pellypepper/Estate",
      web: "https://pellyestate.netlify.app",
      text: "A Real Estate website that showcases properties for sale",
      image: "assets/estate.webp",
      stack: "React, Node.js, Express, Postgres, Bootstrap, Netlify"
    },
    {
      github: "https://github.com/pellypepper/oilrefinery",
      web: "https://taimyroil.com",
      text: "A Real Life Project for an Oil Refinery Company",
      image: "assets/oil.webp",
      stack: "React, Bootstrap, SEO, Google Analytics, Netlify"
    },
    {
      github: "https://github.com/pellypepper/siawebsite",
      web: "http://pellysia.netlify.app",
      text: "A Security Agency website that showcases services in Uk",
      image: "assets/sia.webp",
      stack: "React, Bootstrap, Netlify"
    },
    {
      github: "https://github.com/pellypepper/weather",
      web: "https://pellyweather.netlify.app",
      text: "Weather App using REST API",
      image: "assets/weather.webp",
      stack: "React, Bootstrap, OpenAPI, Netlify"
    },
    {
      github: "https://github.com/pellypepper/appointment-app",
      web: "https://pellyappointment.netlify.app",
      text: "Appointment Planner that tracks user contacts and appointments",
      image: "assets/appointment.webp",
      stack: "React, Bootstrap, Netlify"
    },
    {
      github: "https://github.com/pellypepper/onlinemarket",
      web: "https://pellyonlinemarket.netlify.app",
      text: "An E-commerce website that sells products online",
      image: "assets/ecommerce.webp",
      stack: "React, Bootstrap, Netlify"
    },
   
  ];

  return (
    <main className="project-wrapper">
      <h1>My Recent Projects</h1>
      <section className="project-grid">
        <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Suspense>
      </section>
    </main>
  );
}