import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    description: "En teaser for JS frameworks-prosjektet med max 130 tegn.",
    thumbnail: "./assets/images/lazy-sales-logo.png",
  },
  {
    id: "semester-2",
    title: "Semester Project 2",
    description: "En teaser for Semester Project 2 med max 130 tegn.",
    thumbnail: "/images/semester-2-thumb.png",
  },
  {
    id: "exam-2",
    title: "Exam Project 2",
    description: "En teaser for Exam Project 2 med max 130 tegn.",
    thumbnail: "/images/exam-2-thumb.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-[#101B28]">
      <h3 className="text-3xl font-semibold mb-8 text-center text-[#00FF8C]">
        My projects
      </h3>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((proj) => (
          <Link
            key={proj.id}
            to={`/prosjekt/${proj.id}`}
            className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition"
          >
            <img
              src={proj.thumbnail}
              alt={`${proj.title} thumbnail`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2 text-[#101B28]">
                {proj.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {proj.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
