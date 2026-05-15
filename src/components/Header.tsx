"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/bize-ulasin", label: "Bize Ulaşın" },
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/kullanim-sartlari", label: "Kullanım Koşulları" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-[9999] pt-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`nav-shell flex items-center justify-between gap-3 ${scrolled ? "scrolled" : ""}`}>
          <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline">
            <span className="relative inline-block leading-none pb-1">
              <span className="block text-[1.8rem] font-black tracking-[-0.06em] text-primary-900">
                Bant<span className="text-primary-500">c</span>
                <span className="ml-[0.06em] text-primary-500">ım</span>
              </span>
              <span className="absolute left-0 right-0 bottom-0 mx-auto h-0.5 w-16 rounded-full bg-gradient-to-r from-primary-500 via-primary-300 to-accent" />
            </span>
          </Link>

          <button
            type="button"
            className="nav-icon-btn shrink-0"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Menüyü kapat"
            />
            <div className="fixed top-4 right-4 bottom-4 w-[min(25rem,calc(100vw-2rem))] mobile-panel p-5 sm:p-6 flex flex-col z-[10000] animate-[slideInMenu_320ms_cubic-bezier(0.22,1,0.36,1)] before:absolute before:inset-0 before:rounded-[28px] before:border before:border-white/10 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_36%)] before:pointer-events-none overflow-hidden">
              <div className="relative flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-200/70 mb-2">Bantcım</p>
                  <span className="text-white text-xl font-extrabold tracking-[-0.04em]">Menü</span>
                </div>
                <button
                  type="button"
                  className="nav-icon-btn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Menüyü kapat"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative grid grid-cols-1 gap-2 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className={`mobile-link ${pathname === link.href ? "is-active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>

              <div className="relative mt-auto pt-6 border-t border-white/10">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-200/70 mb-4">Hızlı İletişim</p>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="tel:05354912558"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-900 to-primary-700 px-4 py-3 text-sm font-bold text-white shadow-[0_18px_34px_-18px_rgba(27,94,32,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_38px_-18px_rgba(27,94,32,0.9)]"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905354912558"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_34px_-18px_rgba(37,211,102,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_38px_-18px_rgba(37,211,102,0.9)]"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.32.17 11.89c0 2.09.55 4.13 1.58 5.92L0 24l6.35-1.66a11.85 11.85 0 005.71 1.46h.01c6.56 0 11.89-5.32 11.89-11.89 0-3.18-1.24-6.16-3.44-8.43ZM12.07 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.88 9.88 0 01-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 012.9 7.01c0 5.48-4.45 9.92-9.91 9.92Zm5.44-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.26-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
