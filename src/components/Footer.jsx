import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101B28] text-gray-300 py-16">
      <div className="w-full flex justify-between items-center px-8">
        {/* Branding flush to the left */}
        <span className="text-white text-5xl font-bold">
          Andreas Abrahamsen
        </span>

        {/* Footer nav flush to the right */}
        <nav className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-[#00FF8C] transition-colors text-xl"
          >
            <FaHome className="mr-2 text-2xl" /> Home
          </Link>
        </nav>
      </div>
    </footer>
  );
}
