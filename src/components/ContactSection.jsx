import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    // TODO: Replace with real submission logic (Formspree, EmailJS, API, etc.)
    setTimeout(
      () => setStatus({ state: "sent", message: "Thanks! Your message has been sent." }),
      800
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* heading - FIXED: proper sizing and single intro */}
      <div className="text-center mb-8">
        <p className="text-2xl tracking-[0.3em] text-purple-300/70 uppercase mb-2">
          Get in touch
        </p>
        <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          Open to full‑time roles, freelance projects, and collaborations.
        </p>
      </div>

      <div className="relative">
        {/* outer glow */}
        <div
          className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40 opacity-70 blur-xl"
          aria-hidden="true"
        />
        {/* Glass background */}
        <div className="relative rounded-2xl bg-[#141427]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Left: quick message + social links - REMOVED DUPLICATE TEXT */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="mailto:ravipanneer2001@gmail.com"
                  className="group relative overflow-hidden border border-[#ad46ff] text-white bg-[#ad46ff] px-4 py-2 rounded-2xl shadow-md text-sm md:text-base transition duration-300 hover:bg-[#9b31ff] hover:shadow-purple-500/40 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Send Email</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravi-raghul-panneerselvam-455495236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white/90 px-4 py-2 rounded-2xl shadow-sm text-sm md:text-base transition duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/RV-raghul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white/90 px-4 py-2 rounded-2xl shadow-sm text-sm md:text-base transition duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Message"
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
                />
              </div>

              <button
                type="submit"
                disabled={status.state === "sending"}
                className="w-full border border-[#ad46ff] text-white bg-[#ad46ff] px-4 py-3 rounded-2xl shadow-md text-sm md:text-base font-medium transition duration-300 hover:bg-[#9b31ff] hover:shadow-purple-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status.state === "sent" && (
                <p className="text-green-400 text-sm">{status.message}</p>
              )}
              {status.state === "error" && (
                <p className="text-red-400 text-sm">
                  {status.message || "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
