// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#101B28] shadow-sm">
      {/* Top bar: site title + either desktop nav or hamburger */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-white cursor-pointer hover:opacity-80">
            Andreas Abrahamsen
          </h1>
        </Link>

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:flex items-center space-x-6 uppercase font-medium text-white">
          <Link
            to="/"
            className="flex items-center hover:text-[#00FF8C] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0H7v12h10V11"
              />
            </svg>
            Home
          </Link>
          <Link
            to="/prosjekt/js-frameworks"
            className="hover:text-[#00FF8C] transition"
          >
            JS Frameworks
          </Link>
          <Link
            to="/prosjekt/semester-2"
            className="hover:text-[#00FF8C] transition"
          >
            Semester 2
          </Link>
          <Link
            to="/prosjekt/exam-2"
            className="hover:text-[#00FF8C] transition"
          >
            Exam 2
          </Link>
          <a
            href="https://github.com/AndreasAUG23F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-[#00FF8C] transition"
          >
            <FaGithub className="mr-1 h-5 w-5" />
            GitHub
          </a>
        </nav>

        {/* Mobile Hamburger / Close Button (hidden on md+) */}
        <button
          className="md:hidden text-white focus:outline-none z-60"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <FaTimes className="h-6 w-6 text-[#00FF8C] transition-colors duration-200" />
          ) : (
            <FaBars className="h-6 w-6 hover:text-[#00FF8C] transition-colors duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transform transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Sliding menu panel */}
        <div
          className={`absolute top-0 left-0 w-full bg-[#101B28] transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <Link
              to="/"
              className="text-2xl text-white hover:text-[#00FF8C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/prosjekt/js-frameworks"
              className="text-2xl text-white hover:text-[#00FF8C] transition"
              onClick={() => setMenuOpen(false)}
            >
              JS Frameworks
            </Link>
            <Link
              to="/prosjekt/semester-2"
              className="text-2xl text-white hover:text-[#00FF8C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Semester 2
            </Link>
            <Link
              to="/prosjekt/exam-2"
              className="text-2xl text-white hover:text-[#00FF8C] transition"
              onClick={() => setMenuOpen(false)}
            >
              Exam 2
            </Link>
            <a
              href="https://github.com/AndreasAUG23F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-2xl text-white hover:text-[#00FF8C] transition"
              onClick={() => setMenuOpen(false)}
            >
              <FaGithub className="mr-2 h-6 w-6" />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
