"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  repeat?: boolean;
};

export default function InViewItem({
  children,
  delay = 0,
  repeat = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"}
      `}
    >
      {children}
    </div>
  );
}
