import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HeroSectionData } from "@/types/sections";

type HeroSectionProps = {
  data: HeroSectionData;
};

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081f1f] via-[#0c2e2e] to-[#134545]" />

      <Container>
        <div className="relative z-10 grid min-h-[80vh] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {data.title}
            </h1>

            <h2 className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-normal text-white/90 leading-snug">
              {data.subtitle}
            </h2>

            {data.description && (
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                {data.description}
              </p>
            )}

            {/* Trust bullets */}
            {data.bullets && (
              <ul className="mt-8 space-y-4 text-white/90">
                {data.bullets.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-sm">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={data.primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-base font-semibold text-white hover:bg-green-600 transition"
              >
                {data.primaryCTA.label}
              </a>

              {data.secondaryCTA && (
                <a
                  href={data.secondaryCTA.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition"
                >
                  {data.secondaryCTA.label}
                </a>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-end lg:justify-end">
            <div
              className="
                relative
                w-full
                max-w-[520px]
                h-[420px]
                sm:h-[480px]
                lg:h-[560px]
                xl:h-[600px]
                rounded-2xl
                overflow-hidden
                shadow-2xl
              "
            >
              {/* Left fade like reference */}
              <div
                className="
    pointer-events-none
    absolute inset-y-0 left-0
    w-1/3
    bg-gradient-to-r
    from-[#0c2e2e]/50
    via-[#0c2e2e]/20
    to-transparent
    z-10
  "
              />

              <Image
                src={data.imageSrc}
                alt={data.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
