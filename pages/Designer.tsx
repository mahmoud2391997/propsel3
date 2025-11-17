import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';
import { Play } from 'lucide-react';

const Designer: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-bonsai-bg">
      {/* Architect Intro */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
                <span className="text-bonsai-accent uppercase tracking-widest text-sm font-bold">{content.designer.subtitle}</span>
                <h1 className="font-serif text-5xl md:text-6xl text-bonsai-dark">{content.designer.name}</h1>
                <h2 className="text-2xl text-bonsai-light font-serif">{language === 'en' ? '芦沢 啓治' : '芦沢 啓治'}</h2>
                <div className="w-20 h-1 bg-bonsai-accent/50 my-6"></div>
                <p className="text-bonsai-base leading-relaxed text-lg">
                    {content.designer.desc}
                </p>
            </div>
            <div className="order-1 md:order-2">
                <img 
                    src="https://cdn.prod.website-files.com/5e9c2c172477307d40e50810/5e9c2c172477303c84e5086a_Keiji%20Ashizawa.jpg" // Placeholder for Keiji Ashizawa
                    alt="Keiji Ashizawa" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-xl"
                />
            </div>
        </div>
      </Section>

      {/* Video Story */}
      <div className="relative h-[60vh] w-full bg-bonsai-dark flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1599666505302-c7c8b9e70333?q=80&w=2000')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
             <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto hover:bg-white hover:text-bonsai-dark transition-colors cursor-pointer mb-6">
                <Play fill="currentColor" className="ml-1" size={32} />
            </div>
            <h3 className="font-serif text-3xl">{language === 'en' ? 'Bonsai Story' : 'قصة بونساي'}</h3>
            <p className="opacity-80 mt-2">{language === 'en' ? 'A conversation with Keiji Ashizawa' : 'حوار مع كيجي أشيزاوا'}</p>
        </div>
      </div>

      {/* Designer Touches */}
      <Section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl text-bonsai-dark mb-4">{language === 'en' ? 'Designer Touches' : 'لمسات تصميمية'}</h2>
            <p className="text-bonsai-light">{language === 'en' ? 'Every material tells a story.' : 'كل خامة تروي قصة.'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
                { 
                    title: language === 'en' ? 'Copper' : 'نحاس', 
                    img: 'https://images.unsplash.com/photo-1620626257656-464b6284445c?q=80&w=1000',
                    desc: language === 'en' ? 'Adds warmth and timeless elegance.' : 'يضيف دفئاً وأناقة خالدة.'
                },
                { 
                    title: language === 'en' ? 'Wood' : 'خشب', 
                    img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000',
                    desc: language === 'en' ? 'Brings nature and nostalgia into the space.' : 'يجلب الطبيعة والحنين إلى المكان.'
                },
                { 
                    title: language === 'en' ? 'Stone' : 'حجر', 
                    img: 'https://images.unsplash.com/photo-1585335772721-7545e011dfc4?q=80&w=1000',
                    desc: language === 'en' ? 'Provides authenticity and grounding.' : 'يوفر الأصالة والرسوخ.'
                }
            ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm mb-6 h-64">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="font-serif text-2xl text-bonsai-dark mb-2">{item.title}</h3>
                    <p className="text-bonsai-light text-sm">{item.desc}</p>
                </div>
            ))}
          </div>
      </Section>
    </div>
  );
};

export default Designer;