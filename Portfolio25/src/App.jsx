// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      {/* site-wide header */}
      <Header />

      <Routes>
        {/* home */}
        <Route path="/" element={<LandingPage />} />

        {/* project detail */}
        <Route path="/prosjekt/:projectId" element={<ProjectPage />} />

        {/* legacy or mistyped URLs redirect to home */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* site-wide footer */}
      <Footer />
    </BrowserRouter>
  );
}
