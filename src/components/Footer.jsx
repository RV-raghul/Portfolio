// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#141427]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40">
          {/* faint glow strip */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500/60 via-fuchsia-500/40 to-indigo-500/60"
            aria-hidden="true"
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-4 md:px-6 md:py-4">
            <div className="text-xs md:text-sm text-white/70">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Ravi Raghul Panneerselvam
              </span>
              . All rights reserved.
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 text-xs md:text-sm border border-white/30 text-white/90 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-purple-500 hover:border-purple-400 hover:text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/40"
              aria-label="Back to top"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                ↑
              </span>
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
