// src/pages/ProjectPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCopy,
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

// Logos (thumbnail images) for each project
import jsLogo from "../assets/images/bidifyLogo.png";
import semLogo from "../assets/images/lazy-sales-logo.png";
import examLogo from "../assets/images/LogoHolidazeBlue.png";

// Screenshots for JS Frameworks
import jsThumb from "../assets/images/bidifyLogo.png";
import lssc1 from "../assets/images/lssc1.jpg";
import lssc2 from "../assets/images/lssc2.jpg";
import lssc3 from "../assets/images/lssc3.jpg";
import lssc4 from "../assets/images/lssc4.jpg";
// Screenshots for Semester‐2
import semThumb1 from "../assets/images/bidifysc-1.jpg";
import semThumb2 from "../assets/images/bidifysc-2.jpg";
import semThumb3 from "../assets/images/bidifysc-3.png";
import semThumb4 from "../assets/images/bidifysc-4.jpg";
// Screenshots for Holidaze (Exam‐2)
import hsc1 from "../assets/images/hsc1.jpg";
import hsc2 from "../assets/images/hsc2.jpg";
import hsc3 from "../assets/images/hsc3.jpg";
import hsc4 from "../assets/images/hsc4.jpg";

const allProjects = [
  {
    id: "js-frameworks",
    title: "JavaScript Frameworks",
    description:
      "A sleek SPA demoing modern component-driven architecture with React, React Router and Tailwind CSS. In this project, I optimized component reusability, improved client-side routing, and added dark-mode support. Below you’ll find reflections on how I honed these skills and further improvements I could make.",
    logo: semLogo,
    liveUrl: "https://lazysales.netlify.app/",
    repoUrl: "https://github.com/annechh/ca-js-frameworks?tab=readme-ov-file",
    features: [
      "Dynamic routing with React Router",
      "Context-powered theme switcher",
      "Form handling & validation",
    ],
    screenshots: [lssc1, lssc2, lssc3, lssc4],
    tech: [
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      { name: "JavaScript", icon: <SiJavascript size={20} /> },
      { name: "HTML5", icon: <FaHtml5 size={20} /> },
      { name: "CSS3", icon: <FaCss3Alt size={20} /> },
    ],
    reflections:
      "Based on feedback, I added JSDoc comments to improve documentation. Going forward, I’d integrate TypeScript to catch potential type errors earlier and further modularize components.",
  },
  {
    id: "semester-2",
    title: "Semester Project 2",
    description:
      "An e-commerce prototype focused on performance and user-first flows, built with React and Noroff’s external APIs. I implemented product listing, filtering, cart persistence, and mobile-first responsiveness. Below are my reflections and how I applied feedback.",
    logo: jsLogo,
    liveUrl: "https://bidify-semesterproject.netlify.app/",
    repoUrl:
      "https://github.com/AndreasAUG23F/Bidify-SemesterProject-2/blob/main/README.md",
    features: [
      "Product listing & filtering",
      "Cart management with localStorage",
      "Responsive mobile-first design",
    ],
    screenshots: [semThumb1, semThumb2, semThumb3, semThumb4],
    tech: [
      { name: "Figma", icon: <SiFigma size={20} /> },
      { name: "JavaScript", icon: <SiJavascript size={20} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      { name: "HTML5", icon: <FaHtml5 size={20} /> },
    ],
    reflections:
      "I refactored the Create Listing feature by extracting all preview, media-field, and form-submission logic into dedicated modules, improving code organization and maintainability without altering existing functionality.",
  },
  {
    id: "exam-2",
    title: "Holidaze (Exam Project 2)",
    description:
      "A travel booking site optimized for speed, accessibility and UX, featuring search, detail pages, and map integration. For this exam, I focused on ARIA compliance, code-splitting, and lazy-loaded media. My reflections are summarized below.",
    logo: examLogo,
    liveUrl: "https://holidazer.netlify.app/",
    repoUrl: "https://github.com/Andreasjoa23/PE2-Holidaze/blob/main/README.md",
    features: [
      "Accessible components (ARIA, keyboard navigation)",
      "Lazy-loaded images & code splitting",
      "Interactive map integration",
    ],
    screenshots: [hsc1, hsc2, hsc3, hsc4],
    tech: [
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      { name: "TypeScript", icon: <SiTypescript size={20} /> },
      { name: "HTML5", icon: <FaHtml5 size={20} /> },
      { name: "CSS3", icon: <FaCss3Alt size={20} /> },
      { name: "Figma", icon: <SiFigma size={20} /> },
    ],
    reflections:
      "This project is being graded by an external examiner, so I will not be able to share my reflections until after the exam is finalized.My partner and I worked together on this assignment to build an online booking website. It was our first time working with TypeScript, and the experience was both exciting and challenging. I really enjoyed exploring it, and I plan to spend more time practicing and improving my TypeScript skills in the future.",
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

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <main className="bg-[#101B28] text-white py-16">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 bg-white p-2 rounded-full"
          >
            <FaTimes className="text-[#101B28] text-2xl" />
          </button>

          {/* Previous */}
          <button
            onClick={prev}
            className="absolute left-6 bg-white p-2 rounded-full"
          >
            <FaChevronLeft className="text-[#101B28] text-2xl" />
          </button>

          {/* Screenshot */}
          <img
            src={project.screenshots[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-6 bg-white p-2 rounded-full"
          >
            <FaChevronRight className="text-[#101B28] text-2xl" />
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* — Header with Logo Thumbnail and Copy Link */}
        <header className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-12 h-12 rounded-md border border-gray-500"
            />
            <h1 className="text-3xl font-bold text-[#00FF8C]">
              {project.title}
            </h1>
          </div>
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-2 bg-[#00FF8C] text-[#101B28] px-4 py-2 rounded hover:bg-[#00e77a] transition"
          >
            <FaCopy className="text-xl" />
            <span>Copy URL</span>
          </button>
        </header>

        {/* — Detail Description */}
        <section>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </section>

        {/* — Live & Code Links */}
        <section className="flex flex-wrap gap-4">
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
        </section>

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

        {/* — Main Article Image with Caption */}
        <section>
          <figure className="text-center">
            <img
              src={project.screenshots[0]}
              alt={`${project.title} main screenshot`}
              className="mx-auto w-full max-w-lg rounded-lg shadow-lg"
            />
            <figcaption className="mt-2 text-gray-400 italic">
              {project.title} – main screenshot
            </figcaption>
          </figure>
        </section>

        <hr className="border-gray-700" />

        {/* — Additional Screenshots Gallery */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00FF8C] mb-4">
            Additional Screenshots
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

        {/* — Reflections & Improvements */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00FF8C] mb-4">
            Reflections & Improvements
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {project.reflections}
          </p>
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
