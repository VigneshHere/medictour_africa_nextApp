"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CarePrincipleSectionData } from "@/types/sections";

type Props = {
  data: CarePrincipleSectionData;
};

export default function CarePrinciplesSection({ data }: Props) {
  const ref = useRef<HTMLUListElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="care-principles-heading"
      className="py-24 bg-transparent"
    >
      <Container>
        <SectionHeading
          id="care-principles-heading"
          title={data.heading}
          subline={data.subline}
        />

        <ul
          ref={ref}
          className="relative mx-auto mt-16 max-w-3xl space-y-14"
        >
          {data.points.map((point, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`relative pl-12 transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
            >
              {/* Dot */}
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-[#0c3b3b]" />

              {/* Vertical line */}
              {index !== data.points.length - 1 && (
                <span className="absolute left-[7px] top-6 h-full w-px bg-[#d6e5e1]" />
              )}

              <h3 className="text-lg font-semibold text-[#0c2e2e]">
                {point.title}
              </h3>
              <p className="mt-2 text-[#4b5f5f] leading-relaxed">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
