import React, { Suspense, useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTES } from "./component/navbar/navbar";
import App from "./App";
import Loader from "./component/loader/loader";

// Lazy load the components
const Home = React.lazy(() => import("./container/home/home"));
const About = React.lazy(() => import("./container/about/about"));
const Skill = React.lazy(() => import("./container/skills/skill"));
const Project = React.lazy(() => import("./container/project/project"));

function Main() {
  const [loading, setLoading] = useState(true);
 

  // Show loader for a set duration on first load and on route changes
  useEffect(() => {
    setLoading(true); // Start loading whenever route changes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show loader for 4 seconds
    return () => clearTimeout(timer);
  }, []); // Re-run on route change

  // Show the loader for 4 seconds before rendering the page
  if (loading) {
    return <Loader />; // Show loader while loading is true
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path={ROUTES.Home}
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.About}
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.Skill}
          element={
            <Suspense fallback={<Loader />}>
              <Skill />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.Project}
          element={
            <Suspense fallback={<Loader />}>
              <Project />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Main;
