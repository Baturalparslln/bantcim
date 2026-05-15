import type { Metadata } from "next";
import BizeUlasinPageContent from "./BizeUlasinPageContent";

export const metadata: Metadata = {
  title: "Bize Ulaşın | Bantcım",
  description:
    "Konveyör bant alımı, satışı ve iş birliği talepleriniz için Bantcım'a form üzerinden ulaşın.",
};

export default function BizeUlasinPage() {
  return <BizeUlasinPageContent />;
}
