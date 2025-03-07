import React, { Suspense, lazy } from 'react';

// Lazy load your components
const Home = lazy(() => import('./container/home/home'));
const About = lazy(() => import('./container/about/about'));
const Skill = lazy(() => import('./container/skills/skill'));
const Project = lazy(() => import('./container/project/project'));

const RouterProvider = lazy(() => import('react-router-dom').then(module => ({ default: module.RouterProvider })));
const createBrowserRouter = lazy(() => import('react-router-dom').then(module => ({ default: module.createBrowserRouter })));
const createRoutesFromElements = lazy(() => import('react-router-dom').then(module => ({ default: module.createRoutesFromElements })));
const Route = lazy(() => import('react-router-dom').then(module => ({ default: module.Route })));

function Main() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skill" element={<Skill />} />
      <Route path="project" element={<Project />} />
    </Route>
  ));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Main;
