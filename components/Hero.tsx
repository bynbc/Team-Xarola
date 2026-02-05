import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToResults = () => {
    const element = document.getElementById('results');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
      
      {/* 
        Fixed Floating Glass Logo Container 
      */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-105">
        
        {/* Glass Effect Background Layer with sharper borders */}
        <div 
            className="absolute inset-0 rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-xarola/30 group-hover:shadow-[0_0_50px_rgba(211,47,47,0.4)]"
            style={{
                background: 'rgba(5, 5, 5, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
            }}
        ></div>

        {/* Logo Image */}
        <div className="relative w-full h-full p-5 flex items-center justify-center z-10">
            <img 
              src="public/logo-xarola.png" 
              alt="Xarola Team Logo" 
              className="w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
            />
        </div>
      </div>

      {/* Headlines */}
      <div className="max-w-6xl mx-auto space-y-10 z-10 mt-16 md:mt-20">
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-bold text-white uppercase leading-[0.9] tracking-tighter text-shadow select-none">
          Transforme <br />
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-xarola to-red-900 bg-clip-text text-transparent" aria-hidden="true">Seu Corpo</span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500">Seu Corpo</span>
          </span>
          <span className="text-xarola text-glow"> Agora</span>
        </h1>
        
        {/* REFINED Studded Glass Effect Box ("Cravejado 2.0") */}
        <div className="relative max-w-2xl mx-auto mb-12 group perspective-1000 animate-float">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-xarola/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-700"></div>
            
            <div className="relative rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] ring-1 ring-white/5">
                
                {/* Refined Texture: "Diamond Dust" - Smaller, higher density, lower opacity */}
                <div 
                    className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '4px 4px' /* Much finer grain */
                    }}
                ></div>

                {/* Top Specular Highlight (The "Glass Edge" reflection) */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/80 to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <p className="font-sans text-xl md:text-2xl text-gray-200 font-light leading-relaxed text-center tracking-wide">
                     A consultoria de elite que vai esculpir o físico que você sempre sonhou. <br/>
                     <span className="font-medium text-white drop-shadow-md">Sem atalhos, apenas resultados brutais.</span>
                  </p>
                </div>

                {/* Subtle Moving Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-[shiny_4s_infinite_ease-in-out] pointer-events-none"></div>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button 
            text="QUERO ENTRAR PARA O TEAM" 
            pulsing={true} 
            className="text-xl px-16 py-6 border-t border-white/20 shadow-[0_0_40px_rgba(211,47,47,0.3)] hover:shadow-[0_0_60px_rgba(211,47,47,0.6)]" 
          />
          <span className="flex items-center gap-3 text-xs md:text-sm text-gray-400 font-sans tracking-[0.2em] uppercase bg-black/60 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-xarola rounded-full animate-pulse shadow-[0_0_10px_#D32F2F]"></span>
            Vagas Limitadas
          </span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce text-white/30 cursor-pointer hover:text-white transition-colors duration-300" onClick={scrollToResults}>
        <ChevronDown size={32} strokeWidth={1.5} />
      </div>
    </section>
  );
};