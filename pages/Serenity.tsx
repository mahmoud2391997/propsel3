import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';

const Serenity: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-[#F5F5F0]">
      {/* Main Philosophy */}
      <Section className="min-h-[80vh] flex items-center">
        <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
                 <div className="absolute -top-20 -left-20 w-64 h-64 bg-bonsai-accent/10 rounded-full blur-3xl"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1516274704469-0445a5e79c7f?q=80&w=1000" 
                    alt="Bonsai Art" 
                    className="relative z-10 w-full rounded-sm shadow-2xl"
                />
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6 space-y-8">
                <h1 className="font-serif text-5xl md:text-7xl text-bonsai-dark leading-none">
                    {content.home.heroTitle}
                </h1>
                <h2 className="text-2xl text-bonsai-accent tracking-widest uppercase">
                    {content.serenity.title}
                </h2>
                <p className="text-xl leading-relaxed text-bonsai-base font-light">
                    {content.serenity.desc}
                </p>
                 <p className="text-base leading-relaxed text-bonsai-light">
                    {language === 'en' 
                        ? 'Bonsai is a traditional Japanese art that involves growing trees in small containers. It is an art that blends horticulture, design, and meditation, requiring patience, precision, and skill.' 
                        : 'بونساي فن ياباني يقوم على زراعة الأشجار داخل أوعية صغيرة. هو فن يدمج بين الزراعة والتصميم والتأمل، ويستلزم صبراً ودقة ومهارة.'}
                </p>
            </div>
        </div>
      </Section>

      {/* Sensory Experience */}
      <Section className="bg-white">
          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-6 self-center">
                 <h3 className="font-serif text-3xl text-bonsai-dark">
                    {language === 'en' ? 'A Sensory Journey' : 'رحلة حسية'}
                 </h3>
                 <p className="text-bonsai-light leading-relaxed">
                    {language === 'en' 
                    ? 'Our spaces are meticulously designed to offer a peaceful escape from the noise of the city — where calm becomes a language that speaks to every part of you. What you see reflects purity, what you touch radiates warmth.' 
                    : 'صُمّمت مساحاتنا بعناية فائقة لتكون ملاذاً من صخب المدينة، حيث يُصبح الهدوء هو اللغة التي تُخاطب كل جزء فيك. ما تراه يعكس صفاء الألوان، وما تلمسه يُشعرك بالدفء.'}
                 </p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1522771753033-d40710f673c5?q=80&w=800" className="w-full h-64 object-cover rounded-sm" alt="Texture" />
                 <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" className="w-full h-64 object-cover rounded-sm mt-8" alt="Light" />
             </div>
          </div>
      </Section>
    </div>
  );
};

export default Serenity;