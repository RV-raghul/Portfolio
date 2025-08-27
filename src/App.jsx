import React from "react";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Skill from "./components/Skill";
import AnimateOnScroll from "./common/AnimateOnScroll";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bgAll min-h-screen w-full">
      <section
        id="home"
        className="scroll-mt-32 min-h-screen"
        tabIndex={-1}
      >
        <AnimateOnScroll>
        <Home />
        </AnimateOnScroll>
      </section>
      <section
        id="about"
        className="scroll-mt-32 min-h-screen"
        tabIndex={-1}
      >
        <AnimateOnScroll>
        <About />
        </AnimateOnScroll>
      </section>
       <section
        id="skills"
        className="scroll-mt-1 min-h-screen"
        tabIndex={-1}
      >
        <AnimateOnScroll>
        <Skill />
        </AnimateOnScroll>
      </section>
      <section
        id="projects"
        className="scroll-mt-32 min-h-screen"
        tabIndex={-1}
      >
        <AnimateOnScroll>
        <Projects />
        </AnimateOnScroll>
      </section>
      <section
      >
        <AnimateOnScroll>
        <Footer/>
        </AnimateOnScroll>
      </section>
      <BottomNav />
    </div>
  );
}

export default App;
