import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedHeader = (
  { title, subtitle, text }:
  { title: string, subtitle: string, text: string }
) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionTextRef = useRef<HTMLDivElement>(null);

  // Text Lines Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
    const descriptionSplitText = new SplitText(descriptionTextRef.current, {
      type: "words, lines",
      smartWrap: true,
    });
    const headerSplitText = new SplitText(headerRef.current, {
      type: "lines",
    });

    tl
      .from(heroRef.current, {
        y: "20vh",
        duration: 2,
        ease: "power3.inOut",
      })
      .from(headerSplitText.lines as any, {
        y: 100,
        autoAlpha: 0,
        stagger: 0.2,
        ease: "back.out"
      }, "<+1")
      .from(descriptionSplitText.lines as any, {
        y: 60,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "back.out",
      }, "<+0.5");
  }, []);

  return (
    <div ref={heroRef} className="relative z-20">
      <div style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0%);" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-4 pt-16 sm:gap-8"
        >
          <p className="px-10 text-xs sm:text-sm md:text-lg font-medium
            tracking-[0.5rem] uppercase">
            {subtitle}
          </p>

          <div className="px-10">
            <h1 className="uppercase banner-text-responsive">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative px-10 tracking-[0.1rem] sm:tracking-[0.3rem] flex
        justify-center w-screen"
      >
        <div className="absolute inset-x-0 border-t-2"/>
        <div className="py-12 sm:py-16 text-center w-full">
          <p ref={descriptionTextRef} className="value-text-responsive">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;