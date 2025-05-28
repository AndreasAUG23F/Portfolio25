// src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#101B28] text-gray-300 py-16">
        <div className="w-full flex justify-between items-center px-8">
          {/* Branding flush to the left */}
          <span className="text-white text-5xl font-bold">A2X</span>

          {/* Footer nav flush to the right */}
          <nav className="flex items-center space-x-12">
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-[#00FF8C] transition-colors text-xl"
            >
              <FaHome className="mr-2 text-2xl" /> Home
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-gray-300 hover:text-[#00FF8C] transition-colors text-xl focus:outline-none"
            >
              <FaEnvelope className="mr-2 text-2xl" /> Contact
            </button>

            <Link
              to="#projects"
              className="flex items-center text-gray-300 hover:text-[#00FF8C] transition-colors text-xl"
            >
              <FaProjectDiagram className="mr-2 text-2xl" /> Projects
            </Link>
          </nav>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#101B28] p-8 rounded-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <h4 className="text-2xl font-semibold text-[#00FF8C] mb-6 text-center">
              Get in Touch
            </h4>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
