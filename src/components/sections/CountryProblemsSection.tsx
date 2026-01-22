import { Container } from "@/components/ui/Container";
import { CountryProblemsSectionData } from "@/types/sections";
import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";


type Props = {
  data: CountryProblemsSectionData;
};

export default function CountryProblemsSection({ data }: Props) {
  return (
    <section className="bg-[#f1f7f6] py-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <SectionHeading
              title={data.heading}
              subline={data.description}
            />
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50">
                  {iconMap[item.icon]}
                </div>

                <p className="text-[#0c2e2e] font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

/* ======================================================
   ICON REGISTRY (SHARED, SCALABLE)
====================================================== */

const iconMap: Record<string, ReactNode> = {
  waiting: <IconPatientWaiting />,
  "limited-access": <IconHospitalLock />,
  "high-cost": <IconMedicalCost />,
  uncertainty: <IconPatientQuestion />,
};

/* ======================================================
   ICONS (MEDICAL-FIRST, NON-GENERIC)
====================================================== */

/* Long waiting times */
function IconPatientWaiting() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M2 21v-2a4 4 0 014-4h6" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 15v2l1.5 1" />
    </svg>
  );
}

/* Limited access to advanced treatment */
function IconHospitalLock() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
    >
      {/* Hospital */}
      <rect x="3" y="4" width="12" height="14" rx="2" />
      <path d="M9 7v6" />
      <path d="M6 10h6" />

      {/* Lock */}
      <rect x="15" y="11" width="6" height="6" rx="1.5" />
      <path d="M16.5 11V9.5a1.5 1.5 0 013 0V11" />
    </svg>
  );
}




/* High costs when seeking treatment */
function IconMedicalCost() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12" />
      <path d="M15 8h-4a2 2 0 000 4h2a2 2 0 010 4H9" />
    </svg>
  );
}

/* Uncertainty about where to go */
function IconPatientQuestion() {
  return (
    <svg
      className="h-7 w-7 text-green-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 9a3 3 0 116 0c0 2-3 2-3 4" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}



