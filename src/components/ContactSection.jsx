// ContactSection.jsx
import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your form endpoint or email service
    // await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) });
    setTimeout(() => setStatus("sent"), 800); // demo
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold mb-8 text-center">
        Contact
      </h2>

      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-[#24243e]/70 backdrop-blur-md shadow-lg" aria-hidden="true" />
        <div className="relative z-10 p-6 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: quick message */}
          <div className="text-center md:text-left">
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Feel free to reach out for opportunities, collaborations, or questions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:your.email@example.com"
                className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-2xl shadow hover:bg-purple-500 hover:text-white transition duration-300"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-raghul-panneerselvam-455495236/"
                target="_blank" rel="noopener noreferrer"
                className="border-2 border-white/20 text-white px-4 py-2 rounded-2xl shadow hover:bg-white/10 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank" rel="noopener noreferrer"
                className="border-2 border-white/20 text-white px-4 py-2 rounded-2xl shadow hover:bg-white/10 transition duration-300"
              >
                GitHub
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">Typically responds within 24 hours.</p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Message"
              className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full border-2 border-purple-500 text-purple-500 px-4 py-3 rounded-2xl shadow hover:bg-purple-500 hover:text-white transition duration-300 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-green-400 text-sm">Thanks! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
