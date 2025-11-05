import React, { useLayoutEffect, useRef, useState } from 'react';
import NavBar from './sections/NavBar';
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// ScrollSmoother requires ScrollTrigger
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  // States
  const [smootherReady, setSmootherReady] = useState(false);

  // Refs
  const smootherRef = useRef(null);

  // GSAP Scroll
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
    <>
      {/* Fixed components go outside the smoother wrapper */}
      {smootherReady && <NavBar smoother={smootherRef.current} />}

      <div id="smooth-wrapper">
        <div id="smooth-container">
          <div className="antialiased relative w-screen min-h-screen overflow-x-hidden">

            <section className="min-h-screen" id="home">
            </section>

            <section className="min-h-screen bg-amber-500" id="services">
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

// TODO: Write name (stylized) in console as easter egg