
import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';
import { ArrowDown, Play, Wallet, Shield, MapPin, TrendingUp, PieChart, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { content, language, dir } = useLanguage();

  // Icon mapping for investment section
  const getIcon = (name: string) => {
    switch(name) {
      case 'money': return <Wallet size={32} />;
      case 'puzzle': return <PieChart size={32} />;
      case 'refresh': return <Grid size={32} />;
      case 'chart': return <TrendingUp size={32} />;
      case 'shield': return <Shield size={32} />;
      case 'map': return <MapPin size={32} />;
      default: return <Wallet size={32} />;
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Page 1 Replica */}
      <div className="relative h-screen w-full bg-[#C69C6D] flex flex-col justify-center items-center overflow-hidden">
        {/* Shoji Screen Effect - CSS Grid */}
        <div className="absolute inset-0 grid grid-cols-[repeat(8,1fr)] h-full w-full opacity-20">
             {[...Array(8)].map((_, i) => (
                 <div key={i} className="border-r border-black/50 h-full relative">
                     {[...Array(12)].map((_, j) => (
                         <div key={j} className="border-b border-black/50 h-[8.33%] w-full"></div>
                     ))}
                 </div>
             ))}
        </div>
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037] via-[#C69C6D] to-[#5D4037] opacity-80 mix-blend-multiply"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="mb-8"
           >
               {/* Bonsai Logo Shape (Simplified) */}
               <div className="w-24 h-24 border-4 border-white rounded-full border-t-transparent mx-auto rotate-45 mb-6"></div>
           </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
          >
             <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 tracking-[0.2em]">{content.home.heroTitle}</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl tracking-[0.3em] uppercase font-light"
          >
            {content.home.heroSubtitle}
          </motion.p>

           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 text-xl font-arabic"
          >
             {language === 'en' ? '安らぎのオアシス' : '安らぎのオアシス'}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 text-white flex flex-col items-center gap-2 z-20"
        >
            <ArrowDown className="animate-bounce opacity-70" size={24} />
        </motion.div>
      </div>

      {/* Page 2: Bonsai Tree */}
      <div className="bg-white relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
            {/* Left: Textured Wood Background or Image */}
            <div className="relative h-[50vh] md:h-auto bg-[#5D4037] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1599598425947-33040e77296a?q=80&w=1000&auto=format&fit=crop" 
                    alt="Bonsai Tree" 
                    className="absolute bottom-0 right-0 w-3/4 object-contain transform translate-y-10 translate-x-10 md:translate-x-0"
                />
            </div>
            {/* Right: Content */}
            <div className="flex items-center p-12 md:p-24 bg-white">
                <div className="max-w-xl">
                    <h2 className="font-serif text-5xl md:text-6xl text-bonsai-dark mb-8">{content.home.bonsaiTree.title}</h2>
                    <p className="text-bonsai-light text-lg leading-relaxed text-justify">
                        {content.home.bonsaiTree.desc}
                    </p>
                    <div className="mt-8 text-bonsai-base opacity-60 text-sm leading-loose">
                        盆栽は、小さな鉢の中で樹木を育てる日本の伝統芸術です。それは、栽培と造形、
                        そして静かな瞑想を融合させた深い芸術であり、忍耐と精密さ、そして高度な技が
                        求められます。
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Page 5: Videos */}
      <Section className="bg-black text-white py-32" fullWidth>
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end border-b border-white/20 pb-6">
             <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-widest">Videos</h2>
             <div className="hidden md:block text-sm opacity-70 max-w-xs text-right">
                 Discover how serenity at Bonsai transforms into a sensory experience.
             </div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 container mx-auto px-6">
            {/* Main Video */}
            <div className="md:col-span-12 relative group cursor-pointer overflow-hidden rounded-sm h-[60vh]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515859005217-8a1f0ad6070a?q=80&w=2000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <Play fill="white" size={32} />
                      </div>
                      <h3 className="mt-6 font-serif text-3xl">{content.serenity.title}</h3>
                 </div>
            </div>
            {/* Secondary Videos */}
            <div className="md:col-span-6 relative group cursor-pointer overflow-hidden rounded-sm h-[40vh]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                          <Play fill="white" size={24} />
                      </div>
                 </div>
                 <div className="absolute bottom-6 left-6">
                     <h4 className="font-serif text-xl">Bonsai Story</h4>
                 </div>
            </div>
             <div className="md:col-span-6 relative group cursor-pointer overflow-hidden rounded-sm h-[40vh]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                          <Play fill="white" size={24} />
                      </div>
                 </div>
                 <div className="absolute bottom-6 left-6">
                     <h4 className="font-serif text-xl">World Renowned</h4>
                 </div>
            </div>
        </div>
      </Section>

      {/* Page 8: Investment Case */}
      <div className="bg-[#F5F5F0] py-32">
         <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5 relative h-[500px] rounded-t-full overflow-hidden border-4 border-white shadow-xl">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590606035622-6f8e216a799c?q=80&w=1000')] bg-cover bg-center"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-10 left-0 right-0 text-center text-white">
                     <h2 className="font-serif text-4xl leading-tight">
                         {language === 'en' ? 'ATTRACTIVE' : 'فرصة'} <br />
                         {language === 'en' ? 'INVESTMENT' : 'استثمارية'} <br />
                         {language === 'en' ? 'CASE' : 'واعدة'}
                     </h2>
                 </div>
            </div>
            <div className="md:col-span-7 flex items-center">
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 w-full">
                     {content.home.investment.items.map((item, i) => (
                         <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="text-center group"
                         >
                             <div className="text-bonsai-dark opacity-70 mb-4 group-hover:opacity-100 transition-opacity flex justify-center">
                                 {getIcon(item.icon)}
                             </div>
                             <p className="font-sans text-sm md:text-base font-bold text-bonsai-base uppercase tracking-wider">
                                 {item.label}
                             </p>
                         </motion.div>
                     ))}
                 </div>
            </div>
         </div>
      </div>

      {/* Page 11: Team */}
      <Section className="bg-white">
         <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="font-serif text-5xl text-bonsai-dark mb-6">{content.home.team.title}</h2>
             <p className="text-bonsai-light leading-relaxed">
                 {content.home.team.desc}
             </p>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using Text Placeholders for Logos to adhere to no external assets requirement if not url, mimicking logos */}
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">KEIJI ASHIZAWA</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">Alramz</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">Baghlaf</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">BONSAI</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">ITAEC</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">Notions</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">Dinar</div>
             <div className="text-center font-bold text-xl text-bonsai-dark border-b-2 border-bonsai-dark/10 pb-4">Aqarmap</div>
         </div>
      </Section>

      {/* Page 19: Masterplan */}
      <Section className="bg-bonsai-bg border-t border-bonsai-stone">
          <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                  <h2 className="font-serif text-4xl text-bonsai-dark">{content.home.masterplan}</h2>
              </div>
              <div className="relative bg-white p-4 shadow-lg rounded-sm overflow-hidden">
                   <div className="aspect-[16/9] bg-[url('https://i.pinimg.com/originals/04/89/4b/04894b6c2c0324303144281805791240.jpg')] bg-cover bg-center opacity-90">
                       {/* Overlay showing phases roughly */}
                       <div className="absolute inset-0 flex flex-col md:flex-row">
                            <div className="flex-1 border-r border-bonsai-accent/30 flex items-center justify-center hover:bg-bonsai-accent/10 transition-colors cursor-pointer group relative">
                                <span className="bg-white/80 px-3 py-1 text-xs font-bold rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">Phase 1</span>
                            </div>
                            <div className="flex-1 border-r border-bonsai-accent/30 flex items-center justify-center hover:bg-bonsai-accent/10 transition-colors cursor-pointer group">
                                <span className="bg-white/80 px-3 py-1 text-xs font-bold rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">Clubhouse</span>
                            </div>
                            <div className="flex-1 flex items-center justify-center hover:bg-bonsai-accent/10 transition-colors cursor-pointer group">
                                <span className="bg-white/80 px-3 py-1 text-xs font-bold rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">Phase 2</span>
                            </div>
                       </div>
                   </div>
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Home;
