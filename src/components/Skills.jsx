// src/components/Skills.jsx
import React, { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import {
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const tools = [
  { icon: <SiFigma />, label: "Figma", level: 90 },
  { icon: <FaGithub />, label: "GitHub", level: 85 },
  { icon: <FaHtml5 />, label: "HTML5", level: 95 },
  { icon: <FaCss3Alt />, label: "CSS3", level: 90 },
  { icon: <SiJavascript />, label: "JavaScript", level: 80 },
  { icon: <SiTailwindcss />, label: "Tailwind CSS", level: 88 },
  { icon: <FaReact />, label: "React", level: 82 },
  { icon: <SiTypescript />, label: "TypeScript", level: 75 },
];

export default function Skills() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -240 : 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#101B28] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading & Microcopy */}
        <h3 className="text-4xl font-bold text-[#00FF8C] text-center mb-2">
          My Toolbox
        </h3>
        <p className="text-center text-gray-300 mb-8">
          Swipe or click arrows to explore the core tools I use every day.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#192432] p-2 rounded-full shadow-lg hover:bg-[#1f2a3a] z-10"
          >
            &#9664;
          </button>

          {/* Scrollable List */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-6"
          >
            {tools.map(({ icon, label, level }) => (
              <div
                key={label}
                className="snap-center min-w-[200px] bg-[#192432] rounded-xl p-6 flex-shrink-0 hover:shadow-2xl transition"
              >
                <div className="flex flex-col items-center">
                  <div className="text-5xl text-[#00FF8C] mb-2">{icon}</div>
                  <h4 className="text-lg font-semibold mb-3">{label}</h4>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div
                      className="bg-[#00FF8C] h-full rounded-full"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#192432] p-2 rounded-full shadow-lg hover:bg-[#1f2a3a] z-10"
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  );
}
