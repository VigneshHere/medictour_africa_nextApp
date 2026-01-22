import React from "react";
import { CountryProblemIcon } from "@/types/sections";

/* ======================================================
   PUBLIC ICON DISPATCHER
====================================================== */

type Props = {
  type: CountryProblemIcon;
};

export function CountryProblemIconRenderer({ type }: Props) {
  switch (type) {
    case "waiting":
      return <CalendarClockIcon />;

    case "limited-access":
      return <HospitalIcon />;

    case "high-cost":
      return <MedicalCostIcon />;

    case "uncertainty":
      return <SignpostIcon />;

    default:
      return null;
  }
}

/* ======================================================
   ICONS (LOCKED APPROVED SET)
====================================================== */

/* Long waiting times */
function CalendarClockIcon() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M12 14v4l2 1" />
    </svg>
  );
}

/* Limited access to advanced treatment */
function HospitalIcon() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 7v4M10 9h4" />
    </svg>
  );
}

/* High cost of treatment */
function MedicalCostIcon() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
      <path d="M12 8v8" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

/* Uncertainty / lack of guidance */
function SignpostIcon() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v18" />
      <path d="M12 6h8l-3-3m3 3l-3 3" />
      <path d="M12 12H4l3-3m-3 3l3 3" />
    </svg>
  );
}
