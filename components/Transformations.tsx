import React from 'react';
import { GlassCard } from './GlassCard';

const transformations = [
  { id: 1, name: 'Carlos M.', lost: '18kg', img: 'public/before-after-1.png' },
  { id: 2, name: 'Ana P.', lost: '12kg', img: 'public/before-after-2.png' },
  { id: 3, name: 'Roberto S.', lost: '25kg', img: 'public/before-after-3.png' },
  { id: 4, name: 'Juliana R.', lost: '9kg', img: 'public/before-after-4.png' },
  { id: 5, name: 'Felipe T.', lost: '15kg', img: 'public/before-after-5.png' },
  { id: 6, name: 'Marcos D.', lost: '22kg', img: 'public/before-after-6.png' },
];

export const Transformations: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555981461267?text=Olá,%20gostaria%20de%20ver%20mais%20resultados%20do%20Xarola%20Team', '_blank');
  };

  return (
    <section id="results" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <span className="text-xarola font-bold tracking-[0.5em] text-sm uppercase mb-2 block">Nossos Alunos</span>
        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase text-white mb-6 drop-shadow-xl">
          Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Reais</span>
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-xarola to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((item) => (
          <GlassCard key={item.id} className="group relative overflow-hidden p-0 aspect-square border-none shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-4 hover:rotate-1 hover:shadow-[0_30px_60px_-15px_rgba(211,47,47,0.4)] bg-black/40">
             {/* Background Image - Parallax Effect: Image scales up and moves slightly opposite to card lift */}
             <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
                <img 
                  src={item.img} 
                  alt={`Transformation ${item.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:translate-y-2 opacity-70 group-hover:opacity-100"
                />
             </div>
             
             {/* Glass Overlay Text - Slide Up Effect */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10">
                 <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                   <div className="flex justify-between items-end border-b border-white/30 pb-4 mb-4">
                      <div>
                        <p className="text-xarola font-bold font-heading text-lg uppercase tracking-widest mb-1">Evolução</p>
                        <h3 className="text-2xl font-heading font-bold text-white">{item.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="block text-4xl font-heading font-bold text-white tracking-tighter">-{item.lost}</span>
                      </div>
                   </div>
                   <p className="text-gray-300 font-sans text-sm italic">
                     "Objetivo superado. O protocolo funcionou 100%."
                   </p>
                </div>
             </div>
             
             {/* Permanent Badge */}
             <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-xarola/50 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-lg z-20 group-hover:bg-xarola group-hover:border-xarola transition-colors duration-300">
               Xarola Team
             </div>
          </GlassCard>
        ))}
      </div>
      
      <div className="text-center mt-12">
         <p className="text-gray-400 font-sans mb-6">Junte-se a centenas de alunos transformados</p>
         <button 
          onClick={handleWhatsApp}
          className="text-white border-b border-xarola hover:text-xarola transition-colors pb-1 uppercase tracking-widest text-sm font-bold"
         >
           Ver mais resultados
         </button>
      </div>
    </section>
  );
};