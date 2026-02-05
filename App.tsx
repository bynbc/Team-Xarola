import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Transformations } from './components/Transformations';
import { Methodology } from './components/Methodology';
import { FloatingCTA } from './components/FloatingCTA';
import { Navbar } from './components/Navbar';
import { background-video } from './public/background-video.mp4';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* 
        Background Video
        Position: Fixed
        Coverage: Full viewport + extra height for parallax
        Z-Index: -100 (Deep background)
        Object-fit: Cover
        Parallax: Translates Y based on scroll position (subtle speed)
      */}
      <video
        id="bg-video"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-[120vh] object-cover -z-[100]"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
        poster="public/background-poster.jpg"
      >
        <source src="public/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 
        Video Overlay 
        Ensures text readability on top of the video
        Z-Index: -90 (Above video, below content)
      */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 -z-[90]" />

      {/* Particle Overlay - Z-Index -80 (Above gradient, below content) */}
      <ParticleBackground />

      <Navbar />

      {/* Main Content Wrapper */}
      <main className="relative z-10 flex flex-col gap-0 pb-32">
        <Hero />
        <Services />
        <Transformations />
        <Methodology />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/95 backdrop-blur-lg py-16 border-t border-white/10 text-center">
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-heading font-bold text-3xl text-white mb-4">XAROLA <span className="text-xarola">TEAM</span></h3>
            <p className="text-gray-500 font-sans text-sm max-w-md mx-auto mb-8">Transformando vidas através do esporte e da disciplina. Junte-se à elite.</p>
            <p className="text-gray-600 font-sans text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <div className="mt-6 flex justify-center space-x-6 text-xs text-gray-600 uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Termos</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
};

export default App;
