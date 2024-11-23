// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BackgroundSection from './components/BackgroundSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <div className="App">
        <HeroSection />
        <BackgroundSection />
        <AboutSection />
        {/* Dummy Content for Scroll Testing */}
        <section id="home" className="h-screen bg-gray-800 text-white flex justify-center items-center">
          <h1 className="text-4xl">Home Section</h1>
        </section>
        <section id="about" className="h-screen bg-gray-700 text-white flex justify-center items-center">
          <h1 className="text-4xl">About Section</h1>
        </section>
        <section id="services" className="h-screen bg-gray-600 text-white flex justify-center items-center">
          <h1 className="text-4xl">Services Section</h1>
        </section>
        <section id="portfolio" className="h-screen bg-gray-500 text-white flex justify-center items-center">
          <h1 className="text-4xl">Portfolio Section</h1>
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default App;

