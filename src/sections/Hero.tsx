import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Component info (not AI-generated):
//   Hero section with animated texts and background image

const Hero = () => {
  // Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionTextRef = useRef<HTMLDivElement>(null);

  // Text Lines Animation
  useGSAP(() => {       
    const tl = gsap.timeline();
    const descriptionSplitText = new SplitText(descriptionTextRef.current, {
      type: "lines",
    });
    const headerSplitText = new SplitText(headerRef.current, {
      type: "chars, words",
    });

    tl
      .from(heroRef.current, {
        y: "50vh",
        duration: 2,
        ease: "power3.inOut"
      })
      .from(headerSplitText.chars as any, {
        y: 60,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "back.out"
      }, "<+1")
      .from(descriptionSplitText.lines as any, {
        y: 60,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "back.out",
      }, "<+1");
  }, []);

  // Vars
  const descriptionText = `
    I'm a Full Stack Developer who blends design and
    development to create engaging, performance-driven
    web experiences with smooth interactions and thoughtful.
    Built with tools like React, Tailwind, and GSAP.
  `;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-[url('/grunge-background-2.jpg')]">
      <div className="absolute max-h-screen inset-0 bg-white/80 z-10"></div>
      <div ref={heroRef} className="relative z-20">
        <div style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0%);" }}
        >
          <div ref={headerRef} className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
            <p className="px-10 text-sm font-light tracking-tighter uppercase text-black">
              404 No bugs found
            </p>

            <div className="px-10">
              <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block">
                Feyisayo Akinola
              </h1>
            </div>
          </div>
        </div>

        <div className="relative px-10 text-black">
          <div className="absolute inset-x-0 border-t-2"/>
          <div className="py-12 sm:py-16 text-end">
            <p ref={descriptionTextRef} className="font-light uppercase value-text-responsive">
              {descriptionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;