import { SupportSectionData } from "@/types/sections";
import { Container } from "@/components/ui/Container";

interface SupportSectionProps {
  data: SupportSectionData;
}

export default function SupportSection({ data }: SupportSectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {data.heading}
        </h2>

        <ul className="mt-8 space-y-4 max-w-3xl">
          {data.points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-green-600 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
