"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[9999] pt-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`nav-shell flex items-center justify-between gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-3 ${scrolled ? "scrolled" : ""}`}>
          <Link href="/" className="flex items-center gap-2.5 shrink-0 lg:justify-self-start no-underline">
            <span className="relative inline-block leading-none pb-1">
              <span className="block text-[1.8rem] font-black tracking-[-0.06em] text-primary-900">
                Bant<span className="text-primary-500">cım</span>
              </span>
              <span className="absolute left-0 right-0 bottom-0 mx-auto h-0.5 w-16 rounded-full bg-gradient-to-r from-primary-500 via-primary-300 to-accent" />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center min-w-0 justify-center lg:justify-self-center lg:translate-x-2">
            <div className="flex items-center justify-center gap-1 min-w-0 flex-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0 lg:justify-self-end">
            <Link href="/iletisim" className="nav-solid-btn whitespace-nowrap">
              Bize Ulaşın
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <Link href="/iletisim" className="nav-solid-btn whitespace-nowrap">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
