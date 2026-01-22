import { EthicsSectionData } from "@/types/sections";

export function ethicsSchema(data: EthicsSectionData) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalGuideline",
    name: data.heading,
    description: data.subline,
    guidelineSubject: data.principles.map((item) => ({
      "@type": "MedicalGuidelineContraindication",
      description: item.title + " — " + item.description,
    })),
  };
}
