import React from "react";

export default function About() {
  return (
    <section className="bg-[#101B28]-50 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="/images/profile.jpg"
          alt="Profilbilde"
          className="w-40 h-40 rounded-full border-4 border-[#00FF8C] shadow-lg"
        />
        <div className="max-w-xl text-center md:text-left">
          <h4 className="text-3xl font-semibold mb-4 text-[#00FF8C]">Om meg</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hello! My names is Andreas Abrahamsen. I am a front-end developer
            with a passion for creating beautiful and functional web
            applications. I specialize in React and Tailwind CSS, and I love
            turning ideas into reality through code. When I'm not coding, you
            can find me exploring new technologies or enjoying the great
            outdoors.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/username"
              className="text-[#101B28] hover:text-[#00FF8C] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/username"
              className="text-[#101B28] hover:text-[#00FF8C] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
