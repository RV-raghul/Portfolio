import React from "react";
import Vedio2 from "../assets/Vedio2.gif";

function About() {
  return (
    <div className="Navbar relative max-w-4xl mx-auto my-10 px-4">
      {/* Glow border */}
      <div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40 opacity-60 blur-sm"
        aria-hidden="true"
      ></div>

      {/* Glass card */}
      <div
        className="relative z-10 rounded-2xl bg-[#141427]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 overflow-hidden"
      >
        {/* Inner content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl tracking-[0.3em] text-purple-300/70 uppercase mb-2">
              About
            </p>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-3">
              I am a Software Engineer with a strong foundation in backend development,
              specializing in SQL Server and RDLC reporting. Expanding into Full‑Stack
              Web Development, I now work extensively with the MERN stack
              (MongoDB, Express.js, React.js, Node.js).
            </p>

            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Passionate about creating scalable and user‑friendly web applications,
              with a focus on clean, maintainable code and seamless digital experiences.
            </p>

            {/* Tiny tags row */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#ad46ff]/10 text-[#f5e5ff] border border-[#ad46ff]/40">
                MERN
              </span>
              <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#ad46ff]/10 text-[#f5e5ff] border border-[#ad46ff]/40">
                SQL Server
              </span>
              <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#ad46ff]/10 text-[#f5e5ff] border border-[#ad46ff]/40">
                RDLC/SSRS
              </span>
            </div>
          </div>

          {/* Image/GIF Section */}
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-transparent opacity-60 blur-sm" />
              <img
                src={Vedio2}
                alt="About"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg shadow-black/50 border border-white/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
