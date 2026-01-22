"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Props = {
  step: number;
  title: string;
  description: string;
  align: "left" | "right";
  delay: number;
};

export default function JourneyStepCard({
  step,
  title,
  description,
  align,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // play once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        "relative max-w-xl rounded-xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        align === "left" ? "ml-12" : "mr-12"
      )}
    >
      {/* Badge */}
      <div
        className={clsx(
          "absolute top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#0c3b3b] text-white font-semibold",
          align === "left" ? "-left-12" : "-right-12"
        )}
      >
        {step}
      </div>

      <p className="text-sm font-medium text-green-700">Step {step}</p>
      <h3 className="mt-1 text-lg font-semibold text-[#0c2e2e]">
        {title}
      </h3>
      <p className="mt-2 text-[#3b4f4f] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
