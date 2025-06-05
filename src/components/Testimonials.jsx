// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  const quotes = [
    {
      name: "Talitha Kruger",
      role: "Front-End Development Instructor at Noroff",
      quote:
        "Andreas has a keen eye for design and a clear talent for creating smooth, user-friendly interfaces. His ability to blend aesthetic sensibility with technical execution makes him a strong asset in any development environment.",
    },
    {
      name: "Jane Doe",
      role: "CEO, Imaginary Co.",
      quote: "Andreas delivered ahead of schedule—amazing work!",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#101B28]">
      <h3 className="text-3xl text-center text-[#00FF8C] font-semibold mb-8">
        What People Say
      </h3>
      <Swiper slidesPerView={1} loop autoplay={{ delay: 6000 }}>
        {quotes.map((q, i) => (
          <SwiperSlide key={i}>
            <blockquote className="max-w-2xl mx-auto text-center text-gray-200 italic">
              “{q.quote}”
            </blockquote>
            <p className="mt-4 text-center text-white font-semibold">
              — {q.name}, <span className="text-gray-300">{q.role}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
