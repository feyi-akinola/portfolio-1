import AnimatedHeader from "../components/AnimatedHeader";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = `I'm a software engineer with a passion for building
     scalable and efficient web applications. I'm a quick learner
    and I'm always looking to improve my skills.`;
  const aboutText = `
    Beyond development, I’m constantly exploring emerging web technologies
    and best practices to stay ahead in the ever-evolving tech landscape.
    Outside of coding, I enjoy:

    • 🎨 Designing user interfaces
    • 🎮 Playing online games  
    • 👨‍👩‍👧‍👦 Spending time with my family`;


    useGSAP(() => {
      const tl = gsap.timeline();
      const textSplitText = new SplitText(textRef.current, {
        type: "words,lines",
        smartWrap: true,
      });

      tl.to("#about", {
        scale: 0.75,
        scrollTrigger: {
          trigger: "#about",
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      
      tl.from(textRef.current, {
        y: 60,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "back.out",
        scrollTrigger: {
          trigger: textRef.current,
          toggleActions: "play none none reverse",
        },
      }, "<+1");

      tl.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
    }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white/80 rounded-4xl"
    >
      <AnimatedHeader
        title={"About Me"}
        subtitle={"Code with purpose. Build to scale."}
        text={text}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16
        text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl
        text-center text-white/60"
      >
        <img
          ref={imageRef}
          src="images/keanu.jpg" 
          alt="Keanu" 
          className="w-md rounded-2xl"
        />
        <p 
          ref={textRef} 
          className="text-start tracking-widest leading-tight value-text-responsive whitespace-pre-line"
        >
          Beyond development, I’m constantly exploring emerging web technologies
          and best practices to stay ahead in the ever-evolving tech landscape.
          Outside of coding, I enjoy:
          <ul className="mt-4 list-none space-y-2">
            <li>• 🎨 Designing user interfaces</li>
            <li>• 🎮 Playing online games</li>
            <li>• 👨‍👩‍👧‍👦 Spending time with my family</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default About;