import { Container } from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import JourneyStepCard from "@/components/ui/JourneyStepCard";
import { JourneySectionData } from "@/types/sections";

type Props = {
  data: JourneySectionData;
};

export default function JourneySection({ data }: Props) {
  return (
    <section
      aria-labelledby="journey-heading"
      className="py-24 bg-transparent"
    >
      <Container>
        <SectionHeading
          id="journey-heading"
          title={data.heading}
          subline={data.subline}
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {data.steps.map((step, index) => (
            <JourneyStepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              align={step.step <= 2 ? "left" : "right"}
              delay={index * 120}
            />
          ))}
        </div>

        {data.note && (
          <p className="mt-14 text-center text-sm text-[#6b7d7d]">
            {data.note}
          </p>
        )}
      </Container>
    </section>
  );
}
