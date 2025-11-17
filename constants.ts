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
      scrollExplore: 'Scroll to explore'
    },
    designer: {
      title: 'Japanese Architect',
      subtitle: 'Honest Design',
      name: 'Keiji Ashizawa',
      desc: 'Keiji Ashizawa is a world-renowned Japanese architect, celebrated for his unique philosophy known as "honest design." This philosophy embraces profound simplicity and prioritizes function without compromising on beauty.'
    },
    serenity: {
      title: 'Oasis of Serenity',
      subtitle: 'Bonsai Philosophy',
      desc: 'Bonsai is not just a small tree in a pot — it is the heart of a timeless Japanese art form that embodies harmony between nature and human presence. It reveals beauty in its purest form.'
    },
    project: {
      title: 'The Project',
      amenities: 'Amenities',
      clubhouse: 'Clubhouse'
    },
    contact: {
      title: 'Contact Us',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Message',
      submit: 'Send Message'
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
      scrollExplore: 'مرر للاستكشاف'
    },
    designer: {
      title: 'المصمم الياباني',
      subtitle: 'التصميم الصادق',
      name: 'كيجي أشيزاوا',
      desc: 'كيجي أشيزاوا هو مهندس ومعماري ياباني عالمي، ذاع صيته بفضل فلسفته الخاصة التي يُطلق عليها "التصميم الصادق"؛ وهي فلسفة تحتفي بالبساطة العميقة، وتمنح الأولوية للوظيفة دون أن تفرط في الجمال.'
    },
    serenity: {
      title: 'واحة سكون',
      subtitle: 'فلسفة بونساي',
      desc: 'بونساي ليست مجرد شجرة صغيرة في إناء، بل هي محور فن ياباني عريق يُجسّد التناغم بين الطبيعة والإنسان، ويُظهر الجمال في أبهى صوره.'
    },
    project: {
      title: 'المشروع',
      amenities: 'المميزات',
      clubhouse: 'النادي الاجتماعي'
    },
    contact: {
      title: 'اتصل بنا',
      namePlaceholder: 'الاسم',
      emailPlaceholder: 'البريد الإلكتروني',
      messagePlaceholder: 'الرسالة',
      submit: 'إرسال'
    }
  }
};