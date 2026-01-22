import type { ReactNode } from "react";
import InViewItem from "@/components/ui/InViewItem";

/* ======================================================
   TYPES
====================================================== */

export type PillarItem = {
  icon: "experience" | "infrastructure" | "safety" | "communication";
  title: string;
  description: string;
};

type PillarListProps = {
  items: PillarItem[];
};

/* ======================================================
   COMPONENT
====================================================== */

export default function PillarList({ items }: PillarListProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <InViewItem key={index} delay={index * 120}>
          <div className="flex gap-4">
            <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              {iconMap[item.icon]}
            </div>

            <div>
              <h3 className="text-base font-medium text-[#0c2e2e]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#3b4f4f]">
                {item.description}
              </p>
            </div>
          </div>
        </InViewItem>
      ))}
    </div>
  );
}

/* ======================================================
   ICON REGISTRY (LOCKED)
====================================================== */

const iconClass = "h-7 w-7 text-green-600";

const iconMap: Record<PillarItem["icon"], ReactNode> = {
  experience: <IconExperience />,
  infrastructure: <IconInfrastructure />,
  safety: <IconSafety />,
  communication: <IconCommunication />,
};

/* ======================================================
   ICONS — SIMPLE, MEDICAL, CALM
====================================================== */

function IconExperience() {
  return (
    <svg
      className={iconClass}
      viewBox="2 2 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Badge */}
      <circle cx="12" cy="9" r="5.5" />

      {/* Check */}
      <path d="M9.5 9.5l1.6 1.6 3.4-3.4" />

      {/* Ribbon */}
      <path d="M8.5 14.5l-1.5 5L12 17.5l5 2-1.5-5" />
    </svg>
  );
}


function IconInfrastructure() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </svg>
  );
}

function IconSafety() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
    </svg>
  );
}

function IconCommunication() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a4 4 0 01-4 4H7l-4 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
    </svg>
  );
}
