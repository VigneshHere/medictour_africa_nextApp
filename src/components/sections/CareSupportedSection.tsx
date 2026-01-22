import { Container } from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CareSupportedSectionData } from "@/types/sections";

type Props = {
  data: CareSupportedSectionData;
};

export default function CareSupportedSection({ data }: Props) {
  return (
    <section
      aria-labelledby="care-supported-heading"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#cfead6]
        via-[#a7d9b8]
        to-[#8ccca5]
        py-28
      "
    >
      {/* Soft texture overlay (premium feel) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]" />

      <Container>
        {/* Heading */}
        <div className="relative z-10 max-w-3xl">
          <SectionHeading
            id="care-supported-heading"
            title={data.heading}
            subline={data.subline}
          />
        </div>

        {/* Cards */}
        <div className="relative z-10 mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.categories.map((category, index) => (
            <article
              key={index}
              className="
                rounded-3xl
                bg-gradient-to-br
                from-[#0b3f3c]
                to-[#06302d]
                px-8
                py-10
                text-white
                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              <h3 className="text-lg font-semibold leading-snug">
                {category.title}
              </h3>

              {/* Divider */}
              <div className="mt-3 h-0.5 w-12 rounded-full bg-green-400" />

              <ul className="mt-6 space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-3">
                    <span
                      aria-hidden
                      className="mt-1 text-green-400 text-xl font-semibold"
                    >
                      →
                    </span>
                    <span className="text-sm leading-relaxed text-green-50">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Ethical note */}
        {data.note && (
          <p className="relative z-10 mt-16 text-center text-sm text-[#0c2e2e] opacity-80">
            {data.note}
          </p>
        )}
      </Container>
    </section>
  );
}
