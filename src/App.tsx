import { useLayoutEffect, useRef, useState } from "react";

// Sections and components
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

// GSAP
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollSmoother requires ScrollTrigger
import { SplitText } from "gsap/SplitText";

const App = () => {
  // States
  const [smootherReady, setSmootherReady] = useState(false);

  // Refs
  const smootherRef = useRef<ScrollSmoother | null>(null);

  // GSAP Scroll
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // Create smoother scrolling effect
    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-container',
      smooth: 2,
      effects: true,
      smoothTouch: 0.1, // smaller values for touch devices
    });

    setSmootherReady(true);
  }, []);

  return (
    <div className="antialiased">
      {/* Fixed components go outside the smoother wrapper */}
      {smootherReady && <NavBar smoother={smootherRef.current} />}

      <div id="smooth-wrapper">
        <div id="smooth-container">
          <div className="relative w-screen min-h-screen overflow-x-hidden">
            <Hero />

            <Skills />

            <section className="min-h-screen bg-amber-500" id="services">
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// TODO: Write name (stylized) in console as easter egg
// TODO: Edit readme.md
// IDEA: Fixed top and bottom "cinematic" bars