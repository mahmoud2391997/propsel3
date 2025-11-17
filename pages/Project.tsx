import React from 'react';
import { useLanguage } from '../LanguageContext';
import Section from '../components/Section';
import { CheckCircle } from 'lucide-react';

const Project: React.FC = () => {
  const { content, language } = useLanguage();

  const amenities = [
    { title: language === 'en' ? 'Japanese Gardens' : 'حدائق يابانية', icon: '🌿' },
    { title: language === 'en' ? 'Tea Room' : 'غرفة شاي', icon: '🍵' },
    { title: language === 'en' ? 'Library' : 'مكتبة', icon: '📚' },
    { title: language === 'en' ? 'Cinema' : 'سينما', icon: '🎬' },
    { title: language === 'en' ? 'Co-working' : 'مساحة عمل', icon: '💻' },
    { title: language === 'en' ? 'Smart Home' : 'منزل ذكي', icon: '🏠' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-bonsai-bg">
      {/* Header */}
      <div className="py-20 container mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl text-bonsai-dark mb-6">{content.project.title}</h1>
        <p className="text-xl text-bonsai-light max-w-2xl mx-auto">
            {language === 'en' ? 'Designed for life, crafted for peace.' : 'صمم للحياة، وصيغ للسلام.'}
        </p>
      </div>

      {/* Amenities Grid */}
      <Section className="bg-white">
        <h2 className="text-center font-serif text-3xl mb-16 text-bonsai-dark">{content.project.amenities}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {amenities.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 hover:bg-bonsai-bg transition-colors rounded-sm border border-transparent hover:border-bonsai-stone">
                    <span className="text-4xl mb-4">{item.icon}</span>
                    <span className="text-bonsai-base font-medium tracking-wide">{item.title}</span>
                </div>
            ))}
        </div>
      </Section>

      {/* Clubhouse Spotlight */}
      <Section>
          <div className="grid md:grid-cols-2 gap-12">
             <div className="h-[500px]">
                 <img src="https://images.unsplash.com/photo-1558463723-f99775c5d4e9?q=80&w=1000" className="w-full h-full object-cover rounded-sm shadow-xl" alt="Clubhouse" />
             </div>
             <div className="flex flex-col justify-center space-y-6">
                 <h2 className="font-serif text-4xl text-bonsai-dark">{content.project.clubhouse}</h2>
                 <p className="text-bonsai-light">
                    {language === 'en' 
                    ? 'The social club sits at the heart of Bonsai, offering dedicated spaces for residents. From a quiet Tea Room to a vibrant Cinema.'
                    : 'يتوسط بونساي النادي الاجتماعي موفراً مساحات خصصت لخدمة قاطني المشروع. من غرفة الشاي الهادئة إلى السينما الحيوية.'}
                 </p>
                 <ul className="space-y-3">
                    {[
                        language === 'en' ? 'Japanese Tea Room' : 'غرفة شاي يابانية',
                        language === 'en' ? 'Private Cinema' : 'سينما خاصة',
                        language === 'en' ? 'Reading Library' : 'مكتبة للقراءة'
                    ].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-bonsai-base">
                            <CheckCircle size={18} className="text-bonsai-accent" /> {feat}
                        </li>
                    ))}
                 </ul>
             </div>
          </div>
      </Section>

      {/* Location Map Placeholder */}
      <Section className="bg-bonsai-dark text-white">
          <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-4">Vibrant Location</h2>
              <p className="opacity-80">{language === 'en' ? 'Everything you need is just minutes away.' : 'كل ما تحتاجه على بعد دقائق.'}</p>
          </div>
          <div className="w-full h-[500px] bg-gray-200 rounded-sm overflow-hidden relative group">
              {/* Mock Map */}
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/46.71,24.71,13,0/1000x600?access_token=placeholder')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-bonsai-accent text-white px-6 py-3 rounded-full shadow-xl font-bold">
                      BONSAI
                  </div>
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Project;