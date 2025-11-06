import AnimatedHeader from '../components/AnimatedHeader';

// Component info (not AI-generated):
//   Hero section with animated texts and background image

const Hero = () => {
  // Vars
  const descriptionText = `I blend design and development to create engaging, 
    performant web experiences with smooth interactions and thoughtful -
    using tools like React, Tailwind, and GSAP.`;

  return (
    <section
      id="home"
      className="bg-black text-white/80 min-h-screen flex flex-col justify-end 
        pb-10"
    >
      <AnimatedHeader
        title={"Feyisayo Akinola"}
        subtitle={"Front-end Developer"}
        text={descriptionText}
      />
    </section>
  )
}

export default Hero;