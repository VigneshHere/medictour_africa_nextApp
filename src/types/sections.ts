// Shared section data contracts

export interface HeroSectionData {
  title: string;
  subtitle: string;

  description?: string;

  bullets?: string[];

  imageSrc: string;

  primaryCTA: {
    label: string;
    href: string;
  };

  secondaryCTA?: {
    label: string;
    href: string;
  };
}


export type CountryProblemIcon =
  | "waiting"
  | "limited-access"
  | "high-cost"
  | "uncertainty";

export interface CountryProblemsSectionItem {
  text: string;
  icon: CountryProblemIcon;
}

export interface CountryProblemsSectionData {
  heading: string;
  description?: string;
  items: CountryProblemsSectionItem[];
}


export type PillarItem = {
  icon: "experience" | "infrastructure" | "safety" | "communication";
  title: string;
  description: string;
};

export type CountrySolutionSectionData = {
  heading: string;
  subline?: string;
  pillars: PillarItem[];
  points: {
    title: string;
    description: string;
  }[];
};




export interface CareSupportedSectionData {
  heading: string;
  subline?: string;
  categories: {
    title: string;
    items: string[];
  }[];
  note?: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface JourneySectionData {
  heading: string;
  subline?: string;
  steps: JourneyStep[];
  note?: string;
}


/* ======================================================
   CARE PRINCIPLES SECTION TYPES
====================================================== */

export interface CarePrinciplePoint {
  title: string;
  description: string;
}

export interface CarePrincipleSectionData {
  heading: string;
  subline?: string;
  points: CarePrinciplePoint[];
}

/* ======================================================
   Ethics Principle SECTION TYPES
====================================================== */

export interface EthicsPrinciple {
  title: string;
  description: string;
}

export interface EthicsSectionData {
  heading: string;
  subline?: string;
  principles: EthicsPrinciple[];
}









export interface SupportSectionData {
  heading: string;
  points: string[];
}

export interface CTASectionData {
  heading: string;
  description: string;

  primaryCTA: {
    label: string;
    href: string;
  };

  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export interface ContactSectionData {
  heading: string;
  email: string;
  phoneNumbers: string[];
  address: string;
}
