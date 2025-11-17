import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-bonsai-dark text-bonsai-bg py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-3xl mb-6">BONSAI</h3>
          <p className="text-bonsai-light max-w-md mb-8 leading-relaxed">
            {content.serenity.desc}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-bonsai-light hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-bonsai-light hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-bonsai-light hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-bonsai-light hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-bonsai-accent">{content.nav.contact}</h4>
          <ul className="space-y-4 text-bonsai-light">
            <li>info@bonsai.sa</li>
            <li>+966 11 000 0000</li>
            <li>Riyadh, Saudi Arabia</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-sm font-bold mb-6 text-bonsai-accent">Links</h4>
          <ul className="space-y-4 text-bonsai-light">
             <li><a href="#/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
             <li><a href="#/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-bonsai-light/20 flex flex-col md:flex-row justify-between items-center text-sm text-bonsai-light">
        <p>© 2024 Bonsai Residences. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
            <span className="opacity-50">Developed for Contest</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;