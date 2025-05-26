import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#101B28] text-white py-32 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 text-[#00FF8C] drop-shadow-lg">
          Andreas Abrahamsen – Front-end developer
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto drop-shadow">
          I make user-friendly websites with React and Tailwind CSS. My focus is
          on creating responsive, accessible, and visually appealing web
          applications that enhance user experience.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-[#101B28] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
        >
          My Projects
        </button>
      </div>
    </section>
  );
}
