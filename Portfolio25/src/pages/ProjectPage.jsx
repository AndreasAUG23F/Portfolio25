// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

import jsThumb from "../assets/images/bidifyLogo.png";
import semThumb from "../assets/images/lazy-sales-logo.png";
import examThumb from "../assets/images/logoHolidazeBlue.png";

const allProjects = [
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    description:
      "A sleek SPA demoing modern component-driven architecture with React, React Router and Tailwind CSS.",
    liveUrl: "https://yourdomain.com/js-frameworks",
    repoUrl: "https://github.com/username/js-frameworks",
    features: [
      "Dynamic routing with React Router",
      "Context-powered theme switcher",
      "Form handling & validation",
    ],
    screenshots: [jsThumb],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    id: "semester-2",
    title: "Semester Project 2",
    description:
      "An e-commerce prototype focused on performance and user-first flows, built with React and external APIs.",
    liveUrl: "https://yourdomain.com/semester-2",
    repoUrl: "https://github.com/username/semester-2",
    features: [
      "Product listing & filtering",
      "Cart management with localStorage",
      "Responsive mobile-first design",
    ],
    screenshots: [semThumb],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
  {
    id: "exam-2",
    title: "Exam Project 2",
    description:
      "A travel booking site optimized for speed, accessibility and UX, featuring search, detail pages and map integration.",
    liveUrl: "https://yourdomain.com/exam-2",
    repoUrl: "https://github.com/username/exam-2",
    features: [
      "Accessible components (ARIA, keyboard nav)",
      "Lazy-loaded images & code splitting",
      "Interactive map integration",
    ],
    screenshots: [examThumb],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
];

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#101B28] text-white p-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Project Not Found</h2>
          <Link to="/" className="text-[#00FF8C] hover:underline">
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#101B28] text-white py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* — Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-[#00FF8C]">{project.title}</h1>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00FF8C] text-[#101B28] px-5 py-2 rounded transition hover:bg-[#00e77a]"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#00FF8C] text-[#00FF8C] px-5 py-2 rounded transition hover:bg-[#00FF8C]/20"
            >
              View Code <FaGithub />
            </a>
          </div>
        </header>

        <hr className="border-gray-700" />

        {/* — Key Features */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00FF8C] mb-4">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            {project.features.map((f) => (
              <li key={f} className="flex items-start">
                <span className="text-[#00FF8C] mr-2">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-700" />

        {/* — Screenshots */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00FF8C] mb-4">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded"
              />
            ))}
          </div>
        </section>

        <hr className="border-gray-700" />

        {/* — Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00FF8C] mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4 text-gray-300">
            {project.tech.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-full text-sm"
              >
                <span className="text-[#00FF8C]">{t.icon}</span>
                <span>{t.name}</span>
              </span>
            ))}
          </div>
        </section>

        <hr className="border-gray-700" />

        {/* — Back to Home */}
        <div className="text-center">
          <Link to="/" className="text-gray-400 hover:text-white underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
