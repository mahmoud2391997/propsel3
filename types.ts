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
  };
  designer: {
    title: string;
    subtitle: string;
    name: string;
    desc: string;
  };
  serenity: {
    title: string;
    subtitle: string;
    desc: string;
  };
  project: {
    title: string;
    amenities: string;
    clubhouse: string;
  };
  contact: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
}