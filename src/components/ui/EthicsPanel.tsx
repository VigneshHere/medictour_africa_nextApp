"use client";

import { useEffect, useRef, useState } from "react";
import { EthicsPrinciple } from "@/types/sections";

type Props = {
  principles: EthicsPrinciple[];
};

export default function EthicsPanel({ principles }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
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
    <div
      ref={ref}
      className={`mx-auto mt-16 max-w-3xl rounded-2xl border border-gray-200 bg-white transition-all duration-700 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {principles.map((item, index) => (
        <div
          key={item.title}
          className={`relative px-8 py-6 ${
            index !== principles.length - 1
              ? "border-b border-gray-100"
              : ""
          }`}
        >
          {/* Bullet */}
          <span className="absolute left-4 top-8 h-3 w-3 rounded-full bg-[#0c3b3b]" />

          <h3 className="text-base font-semibold text-[#0c2e2e]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#3b4f4f]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
