import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-50 flex justify-center transition-transform duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="w-full max-w-md">
        <Button text="CHAMAR NO WHATSAPP" pulsing={true} fullWidth={true} className="shadow-2xl" />
      </div>
    </div>
  );
};