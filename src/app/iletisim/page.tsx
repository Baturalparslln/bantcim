import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "İletişim | Bantcım",
  description:
    "Konveyör bant alımı, satışı ve iş birliği süreçleri için Bantcım ile iletişime geçin.",
};

export default function IletisimPage() {
  return <ContactPageContent />;
}
