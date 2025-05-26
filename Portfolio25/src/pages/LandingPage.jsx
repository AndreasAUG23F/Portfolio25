import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    // Full‐page blue background
    <div className="flex flex-col min-h-screen bg-[#101B28] text-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
