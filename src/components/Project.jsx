import React from "react";
import HotelApp from "../assets/HotelManagementImage.PNG";
import MovieApp from "../assets/MovieFlexImage.PNG"
import MemoryGameApp from '../assets/MemoryGameImage.PNG'

// Your projects data with flexible link fields
const projects = [
  {
    title: "Hotel Management System",
    img: HotelApp,
    description:
      "A full-stack hotel booking platform with secure user authentication, real-time booking management, dynamic hotel listings with filters, and integrated Stripe payment gateway for seamless online transactions.",
    stack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Stripe"],
    live: "https://rv-hotelbookingsystem.netlify.app/",
    sourceCode: "",
    FrontendCode: "https://github.com/RV-raghul/HotelBookingSystem-Frontend",
    BackendCode: "https://github.com/RV-raghul/HotelBookingSystem-Backend",
  },
   {
    title: "Movie Searching App",
    img: MovieApp,
    description:
      "A dynamic movie search application using React.js with real-time debounced search, pagination for large datasets, and a responsive UI powered by OMDB API integration for detailed movie browsing.",
    stack: ["ReactJS","OMDB API"],
    live: "https://ravi-raghul-reactmovieapp.netlify.app/",
    sourceCode: "https://github.com/RV-raghul/React-Movie-App",
    FrontendCode: "",
    BackendCode: "",
  },
  {
    title: "Memory Game",
    img: MemoryGameApp,
    description:
      "An interactive memory game using JavaScript, featuring card-flipping mechanics, match detection, and a responsive design for an engaging user experience.",
    stack: ["HTML","CSS","Javascript"],
    live: "https://raviraghul-taskmemorygame.netlify.app/",
    sourceCode: "https://github.com/RV-raghul/MemoryGameTask",
    FrontendCode: "",
    BackendCode: "",
  },
  
  // Add more projects here...
];

// Small helper to render a link button only if url exists
function LinkBtn({ href, children, variant = "primary" }) {
  if (!href) return null;

  const base =
    "px-4 py-2 rounded-2xl transition duration-300 shadow focus:outline-none focus:ring-2 focus:ring-purple-400/60";
  const variants = {
    primary:
      "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
    subtle:
      "border-2 border-white/20 text-white hover:bg-white/10",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} flex gap-2`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      {children}
    </a>
  );
}

function ProjectCard({
  title,
  img,
  description,
  stack = [],
  live,
  sourceCode,
  FrontendCode,
  BackendCode,
  reversed = false,
}) {
  return (
    <div className="relative">
      {/* glass/blur background */}
      <div
        className="absolute inset-0 rounded-2xl bg-[#24243e]/70 backdrop-blur-md shadow-lg"
        aria-hidden="true"
      />
      <div
        className={`relative z-10 flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 md:gap-10 p-6 md:p-10 rounded-2xl`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt={`${title} preview`}
            className="w-full h-auto max-h-[420px] object-cover rounded-xl shadow-md"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h3>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          {/* Stack tags */}
          {stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Actions: render only the buttons whose URLs exist */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <LinkBtn href={live} variant="primary">Live Demo</LinkBtn>
            {/* If a single monorepo or unified source code URL is provided */}
            <LinkBtn href={sourceCode} variant="subtle">Source Code</LinkBtn>
            {/* If separate repos are provided */}
            <LinkBtn href={FrontendCode} variant="subtle">Frontend Code</LinkBtn>
            <LinkBtn href={BackendCode} variant="subtle">Backend Code</LinkBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-10 mb-30">
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold mb-8 text-center">
        My Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((p, idx) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            img={p.img}
            description={p.description}
            stack={p.stack}
            live={p.live}
            sourceCode={p.sourceCode}
            FrontendCode={p.FrontendCode}
            BackendCode={p.BackendCode}
            reversed={idx % 2 === 1}
          />
        ))}
      </div>

      <div className="h-8 md:h-12" />
    </div>
  );
}
