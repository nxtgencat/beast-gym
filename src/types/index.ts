export interface Facility {
  img: string;
  alt: string;
  label: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  activities: string[];
  img: string;
  alt: string;
}

export interface PricingPlan {
  icon: string;
  name: string;
  features: string[];
  price: string;
}

export interface Coach {
  img: string;
  alt: string;
  name: string;
}

export interface BlogPost {
  img: string;
  alt: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  percent: number;
}

export interface InstagramPost {
  img: string;
  alt: string;
}

export type Page = 'home' | 'coach';
