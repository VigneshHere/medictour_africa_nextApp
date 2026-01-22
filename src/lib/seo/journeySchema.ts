import { JourneySectionData } from "@/types/sections";

export function journeySchema(data: JourneySectionData) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.heading,
    step: data.steps.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.description,
    })),
  };
}
