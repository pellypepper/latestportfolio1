import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTES } from "./component/navbar/navbar";
import App from "./App";

// Lazy load the components
const Home = React.lazy(() => import("./container/home/home"));
const About = React.lazy(() => import("./container/about/about"));
const Skill = React.lazy(() => import("./container/skills/skill"));
const Project = React.lazy(() => import("./container/project/project"));

function Main() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route
          path={ROUTES.Home}
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.About}
          element={
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.Skill}
          element={
            <Suspense fallback={<div>Loading Skill...</div>}>
              <Skill />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.Project}
          element={
            <Suspense fallback={<div>Loading Project...</div>}>
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
