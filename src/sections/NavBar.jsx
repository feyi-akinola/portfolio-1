import React, { useRef } from 'react';

// Component info (not AI-generated):
//   Animated navbar with smooth scroll to links and contact section

const NavBar = () => {
  const navRef = useRef(null);
  const contactRef = useRef(null);
  const socialsRef = useRef(null);
  const linkRefs = useRef([]);
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

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full h-full px-10 py-28 uppercase bg-black text-white/80 z-50 flex flex-col justify-between gap-y-10 md:w-1/2 md:left-1/2">
      {/* Links */}
      <div className="flex flex-col gap-y-2 text-5xl md:text-6xl lg:text-8xl">
        {links.map((link, index) => (
          <div
            key={index}
            ref={(el) => (linkRefs.current[index] = el)}
            className="hover:text-gold transition-all duration-300 cursor-pointer"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">{link}</a>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div ref={contactRef} className="flex flex-col flex-wrap justify-between gap-8 md:flex-row">
        {/* Email */}
        <div className="font-light">
          <p className="tracking-wider text-white/50">Email</p>
          <a className="text-xl text-pretty tracking-widest lowercase" href="mailto:info@example.com">feyi.akinola.3005@gmail.com</a>
        </div>

        {/* Socials */}
        <div ref={socialsRef} className="font-light">
          <p className="tracking-wider text-white/50">Socials</p>
          <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
            {
              socials.map((social, index) => (
                <a
                  key={index}
                  className={`text-sm leading-lose tracking-wide text-white ${social.hoverColor} transition-colors duration-300 cursor-pointer`}
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
  )
}

export default NavBar;