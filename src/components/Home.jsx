import React from "react";
import HomeImage from "../assets/Vedio.gif";

function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-12 md:py-24 gap-8 md:gap-12">
      {/* Left: Text + CTAs */}
      <div className="ml-5 text-center md:text-left flex flex-col gap-3 max-w-md">
        <h1 className="text-white font-medium text-base md:text-lg">Hello, I'm</h1>

        <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">
          Ravi Raghul Panneerselvam
        </h2>

        <p className="text-white/90 font-medium text-lg md:text-2xl">
          Software Engineer — <span className="text-[#ad46ff]">MERN Stack</span>
        </p>

        {/* CTA row */}
        <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
          <a
            href="#projects"
            className="border-2 border-[#ad46ff] text-white bg-[#ad46ff] px-4 py-2 rounded-2xl shadow hover:bg-[#9b31ff] transition duration-300"
          >
            View Projects
          </a>
          <a
            href="/Ravi Raghul P.pdf"
            download
            className="border-2 border-white/20 text-white px-4 py-2 rounded-2xl shadow hover:bg-white/10 transition duration-300"
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
            className="inline-block border-2 p-2 border-[#ad46ff] rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#ad46ff]"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 8A1.5 1.5 0 1 0 6.5 5 1.5 1.5 0 0 0 6.5 8Z" fill="#fff"></path>
              <path d="M5 10c0-.552.448-1 1-1h1c.552 0 1 .448 1 1v8c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1v-8Z" fill="#fff"></path>
              <path d="M11 19h1c.552 0 1-.448 1-1v-4.5c0-1.5 3-2.5 3 0V18c0 .552.448 1 1 1h1c.552 0 1-.448 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1Z" fill="#fff"></path>
              <rect x="1" y="1" width="22" height="22" rx="3" stroke="#fff" strokeOpacity=".4"></rect>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/RV-raghul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 p-2 border-[#ad46ff] rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#ad46ff]"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256">
              <g fill="#fff"><g transform="scale(10.66667,10.66667)">
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-.5,4.7,2.2,8.9,6.3,10.5c.3.1.6-.1.6-.5v-1.6c0,0-.4.1-.9.1c-1.4,0-2-1.2-2.1-1.9c-.1-.4-.3-.7-.6-1c-.3-.1-.4-.1-.4-.2c0-.2.3-.2.4-.2c.6,0,1.1.7,1.3,1c.5.8,1.1,1,1.4,1c.4,0,.7-.1.9-.2c.1-.7.4-1.4,1-1.8c-2.3-.5-4-1.8-4-4c0-1.1.5-2.2,1.2-3c-.1-.2-.2-.7-.2-1.4c0-.4,0-1,.3-1.6c0,0,1.4,0,2.8,1.3c.5-.2,1.2-.3,1.9-.3c.7,0,1.4.1,2,.3c1.3-1.3,2.8-1.3,2.8-1.3c.2.6.2,1.2.2,1.6c0,.8-.1,1.2-.2,1.4c.7.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c.6.5,1,1.4,1,2.3v2.6c0,.3.3.6.7.5c3.7-1.5,6.3-5.1,6.3-9.3c0-6-5.1-10.7-11.1-10Z"/>
              </g></g>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:ravipanneer2001@gmail.com"
            className="inline-block border-2 p-2 border-[#ad46ff] rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#ad46ff]"
            title="Email"
            aria-label="Email"
          >
            <svg width="36" height="36" className="fill-white" viewBox="0 0 32 32">
              <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h13v-2H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V17h2V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56z"/>
              <path d="m24.29 18.29-4 4 1.41 1.41 2.3-2.29V29h2v-7.59l2.29 2.29 1.41-1.41-4-4a1 1 0 0 0-1.41 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Right: Image/GIF */}
      <div className="flex justify-center items-center w-full md:w-auto">
        <img
          src={HomeImage}
          className="w-full max-w-xs md:max-w-md h-auto md:w-[500px] md:h-[500px] object-contain"
          alt="3D Character"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Home;
