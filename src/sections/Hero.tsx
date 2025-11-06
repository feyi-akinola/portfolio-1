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
      type: "words, lines",
      smartWrap: true,

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
  const descriptionText = `I blend design and development to create engaging, performance-driven web experiences with smooth interactions and thoughtful - using tools like React, Tailwind, and GSAP. `;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-end pb-10">
      <div ref={heroRef} className="relative z-20">
        <div style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0%);" }}
        >
          <div ref={headerRef} className="flex flex-col justify-center gap-4 pt-16 sm:gap-8">
            <p className="px-10 text-xs sm:text-sm md:text-lg font-medium tracking-[0.5rem] uppercase text-black">
              Front-end Developer
            </p>

            <div className="px-10">
              <h1 className="text-black uppercase banner-text-responsive">
                Feyisayo Akinola
              </h1>
            </div>
          </div>
        </div>

        <div className="relative px-10 tracking-[0.1rem] sm:tracking-[0.3rem] flex justify-center w-screen">
          <div className="absolute inset-x-0 border-t-2"/>
          <div className="py-12 sm:py-16 text-center w-full">
            <p ref={descriptionTextRef} className="value-text-responsive">
              {descriptionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;