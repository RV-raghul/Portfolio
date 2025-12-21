import React from "react";
import HomeImage from "../assets/Vedio.gif";

function Home() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-20 md:pt-20 md:pb-24">
      {/* Glow border */}
      <div
        className="absolute inset-x-4 md:inset-x-0 -z-10 top-10 h-[320px] md:h-[360px] rounded-3xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40 opacity-70 blur-xl"
        aria-hidden="true"
      />

      {/* Glass hero card */}
      <div className="relative rounded-3xl bg-[#141427]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/50 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 p-6 md:p-10">
          {/* Left: Text + CTAs */}
          <div className="text-center md:text-left flex flex-col gap-3 max-w-md">
            <p className="text-2xl tracking-[0.3em] text-purple-300/70 uppercase">
              Software Engineer
            </p>

            <h1 className="text-white font-medium text-base md:text-lg">
              Hello, I'm
            </h1>

            <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">
              Ravi Raghul Panneerselvam
            </h2>

            <p className="text-white/90 font-medium text-lg md:text-2xl">
              <span className="text-[#ad46ff]">MERN Stack</span>
            </p>

            {/* Short value line (optional but recommended) */}
            <p className="text-white/70 text-sm md:text-base mt-2">
              Building scalable, data‑driven web applications with clean
              architecture and smooth user experiences.
            </p>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#projects"
                className="group relative overflow-hidden border border-[#ad46ff] bg-[#ad46ff] text-white px-5 py-2.5 rounded-2xl shadow-md text-sm md:text-base font-medium transition duration-300 hover:bg-[#9b31ff] hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </a>

              <a
                href="/Ravi Raghul P.pdf"
                download
                className="border border-white/25 text-white/90 px-5 py-2.5 rounded-2xl shadow-sm text-sm md:text-base font-medium transition duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ravi-raghul-panneerselvam-455495236/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#ad46ff] p-2.5 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#ad46ff]"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M6.5 8A1.5 1.5 0 1 0 6.5 5 1.5 1.5 0 0 0 6.5 8Z" fill="#fff"></path>
                  <path
                    d="M5 10c0-.552.448-1 1-1h1c.552 0 1 .448 1 1v8c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1v-8Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M11 19h1c.552 0 1-.448 1-1v-4.5c0-1.5 3-2.5 3 0V18c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1Z"
                    fill="#fff"
                  ></path>
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="3"
                    stroke="#fff"
                    strokeOpacity=".4"
                  ></rect>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/RV-raghul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#ad46ff] p-2.5 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#ad46ff]"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 256 256"
                >
                  <g fill="#fff">
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-.5,4.7,2.2,8.9,6.3,10.5c.3.1.6-.1.6-.5v-1.6c0,0-.4.1-.9.1c-1.4,0-2-1.2-2.1-1.9c-.1-.4-.3-.7-.6-1c-.3-.1-.4-.1-.4-.2c0-.2.3-.2.4-.2c.6,0,1.1.7,1.3,1c.5.8,1.1,1,1.4,1c.4,0,.7-.1.9-.2c.1-.7.4-1.4,1-1.8c-2.3-.5-4-1.8-4-4c0-1.1.5-2.2,1.2-3c-.1-.2-.2-.7-.2-1.4c0-.4,0-1,.3-1.6c0,0,1.4,0,2.8,1.3c.5-.2,1.2-.3,1.9-.3c.7,0,1.4.1,2,.3c1.3-1.3,2.8-1.3,2.8-1.3c.2.6.2,1.2.2,1.6c0,.8-.1,1.2-.2,1.4c.7.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c.6.5,1,1.4,1,2.3v2.6c0,.3.3.6.7.5c3.7-1.5,6.3-5.1,6.3-9.3c0-6-5.1-10.7-11.1-10Z" />
                    </g>
                  </g>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:ravipanneer2001@gmail.com"
                className="inline-flex items-center justify-center border border-[#ad46ff] p-2.5 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#ad46ff]"
                title="Email"
                aria-label="Email"
              >
                <svg
                  width="28"
                  height="28"
                  className="fill-white"
                  viewBox="0 0 32 32"
                >
                  <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h13v-2H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V17h2V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56z" />
                  <path d="m24.29 18.29-4 4 1.41 1.41 2.3-2.29V29h2v-7.59l2.29 2.29 1.41-1.41-4-4a1 1 0 0 0-1.41 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image/GIF */}
          <div className="flex justify-center items-center w-full md:w-auto">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-transparent opacity-70 blur-md" />
              <img
                src={HomeImage}
                className="relative w-full max-w-xs md:max-w-md h-auto md:w-[460px] md:h-[460px] object-contain rounded-3xl border border-white/10 shadow-lg shadow-black/50"
                alt="3D Character"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
