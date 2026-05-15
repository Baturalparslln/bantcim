export default function QuickContact() {
  return (
    <div className="fixed bottom-4 right-4 z-[9998] flex flex-col gap-3">
      <a
        href="tel:05354912558"
        className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-4 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
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
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .17 5.32.17 11.89c0 2.09.55 4.13 1.58 5.92L0 24l6.35-1.66a11.85 11.85 0 005.71 1.46h.01c6.56 0 11.89-5.32 11.89-11.89 0-3.18-1.24-6.16-3.44-8.43ZM12.07 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.88 9.88 0 01-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 012.9 7.01c0 5.48-4.45 9.92-9.91 9.92Zm5.44-7.4c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.26-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
