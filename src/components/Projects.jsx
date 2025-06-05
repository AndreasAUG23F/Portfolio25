// src/components/ProjectsTimeline.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import jsThumb from "../assets/images/bidifyLogo.png";
import semThumb from "../assets/images/lazy-sales-logo.png";
import examThumb from "../assets/images/logoHolidazeBlue.png";

const projects = [
  {
    id: "semester-2",
    title: "Semester Project 2",
    date: "DEC 2024",
    description:
      "An e-commerce prototype focused on performance and user-first UX flows.",
    thumbnail: jsThumb,
  },
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    date: "JAN 2024",
    description:
      "A sleek SPA demoing modern frameworks in a component-driven architecture.",
    thumbnail: semThumb,
  },
  {
    id: "exam-2",
    title: "Exam Project 2",
    date: "MAY 2025",
    description:
      "A travel booking site optimized for speed, accessibility and delight.",
    thumbnail: examThumb,
  },
];

export default function ProjectsTimeline() {
  return (
    <section id="projects" className="py-20 bg-[#101B28] text-white">
      <h3 className="text-4xl font-bold text-center text-[#00FF8C] mb-12">
        My Projects
      </h3>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700/40 transform -translate-x-1/2" />

        {projects.map((proj, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-16 flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#00FF8C] h-4 w-4 rounded-full border-2 border-[#101B28]" />

              {/* Text */}
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-gray-800/70 p-6 rounded-xl shadow-lg">
                  <p className="text-sm text-gray-400 mb-1">{proj.date}</p>
                  <h4 className="text-2xl font-semibold text-[#00FF8C] mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-gray-300 mb-4">{proj.description}</p>
                  <Link
                    to={`/prosjekt/${proj.id}`}
                    className="inline-block bg-[#00FF8C] text-[#101B28] py-2 px-5 rounded-full font-medium hover:opacity-90 transition"
                  >
                    View Case →
                  </Link>
                </div>
              </div>

              {/* Hexagon thumbnail */}
              <div className="w-full md:w-1/2 flex justify-center px-4 mt-6 md:mt-0">
                <motion.img
                  src={proj.thumbnail}
                  alt={proj.title}
                  style={{
                    clipPath:
                      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  }}
                  className="h-40 w-40 object-cover shadow-2xl bg-gray-900"
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
