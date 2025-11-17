
import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';
import { Check, Leaf, Coffee, BookOpen, Film, Monitor, Gamepad2, ShoppingBag, Shirt, Box, Wifi, ShieldCheck, Car } from 'lucide-react';

const Project: React.FC = () => {
  const { content, language } = useLanguage();

  // Helper for icons
  const getAmenityIcon = (item: string) => {
      if (item.includes('Garden')) return <Leaf size={20} />;
      if (item.includes('Tea')) return <Coffee size={20} />;
      if (item.includes('Library')) return <BookOpen size={20} />;
      if (item.includes('Cinema')) return <Film size={20} />;
      if (item.includes('Work')) return <Monitor size={20} />;
      if (item.includes('Game') || item.includes('Playstation')) return <Gamepad2 size={20} />;
      if (item.includes('Market')) return <ShoppingBag size={20} />;
      if (item.includes('Laundry')) return <Shirt size={20} />;
      if (item.includes('Locker')) return <Box size={20} />;
      if (item.includes('Smart')) return <Wifi size={20} />;
      if (item.includes('Security')) return <ShieldCheck size={20} />;
      if (item.includes('Parking')) return <Car size={20} />;
      return <Check size={20} />;
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="py-20 bg-[#F5F5F0]">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-6xl text-bonsai-dark mb-6 text-center">{content.project.title}</h1>
          </div>
      </div>

      {/* Amenities - Page 9 */}
      <Section>
          <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5 h-[800px] sticky top-24">
                  <img 
                    src="https://images.unsplash.com/photo-1633119712948-8b58d4df296b?q=80&w=1000" 
                    alt="Amenities Exterior" 
                    className="w-full h-full object-cover rounded-sm shadow-2xl"
                  />
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-6">
                  <h2 className="font-serif text-4xl text-bonsai-dark mb-12 text-right md:text-left">{content.project.amenities.title}</h2>
                  <div className="space-y-16">
                      {content.project.amenities.categories.map((cat, i) => (
                          <div key={i} className="flex flex-col md:flex-row gap-8 border-b border-bonsai-stone pb-8">
                              <div className="w-32 font-bold text-bonsai-accent text-lg uppercase tracking-widest">{cat.name}</div>
                              <div className="flex-1 space-y-4">
                                  {cat.items.map((item, j) => (
                                      <div key={j} className="flex items-center gap-4 text-bonsai-base group">
                                          <div className="text-bonsai-light group-hover:text-bonsai-accent transition-colors">
                                              {getAmenityIcon(item)}
                                          </div>
                                          <span>{item}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </Section>

      {/* Clubhouse - Page 10 */}
      <Section className="bg-bonsai-bg">
          <div className="text-center mb-16">
              <h2 className="font-serif text-5xl text-bonsai-dark">{content.project.clubhouse.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
              {content.project.clubhouse.rooms.map((room, i) => (
                  <div key={i} className="group">
                      <div className="h-64 overflow-hidden rounded-sm mb-6 bg-gray-200">
                          {/* Using placeholder logic for different rooms */}
                          <img 
                            src={`https://images.unsplash.com/photo-${
                                i === 0 ? '1576013551627-0cc20b96c2a7' : // Tea
                                i === 1 ? '1584715642381-6f1c4b452b1c' : // Garden
                                i === 2 ? '1507842217153-e52fbc0dec43' : // Library
                                i === 3 ? '1517604611653-9661acf182ae' : // Cinema
                                i === 4 ? '1497366811353-6870744d04b2' : // Work
                                '1511512578047-dfb367046420' // Recreation
                            }?q=80&w=800&auto=format&fit=crop`} 
                            alt={room.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                      </div>
                      <h3 className="font-bold text-bonsai-dark text-xl mb-2">{room.title}</h3>
                      <p className="text-bonsai-light text-sm leading-relaxed">{room.desc}</p>
                  </div>
              ))}
          </div>
      </Section>

      {/* Location & Metro - Page 13 & 14 */}
      <Section>
          <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div className="bg-[#F5F5F0] p-12 rounded-sm flex flex-col justify-center">
                   <h2 className="font-serif text-4xl text-bonsai-dark mb-6">{content.project.location.metro.title}</h2>
                   <p className="text-bonsai-base text-lg leading-relaxed">{content.project.location.metro.desc}</p>
              </div>
               <div className="bg-[#F5F5F0] p-12 rounded-sm flex flex-col justify-center">
                   <h2 className="font-serif text-4xl text-bonsai-dark mb-6">{content.project.location.vibrant.title}</h2>
                   <p className="text-bonsai-base text-lg leading-relaxed">{content.project.location.vibrant.desc}</p>
              </div>
          </div>
          {/* Mock Metro Map - Page 13 Style */}
          <div className="relative w-full h-[600px] bg-white border border-gray-200 p-4 overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="text-9xl font-bold text-gray-100">MAP</span>
                </div>
                {/* Abstract Metro Lines */}
                <svg className="w-full h-full" viewBox="0 0 800 600">
                    <path d="M 100 500 L 300 300 L 500 300 L 700 100" stroke="#E63946" strokeWidth="8" fill="none" />
                    <path d="M 100 100 L 300 300 L 300 500" stroke="#F1FAEE" strokeWidth="8" fill="none" /> 
                    <path d="M 50 300 L 750 300" stroke="#A8DADC" strokeWidth="4" fill="none" opacity="0.5"/>
                    
                    <circle cx="300" cy="300" r="10" fill="white" stroke="#E63946" strokeWidth="3" />
                    <text x="320" y="290" className="text-xs fill-gray-500 font-sans">Metro Station</text>

                    {/* Bonsai Location */}
                    <g transform="translate(320, 250)">
                        <circle cx="0" cy="0" r="15" fill="#5D4037" />
                        <path d="M -8 -5 L 0 8 L 8 -5" fill="none" stroke="white" strokeWidth="2" />
                        <text x="20" y="5" className="text-sm font-bold fill-[#5D4037]">BONSAI</text>
                    </g>
                </svg>
          </div>
      </Section>

      {/* Payment Options - Page 15 */}
      <Section className="bg-[#8C7B70] text-white">
          <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                  <h2 className="font-serif text-5xl mb-8">{content.project.payment.title}</h2>
                  <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm mb-8">
                      <h3 className="text-3xl font-bold mb-4">{content.project.payment.cash.title}</h3>
                      <p className="opacity-90 leading-relaxed">{content.project.payment.cash.desc}</p>
                  </div>
              </div>
              <div className="md:col-span-8">
                  <div className="bg-white text-bonsai-base p-8 md:p-12 rounded-sm shadow-2xl">
                      <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest border-b pb-4 border-gray-200">
                          {content.project.payment.installments.title}
                      </h3>
                      <div className="overflow-x-auto">
                          <table className="w-full text-left">
                              <thead>
                                  <tr className="text-bonsai-light text-sm uppercase">
                                      {content.project.payment.installments.headers.map((h, i) => (
                                          <th key={i} className="pb-4 pr-4">{h}</th>
                                      ))}
                                  </tr>
                              </thead>
                              <tbody className="font-bold text-lg">
                                  <tr className="border-b border-gray-100"><td className="py-4">1</td><td className="py-4">Signing</td><td className="py-4 text-bonsai-accent">20%</td><td className="py-4">20%</td></tr>
                                  <tr className="border-b border-gray-100"><td className="py-4">2</td><td className="py-4">20%</td><td className="py-4 text-bonsai-accent">15%</td><td className="py-4">35%</td></tr>
                                  <tr className="border-b border-gray-100"><td className="py-4">3</td><td className="py-4">40%</td><td className="py-4 text-bonsai-accent">15%</td><td className="py-4">50%</td></tr>
                                  <tr className="border-b border-gray-100"><td className="py-4">4</td><td className="py-4">60%</td><td className="py-4 text-bonsai-accent">15%</td><td className="py-4">65%</td></tr>
                                  <tr className="border-b border-gray-100"><td className="py-4">5</td><td className="py-4">80%</td><td className="py-4 text-bonsai-accent">15%</td><td className="py-4">80%</td></tr>
                                  <tr className="border-b border-gray-100"><td className="py-4">6</td><td className="py-4">100%</td><td className="py-4 text-bonsai-accent">15%</td><td className="py-4">95%</td></tr>
                                  <tr><td className="py-4">7</td><td className="py-4">Handover</td><td className="py-4 text-bonsai-accent">5%</td><td className="py-4">100%</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </Section>

      {/* Warranties - Page 16 */}
      <Section className="bg-[#BCAAA4] relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-50"></div>
          <div className="relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                 <h2 className="font-serif text-5xl md:text-6xl">{content.project.warranties.title}</h2>
                 <p className="mt-4 md:mt-0 max-w-xs text-sm opacity-80 text-right">{content.project.warranties.disclaimer}</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center">
                 {content.project.warranties.items.map((item, i) => (
                     <div key={i} className="flex flex-col items-center">
                         <div className="text-7xl md:text-8xl font-serif font-light mb-2 opacity-90">{item.years}</div>
                         <div className="text-xs uppercase tracking-widest mb-2 opacity-70">Years</div>
                         <div className="text-lg font-bold">{item.label}</div>
                     </div>
                 ))}
             </div>
          </div>
      </Section>
      
      {/* Gallery - Page 17 */}
      <Section>
        <h2 className="font-serif text-4xl text-bonsai-dark mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-sm">
                 <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 1" />
            </div>
            <div className="overflow-hidden rounded-sm">
                 <img src="https://images.unsplash.com/photo-1616593871687-37396760566e?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 2" />
            </div>
             <div className="overflow-hidden rounded-sm">
                 <img src="https://images.unsplash.com/photo-1586925018306-3e16999896e1?q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 3" />
            </div>
             <div className="md:col-span-3 overflow-hidden rounded-sm">
                 <img src="https://images.unsplash.com/photo-1600210491892-03d54db0d72e?q=80&w=2000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 4" />
            </div>
        </div>
      </Section>

    </div>
  );
};

export default Project;
