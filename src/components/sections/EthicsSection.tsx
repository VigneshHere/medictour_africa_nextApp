import { Container } from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EthicsPanel from "@/components/ui/EthicsPanel";
import { EthicsSectionData } from "@/types/sections";

type Props = {
  data: EthicsSectionData;
};

export default function EthicsSection({ data }: Props) {
  return (
    <section
      aria-labelledby="ethics-heading"
      className="py-24 bg-transparent"
    >
      <Container>
        <SectionHeading
          id="ethics-heading"
          title={data.heading}
          subline={data.subline}
        />

        <EthicsPanel principles={data.principles} />
      </Container>
    </section>
  );
}
