import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
