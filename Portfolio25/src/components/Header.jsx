// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#101B28] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-white cursor-pointer hover:opacity-80">
            A2X
          </h1>
        </Link>
        <nav className="flex items-center space-x-6 uppercase font-medium text-white">
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center hover:text-[#00FF8C] transition focus:outline-none"
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50">
                <Link
                  to="/prosjekt/js-frameworks"
                  className="block px-4 py-2 text-[#101B28] hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  JavaScript Frameworks
                </Link>
                <Link
                  to="/prosjekt/semester-2"
                  className="block px-4 py-2 text-[#101B28] hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Semester Project 2
                </Link>
                <Link
                  to="/prosjekt/exam-2"
                  className="block px-4 py-2 text-[#101B28] hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Exam Project 2
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
