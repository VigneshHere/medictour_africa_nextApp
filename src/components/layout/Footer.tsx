import { Container } from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="py-8 text-sm text-gray-600 space-y-2">
          <p className="font-medium text-gray-900">Medictour</p>
          <p>Medical guidance and care coordination</p>
          <p>Kaloor, Kochi, Kerala, India</p>

          <p className="pt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Medictour. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
