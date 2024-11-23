import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const BackgroundSection = () => {
  return (
    <Parallax className="h-screen" speed={-20}>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080')",
        }}
      >
        <div className="h-full flex justify-center items-center text-red">
          <h2 className="text-4xl">Amazing Background Parallax</h2>
        </div>
      </div>
    </Parallax>
  );
};

export default BackgroundSection;
