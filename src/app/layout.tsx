import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bantcım — Konveyör Bant Alıcı ve Satıcılarını Buluşturan Platform",
  description:
    "Konveyör bant alıcılarını ve satıcılarını güvenle buluşturan profesyonel aracı platform. Havalimanı, market, lojistik ve endüstriyel bant çözümleri.",
  keywords: "konveyör bant, bant satış, konveyör tedarik, endüstriyel bant, bantcım",
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
      </body>
    </html>
  );
}
