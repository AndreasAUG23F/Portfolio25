import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section className="bg-[#101B28] text-white flex items-center justify-center min-h-screen px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-[#00FF8C] leading-tight">
            <Typewriter
              options={{
                strings: ["Andreas<br> Abrahamsen", "Front End Developer."],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </h2>
          <p className="text-lg text-gray-200 max-w-lg mx-auto lg:mx-0 drop-shadow">
            Let's build something that keeps users hooked from the first click.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#00FF8C] text-[#101B28] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
          >
            See my projects
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#]">
            <img
              src={profilePic}
              alt="Andreas Abrahamsen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 flex justify-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#9f9f9f] animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
