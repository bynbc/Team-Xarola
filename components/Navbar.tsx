import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5555981461267?text=Olá,%20tenho%20interesse%20no%20Xarola%20Team', '_blank');
  };

  const navLinks = [
    { label: 'QUEM SOMOS', id: 'home' },
    { label: 'RESULTADOS', id: 'results' },
    { label: 'COMO FUNCIONA', id: 'methodology' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Empty div to maintain spacing or just empty because logo is centered */}
        <div className="hidden md:block w-24"></div>

        {/* Desktop Nav - Aligned to the right, logo is in center z-index 1000 */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-xarola transition-colors relative group font-heading"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-xarola transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <button 
             onClick={handleWhatsApp}
             className="bg-white/10 hover:bg-xarola text-white px-4 py-2 rounded border border-white/20 transition-all duration-300 text-xs font-bold uppercase tracking-wider"
          >
            Entrar
          </button>
        </div>

        {/* Mobile Toggle - Absolute position left to not interfere with logo */}
        <button className="md:hidden text-white absolute left-4 top-1/2 -translate-y-1/2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center space-y-6 pt-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xl font-heading font-bold text-white hover:text-xarola"
            >
              {link.label}
            </button>
          ))}
          <button 
             onClick={handleWhatsApp}
             className="mt-4 text-xarola font-bold uppercase tracking-widest text-lg border border-xarola px-6 py-2 rounded hover:bg-xarola hover:text-white transition-colors"
          >
            Entrar no Team
          </button>
        </div>
      </div>
    </nav>
  );
};