import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Skills from "../components/Skills";
import About from "../components/About";
import ContactBanner from "../components/ContactBanner";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101B28] text-white">
      <Header />
      <Hero />
      <Projects />
      <Testimonials />
      <Skills />
      <About />
      <Footer />
      <ContactBanner />
    </div>
  );
}
