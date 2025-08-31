import React, { useEffect, useRef, useState } from "react";
import { Home as HomeIcon, User, Laptop, Wrench } from "lucide-react";

// Section and icon mapping
const SECTIONS = [
  { id: "home",     icon: HomeIcon, aria: "Home" },
  { id: "about",    icon: User,     aria: "About" },
  { id: "skills",   icon: Wrench,   aria: "Skills" },
  { id: "projects", icon: Laptop,   aria: "Projects" },
];

function BottomNav() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false); // auto-hide state
  const idleTimerRef = useRef(null);

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = SECTIONS.id;
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

    // Consider scroll, mouse, touch, and keyboard as activity
    const opts = { passive: true };
    window.addEventListener("scroll", showAndReset, opts);
    window.addEventListener("mousemove", showAndReset, opts);
    window.addEventListener("touchstart", showAndReset, opts);
    window.addEventListener("keydown", showAndReset); // keydown can't be passive

    // Start timer once mounted so it can hide after initial 2s if idle
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
      // Keep visible when hovered/focused to avoid flicker as the timer runs
      onMouseEnter={() => setHidden(false)}
      onFocus={() => setHidden(false)}
      className={[
        "fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#1c1c2b] px-6 py-3 rounded-full shadow-lg flex gap-6 items-center z-50 transition-all duration-300",
        hidden ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0",
      ].join(" ")}
      aria-hidden={hidden ? "true" : "false"}
    >
      {SECTIONS.map(({ id, icon: Icon, aria }) => (
        <button
          key={id}
          aria-label={aria}
          onClick={() => scrollToSection(id)}
          className={`group relative transition-all focus:outline-none ${
            active === id
              ? "bg-purple-500 p-3 rounded-full text-white shadow-md scale-110"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Icon size={24} />
          {/* Tooltip */}
          <span
            className="absolute left-1/2 bottom-full mb-3 w-max -translate-x-1/2 px-2 py-1 rounded-md bg-black text-white text-xs
              opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-opacity transition-transform
              translate-y-2 z-50"
          >
            {aria}
          </span>
        </button>
      ))}
    </div>
  );
}

export default BottomNav;
