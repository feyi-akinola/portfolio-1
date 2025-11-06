import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.to("#title-skill-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-skill-1",
        scrub: 1,
      }
    });

    gsap.to("#title-skill-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-skill-2",
        scrub: 1,
      }
    });

    gsap.to("#title-skill-3", {
      xPercent: 40,
      scrollTrigger: {
        trigger: "#title-skill-3",
        scrub: 1,
      }
    });

    gsap.to("#title-skill-4", {
      xPercent: -50,
      scrollTrigger: {
        trigger: "#title-skill-4",
        scrub: 1,
      }
    });
  }, []);

  return (
    <section
      id="skills"
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-skill-1">
        <p>
          Tailwind CSS
        </p>
      </div>

      <div
        id="title-skill-2" 
        className="flex justify-center items-center gap-3 translate-x-16"
      >
        <p>
          TypeScript
        </p>
        <div className="w-10 h-1 md:w-32 bg-gold"/>
        <p className="font-normal">
          React
        </p>
      </div>


      <div
        id="title-skill-3"
        className="flex justify-center items-center gap-3 -translate-x-48"
      >
        <p className="italic">
          GSAP
        </p>
        <div className="w-10 h-1 md:w-32 bg-gold"/>
        <p className="font-normal">
          Three.js
        </p>
      </div>

      <div
        id="title-skill-4"
        className="translate-x-48"
      >
        <p>
          Next.js
        </p>
      </div>
    </section>
  );
}

export default Skills;