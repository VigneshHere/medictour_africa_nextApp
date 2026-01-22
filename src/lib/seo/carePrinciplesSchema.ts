import { CarePrincipleSectionData } from "@/types/sections";

export function carePrinciplesSchema(data: CarePrincipleSectionData) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.heading,
    itemListElement: data.points.map((point, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: point.title,
      description: point.description,
    })),
  };
}
