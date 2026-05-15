import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickContact from "@/components/QuickContact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bantcım: Konveyör Bant Alıcı ve Satıcılarını Buluşturan Platform",
  description:
    "Konveyör bant sektöründe alıcılar ile satıcıları güvenilir biçimde buluşturan profesyonel platform. Havalimanı, market, lojistik ve endüstriyel tesisler için bant çözümleri.",
  keywords: "konveyör bant, bant satış, konveyör tedarik, endüstriyel bant, bantcım",
  openGraph: {
    title: "Bantcım",
    description:
      "Konveyör bant sektöründe alıcılar ile satıcıları güvenilir biçimde buluşturan profesyonel platform.",
    type: "website",
    locale: "tr_TR",
    siteName: "Bantcım",
  },
  twitter: {
    card: "summary",
    title: "Bantcım",
    description:
      "Konveyör bant sektöründe alıcılar ile satıcıları güvenilir biçimde buluşturan profesyonel platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col page-transition">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <QuickContact />
      </body>
    </html>
  );
}
