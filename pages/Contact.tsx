import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';

const Contact: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-bonsai-bg">
      <Section>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-2xl rounded-sm">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl text-bonsai-dark mb-4">{content.contact.title}</h1>
            <p className="text-bonsai-light">
                {language === 'en' ? 'Register your interest for the upcoming release.' : 'سجل اهتمامك للإصدار القادم.'}
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider font-bold text-bonsai-base">{content.contact.namePlaceholder}</label>
                    <input type="text" className="w-full bg-bonsai-bg border border-bonsai-stone p-4 focus:border-bonsai-accent focus:outline-none transition-colors" placeholder={content.contact.namePlaceholder} />
                </div>
                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider font-bold text-bonsai-base">{content.contact.emailPlaceholder}</label>
                    <input type="email" className="w-full bg-bonsai-bg border border-bonsai-stone p-4 focus:border-bonsai-accent focus:outline-none transition-colors" placeholder={content.contact.emailPlaceholder} />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-bold text-bonsai-base">{content.contact.messagePlaceholder}</label>
                <textarea className="w-full bg-bonsai-bg border border-bonsai-stone p-4 h-32 focus:border-bonsai-accent focus:outline-none transition-colors" placeholder={content.contact.messagePlaceholder}></textarea>
            </div>

            {/* Mock Recaptcha */}
            <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded p-4 w-fit flex items-center gap-4">
                <input type="checkbox" className="w-6 h-6 accent-bonsai-accent cursor-pointer" />
                <span className="text-sm text-gray-600">I'm not a robot</span>
                <div className="ml-4">
                     <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="Recaptcha" className="w-8 h-8 opacity-50" />
                </div>
            </div>

            <button className="w-full bg-bonsai-dark text-white py-4 uppercase tracking-widest font-bold hover:bg-bonsai-accent transition-colors">
                {content.contact.submit}
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;