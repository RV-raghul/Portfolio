import React, { useEffect, useState } from "react";
import { Home as HomeIcon, User, Laptop, Wrench, Contact } from "lucide-react";

// Section and icon mapping
const SECTIONS = [
  { id: "home",     icon: HomeIcon,    aria: "Home" },
  { id: "about",    icon: User,        aria: "About" },
  { id: "skills",   icon: Wrench,      aria: "Skills" }, // <-- ADDED
  { id: "projects", icon: Laptop,      aria: "Projects" },
  //{ id: "contact",  icon: Contact,     aria: "Contact" },
];

function BottomNav() {
  const [active, setActive] = useState("home");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll on click
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-[#1c1c2b] px-6 py-3 rounded-full shadow-lg flex gap-6 items-center z-50">
      {SECTIONS.map(({ id, icon: Icon, aria }) => (
        <button
          key={id}
          aria-label={aria}
          onClick={() => scrollToSection(id)}
          className={
            `group relative transition-all focus:outline-none ${active === id
              ? "bg-purple-500 p-3 rounded-full text-white shadow-md scale-110"
              : "text-gray-400 hover:text-white"}`
          }
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
