import { Container } from "@/components/ui/Container";
import { CountrySolutionSectionData } from "@/types/sections";
import SectionHeading from "@/components/ui/SectionHeading";
import PillarList from "@/components/ui/PillarList";
import InViewItem from "@/components/ui/InViewItem";




type Props = {
  data: CountrySolutionSectionData;
};

export default function CountrySolutionSection({ data }: Props) {
  return (
    <section className="bg-white py-24" aria-labelledby="why-india-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">

          {/* LEFT — AUTHORITY CONTENT */}
          <div className="max-w-xl">
            <SectionHeading
              id="why-india-heading"
              title={data.heading}
              subline={data.subline}
            />

            {/* Pillars */}
            <div className="mt-10 animate-fade-up">
              <PillarList items={data.pillars} />
            </div>
          </div>

          {/* RIGHT — SUPPORTING REASONS */}
          <div className="flex flex-col space-y-6 lg:pt-6">
            {data.points.map((point, index) => (
              <InViewItem key={index} delay={index * 100}>
                <div className="flex gap-4 border-b border-gray-100 pb-6 last:border-b-0">
                  <span
                    aria-hidden
                    className="mt-1 text-green-700 text-2xl md:text-2xl font-semibold leading-none"
                  >
                    →
                  </span>

                  <div>
                    <h3 className="text-base font-medium text-[#0c2e2e]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[#3b4f4f] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </InViewItem>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
