import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  // 👈 Your EmailJS credentials from .env
  const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        e.target,
        EMAILJS_PUBLICKEY
      );
      
      setStatus({ 
        state: "sent", 
        message: "Thanks! Your message has been sent. I'll reply within 24 hours." 
      });
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ 
        state: "error", 
        message: "Failed to send message. Please try again." 
      });
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* heading */}
      <div className="text-center mb-12">
        <p className="text-2xl tracking-[0.3em] text-purple-300/70 uppercase mb-2">
          Get in touch
        </p>
        <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          Open to full‑time roles, freelance projects, and collaborations.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* outer glow */}
        <div
          className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40 opacity-70 blur-xl"
          aria-hidden="true"
        />
        {/* Glass background */}
        <div className="relative rounded-2xl bg-[#141427]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 p-6 md:p-10">
          
          {/* Form - Full Width Centered */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
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
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-xl bg-white/5 border border-white/10 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#ad46ff]/60 resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full border border-[#ad46ff] text-white bg-[#ad46ff] px-6 py-4 rounded-2xl shadow-md text-base font-medium transition-all duration-300 hover:bg-[#9b31ff] hover:shadow-purple-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none focus:outline-none focus:ring-4 focus:ring-[#ad46ff]/30"
            >
              {status.state === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status.state === "sent" && (
              <p className="text-green-400 text-sm text-center font-medium">{status.message}</p>
            )}
            {status.state === "error" && (
              <p className="text-red-400 text-sm text-center">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
