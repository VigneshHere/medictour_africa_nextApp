"use client";

import { useEffect, useRef, useState } from "react";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subline?: string;
};

export default function SectionHeading({
  id,
  title,
  subline,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h2
        {...(id ? { id } : {})}   // ✅ safe, SEO-friendly
        className="text-3xl md:text-4xl font-semibold text-[#0c2e2e]"
      >
        {title}
      </h2>

      {/* Underline animation */}
      <div className="mt-4 h-1 w-16 overflow-hidden rounded-full bg-green-100">
        <div
          className={`h-full bg-green-500 transition-transform duration-700 ease-out
            ${visible ? "translate-x-0" : "-translate-x-full"}`}
        />
      </div>

      {subline && (
        <p className="mt-4 text-lg text-[#3b4f4f] leading-relaxed">
          {subline}
        </p>
      )}
    </div>
  );
}
