import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    // TODO: Replace with your real submission method:
    // Option A: Formspree hook
    // Option B: EmailJS sendForm
    // Option C: POST to your API route (/api/contact)
    // Simulated delay:
    setTimeout(() => setStatus({ state: "sent", message: "Thanks! Your message has been sent." }), 800);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl text-[#ad46ff] font-bold mb-8 text-center">
        Contact
      </h2>

      <div className="relative">
        {/* Glass background */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#24243e]/70 backdrop-blur-md shadow-lg"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 rounded-2xl">
          {/* Left: quick message + social links */}
          <div className="text-center md:text-left">
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Feel free to reach out for roles, collaborations, or questions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:ravipanneer2001@gmail.com"
                className="border-2 border-[#ad46ff] text-white bg-[#ad46ff] px-4 py-2 rounded-2xl shadow hover:bg-[#9b31ff] transition"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-raghul-panneerselvam-455495236/"
                target="_blank" rel="noopener noreferrer"
                className="border-2 border-white/20 text-white px-4 py-2 rounded-2xl shadow hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/RV-raghul"
                target="_blank" rel="noopener noreferrer"
                className="border-2 border-white/20 text-white px-4 py-2 rounded-2xl shadow hover:bg-white/10 transition"
              >
                GitHub
              </a>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Typically responds within 24 hours.
            </p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Message"
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full border-2 border-[#ad46ff] text-white bg-[#ad46ff] px-4 py-3 rounded-2xl shadow hover:bg-[#9b31ff] transition disabled:opacity-60"
            >
              {status.state === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status.state === "sent" && (
              <p className="text-green-400 text-sm">{status.message}</p>
            )}
            {status.state === "error" && (
              <p className="text-red-400 text-sm">{status.message || "Something went wrong. Please try again."}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
