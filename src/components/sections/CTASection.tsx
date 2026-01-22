import { CTASectionData } from "@/types/sections";
import { Container } from "@/components/ui/Container";

interface CTASectionProps {
  data: CTASectionData;
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section className="bg-green-50 py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {data.heading}
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            {data.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={data.primaryCTA.href}
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700 transition"
            >
              {data.primaryCTA.label}
            </a>

            {data.secondaryCTA && (
              <a
                href={data.secondaryCTA.href}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-white transition"
              >
                {data.secondaryCTA.label}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
