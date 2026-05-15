import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 no-underline">
              <span className="relative inline-block leading-none pb-1">
                <span className="block text-[1.8rem] font-black tracking-[-0.06em] text-white">
                  Bant<span className="text-primary-300">c</span>
                  <span className="ml-[0.06em] text-primary-300">ım</span>
                </span>
                <span className="absolute left-0 right-0 bottom-0 mx-auto h-0.5 w-16 rounded-full bg-gradient-to-r from-primary-400 via-primary-300 to-accent" />
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Konveyör bant sektöründe alıcılar ile satıcıları güvenilir biçimde
              buluşturan profesyonel platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Anasayfa" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/iletisim", label: "İletişim" },
                { href: "/bize-ulasin", label: "Bize Ulaşın" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-primary-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {[
                "Konveyör Bant Satışı",
                "Bant Tedarik Hizmeti",
                "Alıcı ve Satıcı Eşleştirme",
                "Sektör Danışmanlığı",
              ].map((item) => (
                <li key={item}>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary-600" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Alan adı bağlandıktan sonra eklenecektir.
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                05354912558
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-900/50 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                İstanbul, Türkiye
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex items-center justify-center">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Bantcım. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
