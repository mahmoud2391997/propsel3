
import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';

const Designer: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Architect Section - Page 6 */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
           <div className="md:col-span-5 relative">
               <div className="aspect-[3/4] bg-gray-200 grayscale overflow-hidden rounded-sm shadow-xl">
                   <img 
                    src="https://images.squarespace-cdn.com/content/v1/571fc77c044262145190d373/1616421478922-70W0H8D5H2B2F8R6N5C1/Keiji+Ashizawa.jpg" 
                    alt="Keiji Ashizawa" 
                    className="w-full h-full object-cover"
                   />
               </div>
               <div className="absolute -bottom-10 -right-10 font-serif text-9xl text-bonsai-bg text-opacity-50 hidden md:block z-0 select-none pointer-events-none">
                   KA
               </div>
           </div>
           <div className="md:col-span-1"></div>
           <div className="md:col-span-6 pt-10 z-10">
               <h2 className="text-bonsai-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">{content.designer.title}</h2>
               <h1 className="font-serif text-5xl md:text-7xl text-bonsai-dark mb-2">{content.designer.name}</h1>
               <p className="text-2xl font-serif text-bonsai-light mb-8">芦沢 啓治</p>
               
               <div className="space-y-6 text-bonsai-base text-lg leading-relaxed text-justify">
                   <p>{content.designer.desc}</p>
               </div>
           </div>
        </div>
      </div>

      {/* Honest Design - Page 7 */}
      <div className="bg-bonsai-bg py-32">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto mb-20">
                  <h2 className="font-serif text-4xl md:text-5xl text-bonsai-dark mb-6">{content.designer.philosophy.title}</h2>
                  <div className="w-20 h-1 bg-bonsai-accent mx-auto mb-8"></div>
                  <p className="text-xl text-bonsai-base leading-relaxed">
                      {content.designer.philosophy.desc}
                  </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 h-[600px]">
                  <div className="h-full overflow-hidden rounded-sm">
                      <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Interior 1" />
                  </div>
                  <div className="grid grid-rows-2 gap-4 h-full">
                      <div className="overflow-hidden rounded-sm">
                          <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Interior 2" />
                      </div>
                      <div className="bg-bonsai-dark text-white p-8 flex items-center justify-center text-center rounded-sm">
                           <div>
                               <h3 className="font-serif text-2xl mb-4">Exceptional Design</h3>
                               <p className="text-sm opacity-80">Precise use of space and meticulous attention to detail.</p>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Designer Touches - Page 12 */}
      <Section>
          <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                  <h2 className="font-serif text-5xl text-bonsai-dark mb-8 leading-tight">
                      {content.designer.touches.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                      ))}
                  </h2>
                  <p className="text-bonsai-light text-lg mb-12">
                      {content.designer.touches.desc}
                  </p>
              </div>
              <div className="md:col-span-8 space-y-24">
                  {content.designer.touches.items.map((item, i) => (
                      <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group`}>
                           <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-sm">
                               <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                           </div>
                           <div className="w-full md:w-1/2">
                               <h3 className="font-serif text-3xl text-bonsai-dark mb-4">{item.title}</h3>
                               <p className="text-bonsai-base leading-relaxed">{item.desc}</p>
                           </div>
                      </div>
                  ))}
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Designer;
