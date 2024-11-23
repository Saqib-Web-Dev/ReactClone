import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const AboutSection = () => {
  return (
    <div className="h-screen bg-gray-900 flex justify-center items-center text-white">
      <Parallax speed={5}>
        <p className="text-2xl">
          This is the About Section. Scroll to see the parallax effect.
        </p>
      </Parallax>
    </div>
  );
};

export default AboutSection;
