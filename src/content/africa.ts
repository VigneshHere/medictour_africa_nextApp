import {
  HeroSectionData,
  CountryProblemsSectionData,
  CountrySolutionSectionData,
  CareSupportedSectionData,
  CarePrincipleSectionData,
  EthicsSectionData,
  JourneySectionData,
  SupportSectionData,
  CTASectionData,
  ContactSectionData,
} from "@/types/sections";

/* ======================================================
   HERO SECTION
====================================================== */

export const africaHero: HeroSectionData = {
  title: "Personal medical guidance",
  subtitle: "From first opinion to recovery",
  description:
    "Expert medical care in India — trusted by patients across Africa for seamless support from initial consultation to full recovery.",

  bullets: [
    "No middlemen, no hidden fees",
    "English-speaking care coordinators",
    "Comprehensive, end-to-end support",
  ],

  imageSrc: "/images/hero/africa.png",

  primaryCTA: {
    label: "WhatsApp – Get Medical Guidance",
    href: "https://wa.me/919895332222?text=Hi%2C%20I%27m%20from%20Africa%20and%20looking%20for%20medical%20guidance.",
  },

  secondaryCTA: {
    label: "Talk to our care team",
    href: "tel:+919895332222",
  },
};

/* ======================================================
   COUNTRY PROBLEMS
====================================================== */

export const africaProblems: CountryProblemsSectionData = {
  heading: "Healthcare challenges many patients in Africa face today",

  description:
    "Accessing timely, affordable, and trusted medical care remains difficult for many patients — especially when advanced treatment or specialist opinions are required.",

  items: [
    {
      text: "Long waiting times for essential medical procedures",
      icon: "waiting",
    },
    {
      text: "Limited access to advanced or specialised treatments",
      icon: "limited-access",
    },
    {
      text: "High costs when seeking treatment outside the country",
      icon: "high-cost",
    },
    {
      text: "Uncertainty about where to go and whom to trust",
      icon: "uncertainty",
    },
  ],
};


/* ======================================================
   WHY INDIA – AUTHORITY SECTION
====================================================== */

export const africaWhyIndia: CountrySolutionSectionData = {
  heading: "Why patients from Africa consider treatment in India",
  subline:
    "Practical medical reasons based on clinical experience, infrastructure, safety standards, and patient communication.",

  pillars: [
    {
      icon: "experience",
      title: "Faster access to experienced medical specialists",
      description:
        "High-volume specialists with extensive exposure to complex and high-risk medical conditions across multiple specialties.",
    },
    {
      icon: "infrastructure",
      title: "Hospitals equipped for complex and advanced procedures",
      description:
        "Hospitals equipped with advanced diagnostics, modern surgical systems, and multidisciplinary care teams.",
    },
    {
      icon: "safety",
      title: "Treatment protocols aligned with international standards",
      description:
        "Treatment protocols aligned with internationally recognised safety, quality, and clinical governance benchmarks.",
    },
    {
      icon: "communication",
      title: "English-speaking medical teams and clear communication",
      description:
        "English-speaking medical teams ensuring clarity in diagnosis, treatment planning, risks, and recovery.",
    },
  ],


  points: [
    {
      title: "Faster access to experienced medical specialists",
      description:
        "Patients often face long waiting periods for specialist consultations and procedures. In India, hospitals operate with dedicated teams that allow quicker evaluations and timely treatment decisions.",
    },
    {
      title: "Hospitals equipped for complex and advanced procedures",
      description:
        "India has hospitals that routinely perform high-volume, advanced procedures across cardiology, oncology, orthopaedics, neurology, and transplant medicine.",
    },
    {
      title: "Treatment protocols aligned with international standards",
      description:
        "Medical care in India follows globally recognised protocols supported by modern diagnostics, surgical infrastructure, and multidisciplinary teams.",
    },
    {
      title: "English-speaking medical teams and clear communication",
      description:
        "Doctors and care coordinators communicate clearly in English, helping patients and families understand diagnoses, options, risks, and recovery plans.",
    },
  ],
};




export const africaCareSupported: CareSupportedSectionData = {
  heading: "Medical care supported through MedicTour",
  subline:
    "Care is recommended based on medical condition, required expertise, and safety considerations — not hospital promotion.",

  categories: [
    {
      title: "Surgical and interventional care",
      items: [
        "Heart and vascular care",
        "Orthopaedics and joint replacement",
        "Neurosurgery",
      ],
    },
    {
      title: "Medical and long-term care",
      items: [
        "Cancer care",
        "Neurology",
        "Kidney and renal care",
      ],
    },
    {
      title: "Advanced and complex procedures",
      items: [
        "Transplant-related care",
        "High-risk and multi-disciplinary procedures",
        "Specialised medical interventions",
      ],
    },
  ],

  note:
    "Treatment recommendations are based on medical evaluation and expert review.",
};


/* ======================================================
   Journey Section
====================================================== */


export const africaJourney: JourneySectionData = {
  heading: "Your medical journey, guided with care",
  subline:
    "From initial medical review to recovery support, each step is carefully guided with safety, clarity, and medical expertise.",

  steps: [
    {
      step: 1,
      title: "Initial medical review",
      description:
        "You share your medical reports for an initial assessment and guidance.",
    },
    {
      step: 2,
      title: "Care matching",
      description:
        "We help identify appropriate expertise and treatment options based on your condition.",
    },
    {
      step: 3,
      title: "Travel and treatment coordination",
      description:
        "Support with hospital coordination, scheduling, and on-ground assistance in India.",
    },
    {
      step: 4,
      title: "Follow-up and recovery support",
      description:
        "Continued guidance during recovery and after you return home.",
    },
  ],

  note:
    "Treatment recommendations are based on medical evaluation and expert review.",
};



/* ======================================================
   CARE NOT HOSPITALS SECTION
====================================================== */



export const africaCarePrinciples: CarePrincipleSectionData = {
  heading: "We recommend care, not hospitals",
  subline:
    "Our recommendations focus on the best care for your condition, not just on hospital affiliations.",

  points: [
    {
      title: "Based on your medical condition",
      description:
        "Recommendations are based on thorough evaluation of your medical reports and needs.",
    },
    {
      title: "Matched to required expertise and technology",
      description:
        "We identify the most suitable specialists and advanced technology for your treatment.",
    },
    {
      title: "Consideration of urgency and recovery needs",
      description:
        "Treatment plans take into account the urgency of your condition and your recovery requirements.",
    },
  ],
};


/* ======================================================
   ETHICS  ✅ FINAL, SINGLE SOURCE
====================================================== */

export const africaEthics: EthicsSectionData = {
  heading: "Guidance built on safety and transparency",
  subline:
    "Ethical, patient-first medical guidance at every step.",
  principles: [
    {
      title: "Ethical medical guidance",
      description:
        "Patient safety and well-being come first.",
    },
    {
      title: "No unnecessary procedures",
      description:
        "Only clinically required treatments.",
    },
    {
      title: "Clear communication",
      description:
        "Honest, understandable medical advice.",
    },
    {
      title: "Patient confidentiality",
      description:
        "Strict data and privacy protection.",
    },
  ],
};

/* ======================================================
   SUPPORT / CTA / CONTACT
====================================================== */

export const africaSupport: SupportSectionData = {
  heading: "You are supported before and after travel",
  points: [
    "Pre-travel guidance",
    "On-ground support in India",
    "Recovery follow-up",
  ],
};

export const africaCTA: CTASectionData = {
  heading: "You don’t have to decide today",
  description:
    "Start with clarity and guidance.",
  primaryCTA: {
    label: "WhatsApp – Get Medical Guidance",
    href: "https://wa.me/919895332222",
  },
};

export const africaContact: ContactSectionData = {
  heading: "Contact MedicTour",
  email: "medictour.global@gmail.com",
  phoneNumbers: ["+91 86063 32222"],
  address: "Kaloor, Kochi, Kerala, India",
};
