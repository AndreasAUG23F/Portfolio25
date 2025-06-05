import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutAndQuote from "../components/AboutAndQuote";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101B28] text-white">
      <main>
        <Hero />
        <Projects />
        <AboutAndQuote />
        <Skills />
      </main>
    </div>
  );
}
