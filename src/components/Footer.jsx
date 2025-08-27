// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white font-bold text-sm">
          © {new Date().getFullYear()} Ravi Raghul Panneerselvam. All rights reserved.
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm border border-white text-bold hover:font-bold hover:bg-purple-500  text-white px-3 py-1 rounded-xl  transition"
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
