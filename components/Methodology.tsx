import React from 'react';
import { GlassCard } from './GlassCard';
import { Target, Activity, Users, Trophy, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Methodology: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-xarola" />,
      title: "Treino Personalizado",
      desc: "Periodização montada especificamente para sua biomecânica e objetivos."
    },
    {
      icon: <Activity className="w-8 h-8 text-xarola" />,
      title: "Dieta Flexível",
      desc: "Protocolos nutricionais que se adaptam à sua rotina, sem passar fome."
    },
    {
      icon: <Users className="w-8 h-8 text-xarola" />,
      title: "Suporte 24/7",
      desc: "Acesso direto à equipe pelo WhatsApp para tirar dúvidas e ajustar rotas."
    },
    {
      icon: <Trophy className="w-8 h-8 text-xarola" />,
      title: "Alta Performance",
      desc: "Estratégias utilizadas por atletas profissionais adaptadas para você."
    }
  ];

  return (
    <section id="methodology" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="p-8 md:p-12 lg:p-16 border-xarola/20 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10">
              <div>
                <span className="text-xarola font-bold tracking-widest uppercase text-sm">Como Funciona</span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase text-white leading-none mt-2">
                  Metodologia <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-xarola to-red-600">Xarola Team</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="font-sans text-gray-300 text-lg leading-relaxed border-l-2 border-white/10 pl-4">
                  Não somos apenas mais uma consultoria online. Somos uma fábrica de resultados. Nossa metodologia combina ciência esportiva avançada com a experiência prática de quem vive o bodybuilding.
                </p>
                
                <ul className="space-y-4">
                  {['Avaliação Inicial Completa', 'Ajustes Quinzenais', 'Análise de Técnica de Treino', 'Protocolo de Suplementação'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-xarola" />
                      <span className="font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6">
                <Button text="QUERO MUDAR DE VIDA" className="w-full md:w-auto shadow-xarola/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group bg-white/5 p-8 rounded-xl border border-white/5 hover:border-xarola/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6 bg-black/60 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-xarola/30 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wide group-hover:text-xarola transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
};