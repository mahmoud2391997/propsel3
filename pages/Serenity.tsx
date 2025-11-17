
import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';

const Serenity: React.FC = () => {
  const { content, language, dir } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-[#F9F9F7]">
      {/* Philosophy - Page 3 */}
      <Section className="min-h-[80vh] flex items-center relative">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EBE9E4] -z-10 hidden md:block"></div>
         <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
                 <h1 className="font-serif text-6xl md:text-7xl text-bonsai-dark mb-8 leading-none">
                     {content.serenity.subtitle}
                 </h1>
                 <p className="text-xl leading-relaxed text-bonsai-base font-light mb-8 text-justify">
                     {content.serenity.desc}
                 </p>
                 <div className="text-bonsai-light text-sm font-arabic leading-loose">
                     盆栽は、ただの鉢に植えられた小さな木ではありません。それは、自然と人間の調和を体現する、
                     日本伝統的芸術の核心であり、限られた空間の中に込められた繊細なディテールを通して、美の極みを表現します。
                 </div>
             </div>
             <div className="order-1 md:order-2 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000" 
                    alt="Serenity Mood" 
                    className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                 />
                 <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-lg max-w-xs hidden md:block">
                     <p className="font-serif italic text-bonsai-dark text-lg">"Beauty in Simplicity"</p>
                 </div>
             </div>
         </div>
      </Section>

      {/* Oasis of Serenity - Page 4 Grid */}
      <Section className="bg-white">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
               <div className="md:col-span-4">
                   <h2 className="font-serif text-5xl text-bonsai-dark mb-6 leading-tight">
                       {content.serenity.oasis.title.split(' ').map((w, i) => <div key={i}>{w}</div>)}
                   </h2>
               </div>
               <div className="md:col-span-8 self-end">
                   <p className="text-xl text-bonsai-base leading-relaxed border-l-4 border-bonsai-accent pl-6">
                       {content.serenity.oasis.desc}
                   </p>
               </div>
          </div>

          {/* Grid of Sensory Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[800px] md:h-[600px]">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-sm">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Detail 1" />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-sm">
                   <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Detail 2" />
              </div>
               <div className="col-span-1 row-span-1 overflow-hidden rounded-sm">
                   <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Detail 3" />
              </div>
              <div className="col-span-1 row-span-2 overflow-hidden rounded-sm">
                   <img src="https://images.unsplash.com/photo-1595515106965-0e553a638a53?q=80&w=800" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Detail 4" />
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-sm">
                   <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Detail 5" />
              </div>
          </div>
      </Section>

      {/* Bridge Between Cultures - Page 18 */}
      <Section className="bg-[#8C7B70] text-white">
          <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">{content.serenity.cultures.title}</h2>
              <p className="opacity-90 text-lg">{content.serenity.cultures.desc}</p>
          </div>

          {/* Saudi */}
          <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/800px-Flag_of_Saudi_Arabia.svg.png" alt="KSA" className="w-12 h-8 object-cover shadow-sm" />
                  <h3 className="font-serif text-2xl uppercase tracking-widest">{content.serenity.cultures.saudi.title}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {content.serenity.cultures.saudi.items.map((item, i) => (
                      <div key={i} className="bg-white/10 p-8 rounded-sm backdrop-blur-sm hover:bg-white/20 transition-colors">
                          <h4 className="font-bold text-bonsai-accent mb-4 text-xl">{item.title}</h4>
                          <p className="leading-relaxed text-sm">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Japanese */}
          <div>
              <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-8 bg-white flex items-center justify-center shadow-sm">
                       <div className="w-4 h-4 bg-[#BC002D] rounded-full"></div>
                   </div>
                  <h3 className="font-serif text-2xl uppercase tracking-widest">{content.serenity.cultures.japanese.title}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {content.serenity.cultures.japanese.items.map((item, i) => (
                      <div key={i} className="bg-white/10 p-8 rounded-sm backdrop-blur-sm hover:bg-white/20 transition-colors">
                          <h4 className="font-bold text-bonsai-accent mb-4 text-xl">{item.title}</h4>
                          <p className="leading-relaxed text-sm">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Serenity;
