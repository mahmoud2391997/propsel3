import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';
import { ArrowDown, Play, MapPin, Users, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center bg-bonsai-dark overflow-hidden">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620626574086-7665df7774d4?q=80&w=2531&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-light">{content.home.heroSubtitle}</h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.4 }}
          >
             <h1 className="font-serif text-6xl md:text-9xl font-bold mb-8 tracking-wider">{content.home.heroTitle}</h1>
          </motion.div>

           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="mt-12"
          >
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mx-auto hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                <Play fill="currentColor" className="ml-1" size={24} />
            </div>
            <p className="mt-4 text-sm uppercase tracking-widest opacity-80">{content.nav.serenity} Video</p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2"
        >
            <span className="text-xs uppercase tracking-widest opacity-70">{content.home.scrollExplore}</span>
            <ArrowDown className="animate-bounce opacity-70" size={20} />
        </motion.div>
      </div>

      {/* Philosophy Teaser */}
      <Section className="bg-bonsai-bg">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1599598425947-33040e77296a?q=80&w=1000&auto=format&fit=crop" 
                    alt="Bonsai Tree" 
                    className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                />
            </div>
            <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl text-bonsai-dark leading-tight">
                    {language === 'en' ? (
                        <>
                            Beauty in <span className="italic text-bonsai-accent">Simplicity</span>.
                        </>
                    ) : (
                        <>
                            الجمال في <span className="italic text-bonsai-accent">البساطة</span>.
                        </>
                    )}
                </h2>
                <p className="text-bonsai-light text-lg leading-relaxed">
                    {content.serenity.desc}
                </p>
                <Link to="/serenity" className="inline-block border-b border-bonsai-dark pb-1 uppercase text-sm tracking-widest hover:text-bonsai-accent hover:border-bonsai-accent transition-colors">
                    {language === 'en' ? 'Read Our Philosophy' : 'اقرأ فلسفتنا'}
                </Link>
            </div>
        </div>
      </Section>

      {/* Investment Case */}
      <Section className="bg-bonsai-stone/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl mb-4 text-bonsai-dark">
                {language === 'en' ? 'Attractive Investment' : 'فرصة استثمارية واعدة'}
            </h2>
            <p className="text-bonsai-light">
                {language === 'en' 
                    ? 'A unique opportunity in the heart of Riyadh, designed for both living and investing.'
                    : 'فرصة فريدة في قلب الرياض، صممت لتكون سكناً واستثماراً في آن واحد.'}
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { icon: "📈", label: language === 'en' ? 'High Yields' : 'عوائد عالية' },
                { icon: "🧩", label: language === 'en' ? 'Flexible Plans' : 'خطط مرنة' },
                { icon: "🛡️", label: language === 'en' ? 'Managed' : 'إدارة تأجير' },
                { icon: "📍", label: language === 'en' ? 'Prime Location' : 'موقع استراتيجي' },
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-sm shadow-sm"
                >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="uppercase tracking-wider text-sm font-bold text-bonsai-base">{item.label}</h3>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Sections Grid Links */}
      <div className="grid md:grid-cols-2 min-h-[600px]">
            <Link to="/project" className="relative group overflow-hidden block h-full min-h-[400px]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549573160-281f72221784?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-bonsai-dark/40 group-hover:bg-bonsai-dark/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <MapPin size={48} className="mb-4 opacity-80" />
                    <h3 className="font-serif text-3xl md:text-4xl mb-2">{content.project.title}</h3>
                    <p className="uppercase tracking-widest text-sm">{language === 'en' ? 'Explore Location & Amenities' : 'استكشف الموقع والمرافق'}</p>
                </div>
            </Link>
            <Link to="/designer" className="relative group overflow-hidden block h-full min-h-[400px]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-bonsai-dark/40 group-hover:bg-bonsai-dark/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <Users size={48} className="mb-4 opacity-80" />
                    <h3 className="font-serif text-3xl md:text-4xl mb-2">{content.nav.designer}</h3>
                    <p className="uppercase tracking-widest text-sm">{language === 'en' ? 'Meet Keiji Ashizawa' : 'تعرف على المصمم'}</p>
                </div>
            </Link>
      </div>

      {/* Gallery Preview */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                 <h2 className="font-serif text-4xl text-bonsai-dark mb-2">Gallery</h2>
                 <p className="text-bonsai-light">A glimpse into serenity.</p>
            </div>
             <Link to="/project" className="flex items-center gap-2 text-bonsai-base hover:text-bonsai-accent mt-4 md:mt-0">
                {language === 'en' ? 'View Full Gallery' : 'عرض المعرض الكامل'} <ImageIcon size={18} />
             </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px]">
            <div className="md:col-span-2 h-full rounded-sm overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Interior" />
            </div>
            <div className="flex flex-col gap-4 h-full">
                <div className="h-1/2 rounded-sm overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1616593871687-37396760566e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Detail" />
                </div>
                <div className="h-1/2 rounded-sm overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1586925018306-3e16999896e1?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Detail" />
                </div>
            </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <div className="bg-bonsai-base text-white py-24 text-center">
        <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl mb-6">{language === 'en' ? 'Begin Your Journey' : 'ابدأ رحلتك'}</h2>
            <p className="max-w-xl mx-auto mb-10 opacity-80">
                {language === 'en' 
                ? 'Register your interest today and become a part of the Bonsai community.'
                : 'سجل اهتمامك اليوم وكن جزءاً من مجتمع بونساي.'}
            </p>
            <Link to="/contact" className="inline-block bg-white text-bonsai-base px-10 py-4 uppercase tracking-widest font-bold hover:bg-bonsai-accent hover:text-white transition-colors">
                {content.contact.title}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;