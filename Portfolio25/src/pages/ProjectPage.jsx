// src/pages/ProjectPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
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

// Screenshots for JS Frameworks
import jsThumb from "../assets/images/bidifyLogo.png";
// Screenshots for Semester-2
import semThumb from "../assets/images/lazy-sales-logo.png";
// Screenshots for Holidaze (Exam-2)
import hsc1 from "../assets/images/hsc1.png";
import hsc2 from "../assets/images/hsc2.png";
import hsc3 from "../assets/images/hsc3.png";
import hsc4 from "../assets/images/hsc4.png";

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
    title: "Holidaze (Exam Project 2)",
    description:
      "A travel booking site optimized for speed, accessibility and UX, featuring search, detail pages and map integration.",
    liveUrl: "https://yourdomain.com/exam-2",
    repoUrl: "https://github.com/username/exam-2",
    features: [
      "Accessible components (ARIA, keyboard nav)",
      "Lazy-loaded images & code splitting",
      "Interactive map integration",
    ],
    screenshots: [hsc1, hsc2, hsc3, hsc4],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = allProjects.find((p) => p.id === projectId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? project.screenshots.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === project.screenshots.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-[#101B28] text-white py-16">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Lukkeknapp */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 bg-white p-2 rounded-full"
          >
            <FaTimes className="text-[#101B28] text-2xl" />
          </button>

          {/* Forrige */}
          <button
            onClick={prev}
            className="absolute left-6 bg-white p-2 rounded-full"
          >
            <FaChevronLeft className="text-[#101B28] text-2xl" />
          </button>

          {/* Bilde */}
          <img
            src={project.screenshots[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />

          {/* Neste */}
          <button
            onClick={next}
            className="absolute right-6 bg-white p-2 rounded-full"
          >
            <FaChevronRight className="text-[#101B28] text-2xl" />
          </button>
        </div>
      )}

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
              <div
                key={i}
                className="overflow-hidden rounded-lg cursor-pointer transform transition hover:scale-105"
                onClick={() => openModal(i)}
              >
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full object-cover"
                />
              </div>
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
