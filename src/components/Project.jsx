import React from "react";
import HotelApp from "../assets/HotelManagementImage.PNG";
import MovieApp from "../assets/MovieFlexImage.PNG";
import MemoryGameApp from "../assets/MemoryGameImage.PNG";
import SecureVault from "../assets/SecureVault.PNG";
// Main Projects (Production-ready)
const projects = [
  {
    title: "Hotel Management System",
    img: HotelApp,
    badge: "Full‑Stack • Production Ready",
    description:
      "A full-stack hotel booking platform with secure user authentication, real-time booking management, dynamic hotel listings with filters, and integrated Stripe payment gateway for seamless online transactions.",
    stack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Stripe"],
    live: "https://rv-hotelbookingsystem.netlify.app/",
    sourceCode: "",
    FrontendCode: "https://github.com/RV-raghul/HotelBookingSystem-Frontend",
    BackendCode: "https://github.com/RV-raghul/HotelBookingSystem-Backend",
  },{
    title:"Password Management System",
    img: SecureVault,
    badge:"Full-Stack • Production Ready",
    description:
      "A full-stack password management platform with AES-256 encryption, secure JWT authentication, real-time favorites and search filtering, soft delete with trash recovery, and responsive dashboard for seamless credential management across devices.",
    stack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Encryption"],
    live: "https://rv-password-management-system.netlify.app/",
    sourceCode: "",
    FrontendCode: "https://github.com/RV-raghul/Password-Management-System-Frontend",
    BackendCode: "https://github.com/RV-raghul/Password-Management-System-Backend",
  }
];

// Mini Projects/Tasks
const miniProjects = [
  {
    title: "Movie Searching App",
    img: MovieApp,
    badge: "Frontend • API Integration",
    description:
      "A dynamic movie search application using React.js with debounced search, pagination for large datasets, and a responsive UI powered by OMDB API integration for detailed movie browsing.",
    stack: ["ReactJS", "OMDB API"],
    live: "https://ravi-raghul-reactmovieapp.netlify.app/",
    sourceCode: "https://github.com/RV-raghul/React-Movie-App",
    FrontendCode: "",
    BackendCode: "",
  },
  {
    title: "Memory Game",
    img: MemoryGameApp,
    badge: "Frontend • Game Logic",
    description:
      "An interactive memory game using JavaScript, featuring card-flipping mechanics, match detection, and a responsive layout for an engaging user experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://raviraghul-taskmemorygame.netlify.app/",
    sourceCode: "https://github.com/RV-raghul/MemoryGameTask",
    FrontendCode: "",
    BackendCode: "",
  },
];

function LinkBtn({ href, children, variant = "primary" }) {
  if (!href) return null;

  const base =
    "px-4 py-2 rounded-2xl transition duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400/60 text-sm md:text-base";
  const variants = {
    primary:
      "border border-purple-500/70 bg-purple-500/10 text-purple-300 hover:bg-purple-500 hover:text-white hover:-translate-y-0.5 hover:shadow-purple-500/40",
    subtle:
      "border border-white/15 text-white/80 hover:bg-white/10 hover:text-white hover:-translate-y-0.5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} flex items-center gap-2`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-link"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
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
  badge,
}) {
  return (
    <div className="relative group">
      {/* glow background */}
      <div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40 opacity-0 blur transition-opacity duration-500 group-hover:opacity-70"
        aria-hidden="true"
      />
      {/* glass card */}
      <div
        className={`relative z-10 flex flex-col ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 md:gap-10 p-6 md:p-10 rounded-2xl bg-[#141427]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-purple-500/40`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <img
              src={img}
              alt={`${title} preview`}
              className="w-full h-auto max-h-[420px] object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {badge && (
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/5 border border-white/15 text-xs md:text-sm uppercase tracking-wide text-purple-200">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              {badge}
            </span>
          )}

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            {title}
          </h3>

          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Stack tags */}
          {stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-purple-500/10 text-purple-200 border border-purple-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <LinkBtn href={live} variant="primary">
              Live Demo
            </LinkBtn>
            <LinkBtn href={sourceCode} variant="subtle">
              Source Code
            </LinkBtn>
            <LinkBtn href={FrontendCode} variant="subtle">
              Frontend Code
            </LinkBtn>
            <LinkBtn href={BackendCode} variant="subtle">
              Backend Code
            </LinkBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-10 pb-16">
      {/* Main Projects Section */}
      <div className="text-center mb-10">
        <p className="text-2xl tracking-[0.3em] text-purple-300/70 uppercase mb-2">
          Featured
        </p>
        <h2 className="text-3xl md:text-4xl text-purple-200 font-bold mb-2">
          Projects
        </h2>
        <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          Real-world applications built with the MERN stack, REST APIs, and modern UI patterns.
        </p>
      </div>

      <div className="flex flex-col gap-10 md:gap-12 mb-16">
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
            badge={p.badge}
          />
        ))}
      </div>

      {/* Mini Projects Section */}
      <div className="text-center mb-10">
        <p className="text-2xl tracking-[0.3em] text-purple-300/70 uppercase mb-2">
          Experiments
        </p>
        <h2 className="text-2xl md:text-3xl text-purple-200 font-bold mb-2">
          Mini Projects
        </h2>
        <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
          Smaller projects and learning experiments showcasing specific skills and concepts.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        {miniProjects.map((p, idx) => (
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
            badge={p.badge}
          />
        ))}
      </div>

      <div className="h-8 md:h-12" />
    </div>
  );
}
