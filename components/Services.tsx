import React from 'react';
import { GlassCard } from './GlassCard';
import { Check, Dumbbell, Users, Smartphone, ShoppingBag } from 'lucide-react';

export const Services: React.FC = () => {
  const benefits = [
    { 
      title: "App Exclusivo", 
      desc: "Treino na palma da mão com vídeos explicativos.", 
      icon: <Smartphone className="w-6 h-6" /> 
    },
    { 
      title: "Dieta Calculada", 
      desc: "Macros ajustados quinzenalmente para o seu objetivo.", 
      icon: <Check className="w-6 h-6" /> 
    },
    { 
      title: "Treinos Periodizados", 
      desc: "Fichas de treino que mudam conforme sua evolução.", 
      icon: <Dumbbell className="w-6 h-6" /> 
    },
    { 
      title: "Comunidade VIP", 
      desc: "Acesso ao grupo fechado de membros de elite.", 
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      title: "Clube de Vantagens", 
      desc: "Descontos reais em suplementos e equipamentos.", 
      icon: <ShoppingBag className="w-6 h-6" /> 
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-6xl mx-auto px-4 -mt-16 mb-24">
      {/* Container with "bg-noise-texture" from global CSS */}
      <GlassCard className="p-0 overflow-hidden bg-noise-texture border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Header Column */}
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-black/60 via-black/40 to-black/60 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-xarola to-transparent"></div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase leading-none mb-4 tracking-tighter">
                  O Que Você <br/>
                  <span className="text-xarola">Recebe</span>
                </h2>
                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm">
                  Ao entrar para o time, você não recebe apenas um PDF. Você acessa um ecossistema completo focado no seu resultado estético e saúde.
                </p>
            </div>

            {/* List Column */}
            <div className="md:col-span-3 bg-black/20">
              <div className="flex flex-col h-full">
                {benefits.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex-1 flex items-center gap-5 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    {/* Hover Glow Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-xarola transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                    
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-xarola/50 group-hover:shadow-[0_0_15px_rgba(211,47,47,0.3)] transition-all duration-300 text-gray-300 group-hover:text-xarola">
                      {item.icon}
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                        <span className="text-lg font-heading font-bold text-white uppercase tracking-wide group-hover:text-xarola transition-colors">
                        {item.title}
                        </span>
                        <span className="text-xs text-gray-500 font-sans md:text-right group-hover:text-gray-300 transition-colors max-w-[200px]">
                            {item.desc}
                        </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </GlassCard>
    </section>
  );
};