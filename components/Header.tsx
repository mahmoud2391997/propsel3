import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { content, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.home, path: '/' },
    { name: content.nav.designer, path: '/designer' },
    { name: content.nav.serenity, path: '/serenity' },
    { name: content.nav.project, path: '/project' },
    { name: content.nav.contact, path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bonsai-bg/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-2 group">
          <div className={`w-8 h-8 rounded-full border-2 border-bonsai-base flex items-center justify-center transition-colors ${isScrolled ? 'border-bonsai-base' : 'border-bonsai-base'}`}>
            <div className="w-4 h-2 border-t-2 border-bonsai-base rounded-t-full transform group-hover:-translate-y-0.5 transition-transform"></div>
          </div>
          <span className={`font-serif text-2xl tracking-widest font-bold text-bonsai-base`}>
            BONSAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-wider transition-colors hover:text-bonsai-accent ${
                location.pathname === link.path ? 'text-bonsai-accent font-semibold' : 'text-bonsai-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="px-4 py-2 border border-bonsai-base text-bonsai-base text-sm uppercase hover:bg-bonsai-base hover:text-white transition-colors">
             {content.nav.brochure}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-bonsai-dark hover:text-bonsai-accent transition-colors font-sans"
          >
            <Globe size={16} />
            <span className="uppercase text-xs font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
             onClick={toggleLanguage}
             className="flex items-center gap-1 text-bonsai-dark hover:text-bonsai-accent transition-colors font-sans"
           >
             <span className="uppercase text-xs font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
           </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-bonsai-dark relative z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bonsai-bg flex flex-col justify-center items-center z-40"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-bonsai-dark hover:text-bonsai-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
               <button className="px-6 py-3 border-2 border-bonsai-base text-bonsai-base text-lg uppercase hover:bg-bonsai-base hover:text-white transition-colors mt-4">
                 {content.nav.brochure}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;