import { ContactSectionData } from "@/types/sections";
import { Container } from "@/components/ui/Container";

interface ContactSectionProps {
  data: ContactSectionData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {data.heading}
        </h2>

        <div className="mt-6 space-y-3 text-gray-700">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${data.email}`}
              className="text-green-700 hover:underline"
            >
              {data.email}
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {data.phoneNumbers.join(" | ")}
          </p>

          <p>
            <strong>Office:</strong> {data.address}
          </p>
        </div>
      </Container>
    </section>
  );
}
