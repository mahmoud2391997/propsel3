
export type Language = 'en' | 'ar';

export interface Content {
  nav: {
    home: string;
    designer: string;
    serenity: string;
    project: string;
    contact: string;
    brochure: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    scrollExplore: string;
    bonsaiTree: {
      title: string;
      desc: string;
    };
    investment: {
      title: string;
      items: { icon: string; label: string }[];
    };
    team: {
      title: string;
      desc: string;
    };
    masterplan: string;
  };
  designer: {
    title: string;
    subtitle: string;
    name: string;
    desc: string;
    philosophy: {
      title: string;
      desc: string;
    };
    touches: {
      title: string;
      desc: string;
      items: { title: string; desc: string; img: string }[];
    };
  };
  serenity: {
    title: string;
    subtitle: string;
    desc: string;
    oasis: {
      title: string;
      desc: string;
    };
    cultures: {
      title: string;
      desc: string;
      saudi: { title: string; items: { title: string; desc: string }[] };
      japanese: { title: string; items: { title: string; desc: string }[] };
    };
  };
  project: {
    title: string;
    amenities: {
      title: string;
      categories: { name: string; items: string[] }[];
    };
    clubhouse: {
      title: string;
      rooms: { title: string; desc: string }[];
    };
    location: {
      metro: { title: string; desc: string };
      vibrant: { title: string; desc: string };
    };
    payment: {
      title: string;
      cash: { title: string; desc: string };
      installments: { title: string; headers: string[] };
    };
    warranties: {
      title: string;
      disclaimer: string;
      items: { years: string; label: string }[];
    };
  };
  contact: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    waitingList: string;
  };
}
