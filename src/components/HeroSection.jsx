import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bicycleImage from "../assets/images/bicycle.png"; // Replace with your image path

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (ref.current && inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, ref]);

  // Animation Variants
  const textVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
  };

  const bikeVariants = {
    hidden: { x: "-50%", opacity: 0 },
    visible: {
      x: "50%",
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const fadeOutVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-screen w-full bg-yellow-400 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={fadeOutVariants}
    >
      {/* Heading and Paragraph */}
      <motion.div
        className="absolute top-20 left-5 text-black sm:top-10 sm:left-3"
        variants={textVariants}
      >
        <h1 className="text-6xl sm:text-4xl font-bold">Welcome to Lemon Yellow</h1>
        <p className="mt-4 text-2xl sm:text-lg">Crafting innovative digital solutions.</p>
      </motion.div>

      {/* Bicycle Image */}
      <motion.img
        src={bicycleImage}
        alt="Bicycle"
        className="absolute bottom-10 left-0 w-96 sm:w-64 h-auto"
        variants={bikeVariants}
      />

      {/* Additional Headings and Paragraphs */}
      <motion.div
        className="absolute top-40 left-5 text-black sm:top-32 sm:left-3"
        variants={textVariants}
        style={{ transitionDelay: "0.5s" }}
      >
        <h2 className="text-4xl sm:text-3xl font-semibold">Heading 2</h2>
        <p className="mt-2 text-lg sm:text-sm">Second paragraph appears here.</p>
      </motion.div>

      <motion.div
        className="absolute top-60 left-5 text-black sm:top-48 sm:left-3"
        variants={textVariants}
        style={{ transitionDelay: "1s" }}
      >
        <h2 className="text-4xl sm:text-3xl font-semibold">Heading 3</h2>
        <p className="mt-2 text-lg sm:text-sm">Third paragraph appears here.</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
