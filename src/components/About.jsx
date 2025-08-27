import React from "react";
import Vedio2 from "../assets/Vedio2.gif";


function About() {
  return (
    
    <div className="Navbar relative max-w-4xl mx-auto my-8 px-4">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 rounded-2xl bg-[#24243e]/70 backdrop-blur-md shadow-lg z-0" aria-hidden="true"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6 md:p-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-purple-400 font-bold mb-2">About Me</h2>
          <p className="text-white text-base md:text-lg mb-4">
            I’m a Software Engineer, where I’ve been primarily focused on backend development, writing optimized SQL Server stored procedures and designing RDLC reports tailored to client needs.
          </p>
          <p className="text-white text-base md:text-lg mb-4">
            Driven by a strong desire to grow beyond traditional backend systems, I’ve upskilled into Full Stack Web Development. I now specialize in the MERN stack (MongoDB, Express.js, ReactJS, Node.js).
          </p>
          <p className="text-white text-base md:text-lg mb-4">
            I’m passionate about crafting user-friendly, innovative, and scalable web applications that deliver seamless digital experiences. I enjoy turning ideas into fully functional, performant solutions using clean, maintainable code.
          </p>
        </div>
        {/* Image/GIF Section */}
        <div className="shrink-0">
          <img
            src={Vedio2}
            alt="About 3D Character"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
    
  );
}

export default About;
