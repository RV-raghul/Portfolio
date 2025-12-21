import React, { useEffect, useRef, useState } from "react";
import { Home as HomeIcon, User, Laptop, Wrench, Contact as ContactIcon } from "lucide-react";

// Section and icon mapping
const SECTIONS = [
  { id: "home",     icon: HomeIcon,    aria: "Home" },
  { id: "about",    icon: User,        aria: "About" },
  { id: "skills",   icon: Wrench,      aria: "Skills" },
  { id: "projects", icon: Laptop,      aria: "Projects" },
  { id: "contact",  icon: ContactIcon, aria: "Contact" },
];

function BottomNav() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false); // auto-hide state
  const idleTimerRef = useRef(null);

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Activity -> show nav and reset 2s idle timer
  useEffect(() => {
    const showAndReset = () => {
      setHidden(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setHidden(true), 2000);
    };

    const opts = { passive: true };
    window.addEventListener("scroll", showAndReset, opts);
    window.addEventListener("mousemove", showAndReset, opts);
    window.addEventListener("touchstart", showAndReset, opts);
    window.addEventListener("keydown", showAndReset);

    // start timer once mounted
    showAndReset();

    return () => {
      window.removeEventListener("scroll", showAndReset);
      window.removeEventListener("mousemove", showAndReset);
      window.removeEventListener("touchstart", showAndReset);
      window.removeEventListener("keydown", showAndReset);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  // Smooth scroll on click
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      onMouseEnter={() => setHidden(false)}
      onFocus={() => setHidden(false)}
      className={[
        "fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50",
        "transition-all duration-300",
        hidden ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0",
      ].join(" ")}
      aria-hidden={hidden ? "true" : "false"}
    >
      <div className="relative">
        {/* glow behind bar */}
        <div
          className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-indigo-500/40 opacity-70 blur-md"
          aria-hidden="true"
        />
        {/* glass bar */}
        <div className="relative bg-[#141427]/80 backdrop-blur-xl border border-white/15 px-5 py-2.5 rounded-full shadow-lg shadow-black/40 flex gap-4 md:gap-6 items-center">
          {SECTIONS.map(({ id, icon: Icon, aria }) => (
            <button
              key={id}
              aria-label={aria}
              onClick={() => scrollToSection(id)}
              className={[
                "group relative flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none",
                active === id
                  ? "bg-[#ad46ff] text-white shadow-md shadow-purple-500/50 scale-110"
                  : "text-gray-300/70 hover:text-white hover:bg-white/10",
                "h-10 w-10 md:h-11 md:w-11",
              ].join(" ")}
            >
              <Icon size={22} />
              {/* Tooltip */}
              <span
                className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/80 text-white text-[11px]
                  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none
                  transition-opacity transition-transform translate-y-1 z-50 whitespace-nowrap"
              >
                {aria}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
