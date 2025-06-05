import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const templateParams = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
    };

    emailjs
      .send(
        "service_838kasp",
        "template_66jucxr",
        templateParams,
        "ZWJJoqVe-5rZRSVDz"
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="user_name"
        placeholder="Your name"
        required
        className="w-full p-3 rounded bg-[#1f2a3a] text-white"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your email"
        required
        className="w-full p-3 rounded bg-[#1f2a3a] text-white"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your message"
        required
        className="w-full p-3 rounded bg-[#1f2a3a] text-white"
      />
      <button
        type="submit"
        className="w-full bg-[#00FF8C] text-[#101B28] py-3 rounded font-semibold hover:bg-[#00e77a] transition"
      >
        Send Message
      </button>

      {status === "success" && (
        <p className="text-green-400 text-center">Message sent!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center">
          Oops – please try again later.
        </p>
      )}
    </form>
  );
}
