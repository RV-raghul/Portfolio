import React from "react";
import Vedio2 from "../assets/Vedio2.gif";

function About() {
  return (
    <div className="Navbar relative max-w-4xl mx-auto my-8 px-4">
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 rounded-2xl bg-[#24243e]/70 backdrop-blur-md shadow-lg z-0"
        aria-hidden="true"
      ></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6 md:p-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-[#ad46ff] font-bold mb-3">
            About Me
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-3">
            I am a Software Engineer with a strong foundation in backend development,
            specializing in SQL Server and RDLC reporting. Expanding into Full‑Stack
            Web Development, I now work extensively with the MERN stack
            (MongoDB, Express.js, React.js, Node.js).
          </p>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Passionate about creating scalable and user‑friendly web applications,
            with a focus on clean, maintainable code and seamless digital experiences.
          </p>

          {/* Optional tiny tags row */}
          <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#ad46ff]/15 text-[#e2c7ff] border border-[#ad46ff]/30">MERN</span>
            <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#ad46ff]/15 text-[#e2c7ff] border border-[#ad46ff]/30">SQL Server</span>
            <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#ad46ff]/15 text-[#e2c7ff] border border-[#ad46ff]/30">RDLC/SSRS</span>
          </div>
        </div>

        {/* Image/GIF Section */}
        <div className="shrink-0">
          <img
            src={Vedio2}
            alt="About"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
