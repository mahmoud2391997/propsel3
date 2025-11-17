
import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  en: {
    nav: {
      home: 'Home',
      designer: 'Designer',
      serenity: 'Serenity',
      project: 'Project',
      contact: 'Contact',
      brochure: 'Brochure'
    },
    home: {
      heroTitle: 'BONSAI',
      heroSubtitle: 'OASIS OF SERENITY',
      scrollExplore: 'Scroll to explore',
      bonsaiTree: {
        title: 'BONSAI TREE',
        desc: 'Bonsai is a traditional Japanese art that involves growing trees in small containers. It is an art that blends horticulture, design, and meditation, requiring patience, precision, and skill. It is a craft passed down from generation to generation, rooted in a spirit of respect and contemplation. This quiet passion has become a reflection of refined taste and a part of the Japanese cultural identity.'
      },
      investment: {
        title: 'ATTRACTIVE INVESTMENT CASE',
        items: [
          { icon: 'money', label: 'Phased Pricing' },
          { icon: 'puzzle', label: 'Flexible Payment Plan' },
          { icon: 'refresh', label: 'Small Desired Units' },
          { icon: 'chart', label: 'Promising Rental Yields' },
          { icon: 'shield', label: 'Rental Management' },
          { icon: 'map', label: 'Metro Proximity' }
        ]
      },
      team: {
        title: 'OUR TEAM',
        desc: 'Behind Bonsai stands a strategic alliance of leading specialized companies — each a pioneer in its field — united by a shared vision and collective expertise to craft an exceptional residential experience.'
      },
      masterplan: 'MASTERPLAN'
    },
    designer: {
      title: 'JAPANESE ARCHITECT',
      subtitle: 'KEIJI ASHIZAWA',
      name: 'Keiji Ashizawa',
      desc: 'Keiji Ashizawa is a world-renowned Japanese architect, celebrated for his unique philosophy known as "honest design." This philosophy embraces profound simplicity and prioritizes function without compromising on beauty. He is known for his meticulous precision and extraordinary attention to detail.',
      philosophy: {
        title: 'HONEST DESIGN',
        desc: 'Ashizawa embraces a philosophy of honest design, where simplicity meets functionality and essence takes precedence over ornamentation. In his work, every line has meaning, and every material is left in its natural state.'
      },
      touches: {
        title: 'DESIGNER TOUCHES',
        desc: 'We don’t just build residential units — we craft spaces with a distinct spirit. In every corner, every texture, and every finish, we embed thoughtful design.',
        items: [
          { title: 'Copper Touch', desc: 'A touch of copper adds a warm glow and timeless elegance — enriching the space with refined detail and evoking the luxury of traditional craftsmanship.', img: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=1000&auto=format&fit=crop' },
          { title: 'Wood Touch', desc: 'Natural wood brings warmth and nostalgia into the space, creating a quiet harmony that connects the resident to nature and deepens the sense of serenity.', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000&auto=format&fit=crop' },
          { title: 'Stone Touch', desc: 'A touch of stone gives the unit a sense of authenticity and soft strength — adding visual depth and a natural balance that reflects the quiet beauty of simplicity and earth.', img: 'https://images.unsplash.com/photo-1505554898845-a230c6dd7a9a?q=80&w=1000&auto=format&fit=crop' }
        ]
      }
    },
    serenity: {
      title: 'Oasis of Serenity',
      subtitle: 'Bonsai Philosophy',
      desc: 'Bonsai is not just a small tree in a pot — it is the heart of a timeless Japanese art form that embodies harmony between nature and human presence. It reveals beauty in its purest form, through delicate details crafted within limited space.',
      oasis: {
        title: 'OASIS OF SERENITY',
        desc: 'Our spaces are meticulously designed to offer a peaceful escape from the noise of the city. What you see reflects purity in color and balance in form. What you touch radiates warmth and comfort.'
      },
      cultures: {
        title: 'Bridge between Cultures',
        desc: 'The Bonsai project represents a unique bridge between Japanese depth and Saudi authenticity.',
        saudi: {
          title: 'Inspiration from Saudi Culture',
          items: [
            { title: 'COURTYARD', desc: 'We’ve revived the spirit of the traditional Saudi courtyard — reimagined as a central space for connection, light, and air.' },
            { title: 'COPPER', desc: 'Copper — long used to adorn traditional Saudi doors — returns in our project with a contemporary spirit.' },
            { title: 'WATER', desc: 'We drew inspiration from the presence of water in Najdi and Hijazi architecture as a symbol of life and tranquility.' }
          ]
        },
        japanese: {
          title: 'Inspiration from Japanese Culture',
          items: [
            { title: 'SHOJI', desc: 'We drew inspiration from the spirit of Japanese shoji — with its delicate transparency and visual elegance.' },
            { title: 'TOKONOMA', desc: 'At the heart of the Japanese tea room, the presence of the tokonoma reveals itself — a quiet, traditional alcove.' },
            { title: 'TATAMI', desc: 'With a touch inspired by Japanese culture, we dedicated spaces for traditional tatami flooring offering grounding.' }
          ]
        }
      }
    },
    project: {
      title: 'The Project',
      amenities: {
        title: 'AMENITIES',
        categories: [
          { name: 'Serenity', items: ['Japanese Gardens', 'Scented Hallways', 'Japanese Tearoom'] },
          { name: 'Highlights', items: ['Water Features', 'Mist Cooling', 'Covered Gardens'] },
          { name: 'Entertainment', items: ['Cinema Room', 'Playstation Room', 'Recreation Area'] },
          { name: 'Services', items: ['Mini Market', 'Laundry Room', 'Delivery Lockers'] },
          { name: 'Features', items: ['Smart Home', '24/7 Security', 'Underground Parking'] }
        ]
      },
      clubhouse: {
        title: 'CLUBHOUSE',
        rooms: [
          { title: 'JAPANESE TEA ROOM', desc: 'A quiet corner that evokes the essence of traditional Japanese rituals.' },
          { title: 'JAPANESE GARDENS', desc: 'Spaces designed with the spirit of Zen, where trees, stones, and water come together.' },
          { title: 'LIBRARY', desc: 'A space that speaks the language of silence — where books rest quietly.' },
          { title: 'CINEMA', desc: 'A visual experience designed to immerse you in moments of quiet delight.' },
          { title: 'COWORKING SPACE', desc: 'A work environment inspired by the Japanese balance between focus and flow.' },
          { title: 'RECREATION AREA', desc: 'A space designed as a vibrant outlet for leisure and connection.' }
        ]
      },
      location: {
        metro: { title: 'Metro Proximity', desc: 'Our exceptional location next to Riyadh Metro Station (Khurais) places the entire city within your reach.' },
        vibrant: { title: 'Vibrant Location', desc: 'Everything you need is just minutes away from Bonsai.' }
      },
      payment: {
        title: 'PAYMENT OPTIONS',
        cash: { title: '100% CASH', desc: 'We prioritize and give preference to clients who choose to purchase their units in cash.' },
        installments: { title: 'INSTALLMENTS', headers: ['Payment', 'Progress', 'Amount', 'Total Paid'] }
      },
      warranties: {
        title: 'WARRANTIES',
        disclaimer: 'All warranties are provided by the manufacturer or importer.',
        items: [
          { years: '2', label: 'FULL WARRANTY' },
          { years: '10', label: 'Structure' },
          { years: '5', label: 'Electric & Plumbing' },
          { years: '2', label: 'Elevators & Lights' },
          { years: '25', label: 'Electric Panels' },
          { years: '10', label: 'Insulation' },
          { years: '3', label: 'Aluminium' },
          { years: '1', label: 'Doors & Paint' }
        ]
      }
    },
    contact: {
      title: 'Contact Us',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      phonePlaceholder: 'Your Phone',
      messagePlaceholder: 'Message',
      submit: 'Send Message',
      waitingList: 'Join Waiting List'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      designer: 'المصمم',
      serenity: 'واحة سكون',
      project: 'المشروع',
      contact: 'اتصل بنا',
      brochure: 'الكتيب'
    },
    home: {
      heroTitle: 'بونساي',
      heroSubtitle: 'واحة سكون',
      scrollExplore: 'مرر للاستكشاف',
      bonsaiTree: {
        title: 'شجرة بونساي',
        desc: 'بونساي فن ياباني يقوم على زراعة الأشجار داخل أوعية صغيرة. هو فن يدمج بين الزراعة والتصميم والتأمل، ويستلزم صبراً ودقة ومهارة. هو فن يتوارث جيل بعد جيل، بروح من الاحترام والتأمل. هذا الشغف الهادئ أصبح مرآة لذوق راقٍ، وجزءاً من هوية المجتمع الياباني الذي يرى في التفاصيل الصغيرة، عوالم من الجمال.'
      },
      investment: {
        title: 'فرصة استثمارية',
        items: [
          { icon: 'money', label: 'أسعار استثنائية' },
          { icon: 'puzzle', label: 'إمكانية الدفع بالتقسيط' },
          { icon: 'refresh', label: 'مساحات صغيرة وأسعار مناسبة' },
          { icon: 'chart', label: 'عائد تأجيري واستثماري واعد' },
          { icon: 'shield', label: 'إدارة التأجير بالنيابة عنك' },
          { icon: 'map', label: 'موقع استراتيجي بجوار المترو' }
        ]
      },
      team: {
        title: 'التحالف العقاري',
        desc: 'يقف وراء بونساي تحالف استراتيجي يجمع بين نخبة من الشركات المتخصصة، كلٌ منها رائد في مجاله، توحدت رؤاهم وطاقاتهم لصناعة تجربة سكنية استثنائية.'
      },
      masterplan: 'مخطط المشروع'
    },
    designer: {
      title: 'المصمم الياباني',
      subtitle: 'كيجي أشيزاوا',
      name: 'كيجي أشيزاوا',
      desc: 'كيجي أشيزاوا هو مهندس ومعماري ياباني عالمي، ذاع صيته بفضل فلسفته الخاصة التي يُطلق عليها "التصميم الصادق"؛ وهي فلسفة تحتفي بالبساطة العميقة، وتمنح الأولوية للوظيفة دون أن تفرط في الجمال. يُعرف عن أشيزاوا دقته المتناهية واهتمامه الاستثنائي بأدق التفاصيل.',
      philosophy: {
        title: 'التصميم الصادق',
        desc: 'يتبنى أشيزاوا فلسفة التصميم الصادق حيث تلتقي البساطة مع الوظيفة، ويعلو الجوهر على الزخرفة. في أعماله، كل خط له معنى، وكل خامة تُترك على طبيعتها.'
      },
      touches: {
        title: 'لمسات تصميمية',
        desc: 'نحن لا نبني وحدات سكنية عادية، بل نصنع مساحات تحمل روحاً خاصة تُولد من عناية دقيقة بالتفاصيل.',
        items: [
          { title: 'لمسة نحاسية', desc: 'لمسة من النحاس تضيف وهجاً دافئاً وأناقة خالدة تُثري التفاصيل وتمنح المساحة طابعاً راقياً يستحضر فخامة الحرف التقليدية.', img: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=1000&auto=format&fit=crop' },
          { title: 'لمسة خشبية', desc: 'خامة الخشب الطبيعية تبث في المكان دفئاً وحنيناً، وتخلق انسجاماً هادئاً يربط الساكن بالطبيعة ويعزز إحساس السكون.', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000&auto=format&fit=crop' },
          { title: 'لمسة حجرية', desc: 'لمسة الحجر تمنح الوحدة حضوراً أصيلاً وقوة ناعمة، تضيف عمقاً بصرياً وتوازناً يعكس جمال البساطة وهدوء الأرض.', img: 'https://images.unsplash.com/photo-1505554898845-a230c6dd7a9a?q=80&w=1000&auto=format&fit=crop' }
        ]
      }
    },
    serenity: {
      title: 'واحة سكون',
      subtitle: 'فلسفة بونساي',
      desc: 'بونساي ليست مجرد شجرة صغيرة في إناء، بل هي محور فن ياباني عريق يُجسّد التناغم بين الطبيعة والإنسان، ويُظهر الجمال في أبهى صوره عبر تفاصيل دقيقة في مساحة محدودة.',
      oasis: {
        title: 'واحة سكون',
        desc: 'في بونساي، السكون هو جوهر التجربة السكنية. فقد صُمّمت المساحات بعناية فائقة لتكون ملاذاً من صخب المدينة، حيث يُصبح الهدوء هو اللغة التي تُخاطب كل جزء فيك.'
      },
      cultures: {
        title: 'جسر بين ثقافتين',
        desc: 'يمثّل مشروع "بونساي" جسراً فريداً يربط بين العمق الياباني والأصالة السعودية.',
        saudi: {
          title: 'استلهام من الثقافة السعودية',
          items: [
            { title: 'الفناء', desc: 'استعدنا روح الفناء الداخلي، ذلك القلب النابض في البيت السعودي القديم.' },
            { title: 'نحاس', desc: 'النحاس، الذي لطالما زيّن الأبواب والمشربيات السعودية، عاد في مشروعنا بروح عصرية.' },
            { title: 'ماء', desc: 'استلهمنا حضور الماء من العمارة النجدية والحجازية، حيث لم يكن عنصراً جمالياً فحسب، بل رمزاً للحياة.' }
          ]
        },
        japanese: {
          title: 'استلهام من الثقافة اليابانية',
          items: [
            { title: 'شوجي', desc: 'استلهمنا روح الشوجي الياباني، بجماله البصري وشفافيته الخفيفة.' },
            { title: 'توكونوما', desc: 'في قلب غرفة الشاي اليابانية يتجلى أثر التوكونوما، ذلك الركن التقليدي الهادئ.' },
            { title: 'تاتامي', desc: 'بلمسة مستوحاة من الثقافة اليابانية، خصصنا مساحات لتغطى بأرضية تاتامي التقليدية.' }
          ]
        }
      }
    },
    project: {
      title: 'المشروع',
      amenities: {
        title: 'المميزات',
        categories: [
          { name: 'سكون', items: ['حدائق يابانية', 'ممرات معطرة', 'غرفة شاي ياباني'] },
          { name: 'تفاصيل', items: ['مسطحات مائية', 'رذاذ للمساحات المفتوحة', 'حدائق مغطاة'] },
          { name: 'ترفيه', items: ['غرفة سينما', 'غرفة بلاي ستيشن', 'منطقة ألعاب'] },
          { name: 'مرافق', items: ['ميني ماركت', 'مغسلة إلكترونية', 'غرفة استلام شحنات'] },
          { name: 'مميزات', items: ['منزل ذكي', 'كاميرات مراقبة', 'موقف قبو'] }
        ]
      },
      clubhouse: {
        title: 'نادي اجتماعي',
        rooms: [
          { title: 'غرفة شاي ياباني', desc: 'ركنٌ هادئ يستحضر الطقوس اليابانية الأصيلة، حيث تتحوّل لحظة احتساء الشاي إلى طقس روحي.' },
          { title: 'حدائق يابانية', desc: 'مساحات صُمّمت بروح الزِن، حيث تتناغم الأشجار، الحجارة والمياه لخلق بيئة تبعث على التأمل والسكينة.' },
          { title: 'مكتبة', desc: 'مساحة تتحدث بلغة الصمت، حيث تسكن الكتب وتهمس الكلمات.' },
          { title: 'سينما', desc: 'تجربة بصرية صُمّمت لتغمرك بلحظات من المتعة. شاشة تنبض بالحياة.' },
          { title: 'مساحة عمل', desc: 'بيئة عمل تستلهم من التوازن الياباني بين التركيز والانسيابية.' },
          { title: 'ترفيه', desc: 'منطقة خُصصت لتكون متنفساً للتسلية والتواصل، بتصميم يحتضن اللحظات.' }
        ]
      },
      location: {
        metro: { title: 'بجوار محطة المترو', desc: 'موقعنا الاستثنائي بجوار محطة مترو الرياض (خريص) يضع المدينة كلها في متناولك.' },
        vibrant: { title: 'موقع حيوي', desc: 'كل ما تحتاجه من خدمات على بعد دقائق من بونساي.' }
      },
      payment: {
        title: 'خيارات الدفع',
        cash: { title: '100% نقداً', desc: 'نعطي الأولوية والأفضلية للعملاء الراغبين في شراء وحداتهم بشكل نقدي.' },
        installments: { title: 'التقسيط', headers: ['الدفعة', 'نسبة الإنجاز', 'قيمة القسط', 'إجمالي المدفوع'] }
      },
      warranties: {
        title: 'الضمانات',
        disclaimer: 'جميع الضمانات من المصنع أو المستورد ويتم تسليم شهادات الضمان عند تسليم الوحدة.',
        items: [
          { years: '2', label: 'ضمان شامل' },
          { years: '10', label: 'هيكل إنشائي' },
          { years: '5', label: 'كهرباء وسباكة' },
          { years: '2', label: 'مصاعد وإضاءة' },
          { years: '25', label: 'علب كهربائية' },
          { years: '10', label: 'عزل مائي وحراري' },
          { years: '3', label: 'ألمنيوم' },
          { years: '1', label: 'أبواب ودهانات' }
        ]
      }
    },
    contact: {
      title: 'اتصل بنا',
      namePlaceholder: 'الاسم',
      emailPlaceholder: 'البريد الإلكتروني',
      phonePlaceholder: 'رقم الهاتف',
      messagePlaceholder: 'الرسالة',
      submit: 'إرسال',
      waitingList: 'سجل في قائمة الانتظار'
    }
  }
};
