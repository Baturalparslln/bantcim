import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Ana Sayfa | Bantcım",
  description:
    "Konveyör bant sektöründe alıcılar ile satıcıları buluşturan, hızlı iletişim ve güven odaklı profesyonel platform.",
};

const heroFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Güvenilir Platform",
    desc: "Doğrulanmış satıcılar ve güvenilir alıcılarla profesyonel iş birlikleri kurun.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Geniş Ağ",
    desc: "Türkiye genelindeki çok sayıda bant satıcısına tek platform üzerinden ulaşın.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hızlı Eşleşme",
    desc: "İhtiyacınıza uygun satıcı veya alıcı profillerine kısa sürede erişin.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Uzman Destek",
    desc: "Sektör deneyimine sahip ekibimiz, sürecin her aşamasında size destek olur.",
  },
];

const whyCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Doğrulanmış Satıcılar",
    desc: "Platformda yer alan satıcılar titizlikle incelenir ve doğrulanır. Böylece güvenilir iş ortaklarıyla çalışma imkânı elde edersiniz.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Kolay Arama",
    desc: "Gelişmiş filtreleme seçenekleri sayesinde ihtiyacınıza uygun konveyör bant tedarikçisini kısa sürede belirleyin.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Rekabetçi Fiyatlar",
    desc: "Birden fazla teklif arasından karşılaştırma yaparak bütçenize uygun çözümü değerlendirin.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Sektör Odaklı",
    desc: "Gıda, lojistik, madencilik, havalimanı ve daha birçok sektör için uygun bant çözümlerini inceleyin.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hızlı Süreç",
    desc: "Uzun araştırma süreçlerini kısaltın. Doğru iş ortağına daha hızlı ve daha planlı biçimde ulaşın.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tamamen Ücretsiz",
    desc: "Bantcım'da bilgi almak ve iletişim kurmak tamamen ücretsizdir. Ek ücret, gizli maliyet veya sürpriz ödeme bulunmaz.",
  },
];

const audienceCards = [
  {
    title: "Bant Almak İsteyenler İçin",
    description:
      "İhtiyacınıza uygun tedarikçilere ulaşın, teklifleri değerlendirin ve süreci daha kısa sürede yönetin.",
    href: "/iletisim?subject=alis#surec-detayi",
    cta: "Bant Almak İstiyorum",
  },
  {
    title: "Bant Satmak İsteyenler İçin",
    description:
      "Ürünlerinizi ve hizmetlerinizi doğru alıcılara ulaştırın, yeni iş bağlantıları için görünürlüğünüzü artırın.",
    href: "/iletisim?subject=satis#surec-detayi",
    cta: "Bant Satmak İstiyorum",
  },
];

const processSteps = [
  {
    step: "01",
    title: "İhtiyacınızı Paylaşın",
    description:
      "Alım, satım veya iş birliği talebinizi kısa ve net biçimde iletin.",
  },
  {
    step: "02",
    title: "Uygun Eşleşmeleri Değerlendirin",
    description:
      "Sektörünüze, ürün tipinize ve beklentinize uygun bağlantıları belirleyin.",
  },
  {
    step: "03",
    title: "Doğrudan İletişime Geçin",
    description:
      "Süreci hızlandıracak görüşmeleri başlatın ve iş fırsatlarını güvenle yönetin.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 md:pb-36">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-100 to-primary-200 bg-clip-text text-transparent drop-shadow-sm">
                Konveyör Bant Sektörünü
                <br className="hidden sm:block" /> Tek Bir Çatı Altında Topluyoruz
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100/90 mb-10 leading-relaxed max-w-3xl mx-auto font-medium px-4">
              Bantcım ile ihtiyaçlarınıza uygun konveyör bant tedarikçilerine ve
              alıcılara tek noktadan ulaşın. Havalimanlarından marketlere,
              lojistikten gıda üretimine kadar tüm bant ihtiyaçları için
              profesyonel bir çözüm sunuyoruz.
            </p>

            <div className="flex justify-center px-4 mb-14">
              <Link
                href="/iletisim"
                className="group bg-white text-primary-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                <span>Bize Ulaşın</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-2">
              {heroFeatures.map((f, i) => (
                <ScrollReveal key={i} delay={(i + 1) * 100} direction="up">
                  <div className="glass-card p-6 text-center">
                    <div className="text-primary-200 mb-3 flex justify-center">{f.icon}</div>
                    <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
                    <p className="text-primary-100/70 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full text-white">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-16 fill-slate-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="opacity-10" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="opacity-30" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </section>

      {/* Neden Bantcım */}
      <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
              Neden{" "}
              <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Bantcım
              </span>
              ?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Konveyör bant sektöründe alıcılar ile satıcıları güvenilir, hızlı ve düzenli bir yapıda buluşturan profesyonel platform.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <ScrollReveal key={i} delay={(i % 3 + 1) * 100} direction="up">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover-lift group">
                  <div className="w-14 h-14 bg-primary-50 text-primary-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
              Ne Yapmak İstiyorsunuz?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Sizi doğru sürece hızlıca yönlendirelim. Aşağıdaki başlıklardan size uygun olan seçeneği seçin.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {audienceCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={(i + 1) * 100} direction="up">
                <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-sm">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{card.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-8">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center bg-primary-800 hover:bg-primary-950 text-white font-bold px-6 py-3 rounded-2xl transition-colors duration-300 text-sm"
                  >
                    {card.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
              Nasıl Çalışır?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Süreci karmaşıklaştırmadan, ihtiyaç ile doğru bağlantı arasında hızlı bir köprü kuruyoruz.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={(i + 1) * 100} direction="up">
                <div className="h-full rounded-3xl bg-white border border-slate-100 p-8 shadow-sm">
                  <span className="inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-700 font-extrabold text-sm px-4 py-2 mb-6">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Konveyör Bant İhtiyacınız mı Var?
                </h2>
                <p className="text-primary-100/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  İster satıcı ister alıcı olun, Bantcım ile ihtiyaçlarınıza uygun
                  iş ortaklarına güvenle ulaşabilirsiniz.
                </p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-primary-950 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm"
                >
                  Hemen İletişime Geçin
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
