import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  pulsing?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  pulsing = false, 
  onClick, 
  fullWidth = false,
  className = '' 
}) => {
  const handleWhatsApp = () => {
    // Universal link to Xarola Team WhatsApp
    window.open('https://wa.me/5555981461267?text=Olá,%20quero%20transformar%20meu%20corpo%20com%20o%20Xarola%20Team!', '_blank');
  };

  return (
    <button
      onClick={onClick || handleWhatsApp}
      className={`
        relative overflow-hidden group bg-xarola text-white font-heading font-bold tracking-wider uppercase py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(211,47,47,0.5)] transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(211,47,47,0.8)]
        ${pulsing ? 'animate-pulse-fast' : ''}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span className="flex items-center justify-center gap-2 relative z-10">
        <MessageCircle className="w-6 h-6" />
        {text}
      </span>
      {/* Shine effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 z-0 group-hover:animate-[shiny_1.5s_infinite]" />
    </button>
  );
};