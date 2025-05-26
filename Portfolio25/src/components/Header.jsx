import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#101B28] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold text-white">Ola Nordmann</h1>
        <nav className="flex space-x-6 uppercase font-medium">
          <Link to="/" className="text-white hover:text-[#00FF8C] transition">
            Home
          </Link>
          <Link
            to="/prosjekt/js-frameworks"
            className="text-white hover:text-[#00FF8C] transition"
          >
            Prosjekt 1
          </Link>
          <Link
            to="/prosjekt/semester-2"
            className="text-white hover:text-[#00FF8C] transition"
          >
            Prosjekt 2
          </Link>
          <Link
            to="/prosjekt/exam-2"
            className="text-white hover:text-[#00FF8C] transition"
          >
            Prosjekt 3
          </Link>
        </nav>
      </div>
    </header>
  );
}
