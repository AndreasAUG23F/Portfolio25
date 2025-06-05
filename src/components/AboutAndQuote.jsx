import React from "react";
import { motion } from "framer-motion";
import noroffLogo from "../assets/images/noroff-logo.png";

export default function AboutAndQuote() {
  return (
    <section className="py-20 px-4 bg-[#101B28] text-white">
      <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Teacher quote card */}
        <motion.blockquote
          className="relative bg-[#192432] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="italic text-gray-200 text-lg leading-relaxed">
            “Andreas has a keen eye for design and a clear talent for creating
            smooth, user-friendly interfaces. His ability to blend aesthetic
            sensibility with technical execution makes him a strong asset in any
            development environment.”
          </p>
          <footer className="mt-6 text-sm text-gray-400">
            — Talitha Kruger, Front-End Development Instructor at Noroff
          </footer>
        </motion.blockquote>

        {/* Noroff article link */}
        <motion.a
          href="https://www.noroff.no/nyheter/nytt-fra-noroff/2147-andreas-gar-fra-livvakt-til-utvikler"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center bg-[#192432] p-8 rounded-2xl shadow-lg hover:bg-[#233147] transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={noroffLogo}
            alt="Noroff logo"
            className="w-32 mb-6 opacity-80 group-hover:opacity-100 transition"
          />
          <h4 className="text-2xl font-semibold text-[#00FF8C] mb-2 text-center">
            Read My Noroff Feature
          </h4>
          <p className="text-gray-300 text-center">
            From bodyguard to developer—my journey at Noroff
          </p>
        </motion.a>
      </div>
    </section>
  );
}
