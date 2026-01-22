// SEO Optimization

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Treatment in India for African Patients | MedicTour",
  description:
    "Trusted medical guidance for patients from Africa seeking advanced treatment in India. Ethical care, experienced doctors, transparent costs, and complete end-to-end support.",

  alternates: {
    canonical: "https://www.medictour.global/africa",
  },

  openGraph: {
    title: "Medical Treatment in India for African Patients | MedicTour",
    description:
      "Expert medical care in India for patients from Africa. From first opinion to recovery with trusted doctors and ethical guidance.",
    url: "https://www.medictour.global/africa",
    siteName: "MedicTour",
    images: [
      {
        url: "https://www.medictour.global/images/hero/africa.png",
        width: 1200,
        height: 630,
        alt: "Medical treatment in India for African patients",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Medical Treatment in India for African Patients | MedicTour",
    description:
      "Advanced medical care in India for patients from Africa with ethical guidance and complete support.",
    images: ["https://www.medictour.global/images/hero/africa.png"],
  },
};


import HeroSection from "@/components/sections/HeroSection";
import CountryProblemsSection from "@/components/sections/CountryProblemsSection";
import CountrySolutionSection from "@/components/sections/CountrySolutionSection";
import CareSupportedSection from "@/components/sections/CareSupportedSection";
import { journeySchema } from "@/lib/seo/journeySchema";
import { africaEthics } from "@/content/africa";
import { ethicsSchema } from "@/lib/seo/ethicsSchema";
import EthicsSection from "@/components/sections/EthicsSection";



import SupportSection from "@/components/sections/SupportSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import JourneySection from "@/components/sections/JourneySection";
import { africaJourney } from "@/content/africa";
import CarePrinciplesSection from "@/components/sections/CarePrinciplesSection";
import { africaCarePrinciples } from "@/content/africa";
import { carePrinciplesSchema } from "@/lib/seo/carePrinciplesSchema";





import {
  africaHero,
  africaProblems,
  africaWhyIndia,
  africaCareSupported,


  africaSupport,
  africaCTA,
  africaContact,
} from "@/content/africa";

export default function AfricaPage() {
  return (
    <main>
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "MedicTour",
            url: "https://www.medictour.global/africa",
            logo: "https://www.medictour.global/images/logo/logo.png",
            description:
              "MedicTour provides ethical medical guidance and treatment coordination in India for patients from Africa, from first opinion to recovery.",

            areaServed: {
              "@type": "Continent",
              name: "Africa",
            },

            medicalSpecialty: [
              "Cardiology",
              "Oncology",
              "Orthopedics",
              "Neurology",
              "Nephrology",
              "Surgery",
            ],

            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-98953-32222",
              contactType: "customer support",
              areaServed: "Africa",
              availableLanguage: ["English"],
            },

            address: {
              "@type": "PostalAddress",
              addressLocality: "Kaloor",
              addressRegion: "Kerala",
              addressCountry: "India",
            },

            /* ======================================================
               WHY INDIA – ItemList Schema (SEO Authority)
            ====================================================== */
            mainEntity: {
              "@type": "ItemList",
              name: "Why patients from Africa consider treatment in India",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Faster access to experienced medical specialists",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Hospitals equipped for complex and advanced procedures",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Treatment protocols aligned with international standards",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "English-speaking medical teams and clear communication",
                },
              ],
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Why patients from Africa choose treatment in India",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Faster access to experienced medical specialists"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Advanced hospital infrastructure for complex procedures"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "International safety and treatment standards"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Clear English communication with medical teams"
                  }
                }
              ]
            },

          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(journeySchema(africaJourney)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(carePrinciplesSchema(africaCarePrinciples)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ethicsSchema(africaEthics)),
        }}
      />




      <HeroSection data={africaHero} />
      <CountryProblemsSection data={africaProblems} />
      <CountrySolutionSection data={africaWhyIndia} />
      <CareSupportedSection data={africaCareSupported} />
      <JourneySection data={africaJourney} />
      <CarePrinciplesSection data={africaCarePrinciples} />
      <EthicsSection data={africaEthics} />



      <SupportSection data={africaSupport} />
      <CTASection data={africaCTA} />
      <ContactSection data={africaContact} />
    </main>
  );
}

