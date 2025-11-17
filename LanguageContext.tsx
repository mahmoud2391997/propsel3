import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: typeof CONTENT['en'];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // Change font based on language
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    content: CONTENT[language],
    dir: language === 'ar' ? 'rtl' : 'ltr' as 'ltr' | 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};