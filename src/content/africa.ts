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
   HERO
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
    href: "https://wa.me/919895332222",
  },
  secondaryCTA: {
    label: "Talk to our care team",
    href: "tel:+919895332222",
  },
};

/* ======================================================
   PROBLEMS
====================================================== */

export const africaProblems: CountryProblemsSectionData = {
  heading: "Healthcare challenges many patients in Africa face today",
  description:
    "Accessing timely, affordable, and trusted medical care remains difficult for many patients.",
  items: [
    { text: "Long waiting times for essential procedures", icon: "waiting" },
    { text: "Limited access to specialised treatments", icon: "limited-access" },
    { text: "High costs for overseas care", icon: "high-cost" },
    { text: "Uncertainty about whom to trust", icon: "uncertainty" },
  ],
};

/* ======================================================
   WHY INDIA
====================================================== */

export const africaWhyIndia: CountrySolutionSectionData = {
  heading: "Why patients from Africa consider treatment in India",
  subline:
    "Clinical experience, infrastructure quality, and clear communication.",
  pillars: [
    {
      icon: "experience",
      title: "Experienced specialists",
      description:
        "High-volume specialists across complex medical disciplines.",
    },
    {
      icon: "infrastructure",
      title: "Advanced hospital infrastructure",
      description:
        "Modern diagnostics, surgical systems, and care teams.",
    },
    {
      icon: "safety",
      title: "International safety standards",
      description:
        "Globally aligned treatment and governance protocols.",
    },
    {
      icon: "communication",
      title: "Clear English communication",
      description:
        "Transparent discussions on diagnosis, risk, and recovery.",
    },
  ],
  points: [],
};

/* ======================================================
   CARE SUPPORTED
====================================================== */

export const africaCareSupported: CareSupportedSectionData = {
  heading: "Medical care supported through MedicTour",
  subline:
    "Care is recommended based on medical need, not hospital promotion.",
  categories: [
    {
      title: "Surgical and interventional care",
      items: ["Heart care", "Orthopaedics", "Neurosurgery"],
    },
    {
      title: "Medical and long-term care",
      items: ["Cancer care", "Neurology", "Renal care"],
    },
    {
      title: "Advanced procedures",
      items: ["Transplants", "High-risk procedures"],
    },
  ],
};

/* ======================================================
   JOURNEY
====================================================== */

export const africaJourney: JourneySectionData = {
  heading: "Your medical journey, guided with care",
  steps: [
    {
      step: 1,
      title: "Initial medical review",
      description:
        "Share medical reports for assessment and guidance.",
    },
    {
      step: 2,
      title: "Care matching",
      description:
        "Specialist and treatment identification.",
    },
    {
      step: 3,
      title: "Travel & treatment coordination",
      description:
        "Hospital scheduling and on-ground support.",
    },
    {
      step: 4,
      title: "Recovery support",
      description:
        "Post-treatment guidance and follow-up.",
    },
  ],
};

/* ======================================================
   CARE PRINCIPLES
====================================================== */

export const africaCarePrinciples: CarePrincipleSectionData = {
  heading: "We recommend care, not hospitals",
  points: [
    {
      title: "Based on your medical condition",
      description:
        "Decisions based on clinical evaluation.",
    },
    {
      title: "Matched to expertise and technology",
      description:
        "Right doctor, right tools.",
    },
    {
      title: "Recovery and urgency considered",
      description:
        "Plans adapted to patient needs.",
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
