import { useRef, useCallback, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Component info (not AI-generated):
//   Animated navbar with links and contact + Hamburger menu.

interface NavBarProps {
  smoother: ScrollSmoother | null;
}

const NavBar = ({ smoother }: NavBarProps) => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [showBurgerIcon, setShowBurgerIcon] = useState(true);

  // Refs
  const navRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const topLineRef = useRef<HTMLSpanElement | null>(null);
  const bottomLineRef = useRef<HTMLSpanElement | null>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const timeline = useRef<GSAPTimeline | null>(null);
  const iconTimeline = useRef<GSAPTimeline | null>(null);

  // Links and Socials
  const links = [
    "Home",
    "Services",
    "About",
    "Projects",
    "Contact",
  ];
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      hoverColor: "hover:text-purple-500",
    },
    { 
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/feyisayo-akinola/",
      hoverColor: "hover:text-blue-500",
    },
    { 
      name: "GitHub",
      href: "https://github.com/feyi-akinola",
      hoverColor: "hover:text-gray-500",
    },
    { 
      name: "Codepen",
      href: "https://codepen.io/andre4loner",
      hoverColor: "hover:text-yellow-500",
    },
  ];

  const toggleMenu = useCallback(() => {
    if (isOpen) { // Closing animations
      timeline.current?.reverse();
      iconTimeline.current?.reverse();
    } else { // Opening animations
      timeline.current?.play();
      iconTimeline.current?.play();
    }
  
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  // GSAP Animations
  useGSAP(() => {
    // Set initial positions
    gsap.set(navRef.current, {
      xPercent: 100,
    });
    gsap.set([linksRef.current], {
      autoAlpha: 0,
      x: -20,
    });
    gsap.set([contactRef.current], {
      autoAlpha: 0,
      x: -60,
    });

    // Set up timelines and end positions
    timeline.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, { // Navbar
        xPercent: 0,
        duration: 0.75,
        ease: "expo.out", // strong start, very soft
      })
      .to(linksRef.current, { // Links
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }, "<") // starts with previous
      .to(contactRef.current, { // Contact
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out",
      }, "<+0.5"); // starts 0.2 seconds after previous

      iconTimeline.current = gsap
        .timeline({ paused: true })
        .to(topLineRef.current, {
          rotate: 45,
          y: 3,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(bottomLineRef.current, {
          rotate: -45,
          y: -3,
          duration: 0.3,
          ease: "power2.inOut",
        }, "<");
        
  }, []);

  // Show/hide burger icon on scroll
  useEffect(() => {
    if (isOpen) return;
    
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurgerIcon(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (section: string) => {
    smoother?.scrollTo(section, true, {
      offset: 0,
      duration: 1,
      ease: "power2.out",
    } as any);
  }

  return (
    <>
      { /* Navbar */}
      <nav
        ref={navRef}
        className={`fixed backdrop-blur-sm bg-black/80 top-0 left-0 w-full h-full
          px-10 py-28 uppercase text-white/80 z-50 flex flex-col justify-between
          gap-y-10 md:w-1/2 md:left-1/2`
        }
      >
        {/* Links */}
        <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-8xl">
          {links.map((link, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  linksRef.current[index] = el;
                }
              }}
              className="tracking-tight hover:text-gold transition-all
                duration-300 cursor-pointer"
            >
              <p onClick={() => goToSection(`#${link.toLowerCase()}`)}>{link}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div ref={contactRef} className="flex flex-col flex-wrap justify-between
          gap-8 md:flex-row">
          {/* Email */}
          <div className="font-medium">
            <p className="tracking-wider text-white/50">Email</p>
            <a 
              href="feyi.akinola.3005@gmail.com"
              className="text-lg hover:text-gold transition-all duration-300
                text-pretty font-bold tracking-widest lowercase"
            >
                feyi.akinola.3005@gmail.com
              </a>
          </div>

          {/* Socials */}
          <div ref={socialsRef} className="font-medium">
            <p className="tracking-wider text-white/50">Socials</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {
                socials.map((social, index) => (
                  <a
                    key={index}
                    className={`text-sm leading-lose tracking-wide font-bold
                      text-white ${social.hoverColor} transition-colors
                      duration-300 cursor-pointer`
                    }
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </nav>

      { /* Hamburger Menu */}
      <div
        onClick={toggleMenu}
        className={`fixed text-sm text-white w-14 h-14 md:w-20 md:h-20 top-4
          right-10 z-50 flex flex-col justify-center items-center gap-1
          transition-all duration-300 bg-gold rounded-full cursor-pointer
          ${ isOpen || showBurgerIcon ? "opacity-100" : "opacity-0"}`
        }
        style={ isOpen || showBurgerIcon
          ? { clipPath: "circle(50% at 50% 50%)" }
          : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className={`block w-8 h-1 bg-black rounded-full origin-center
            transition-all duration-300`
          }
        ></span>
        <span
          ref={bottomLineRef}
          className={`block w-8 h-1 bg-black rounded-full origin-center
            transition-all duration-300`
          }
        ></span>
      </div>
    </>
  );
};

export default NavBar;

// IDEA: Hovering on socials reveals social logo