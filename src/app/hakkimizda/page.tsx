import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hakkımızda | Bantcım",
  description:
    "Bantcım'ın vizyonunu, misyonunu ve konveyör bant sektörüne sunduğu profesyonel yaklaşımı keşfedin.",
};

export default function Hakkimizda() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-100 to-primary-200 bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h1>
          <p className="text-primary-100/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bantcım olarak konveyör bant sektöründe güvenilir bağlantılar kuruyoruz.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full text-white">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-16 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="opacity-10" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="opacity-30" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
              Biz Kimiz?
            </h2>
            <p className="text-slate-500 leading-relaxed text-base sm:text-lg mb-4">
              Bantcım, konveyör bant sektöründe alıcılar ile satıcıları bir araya
              getiren profesyonel bir platformdur. Havalimanı bagaj sistemlerinden
              market taşıma hatlarına, lojistik tesislerinden gıda üretim
              hatlarına kadar farklı kullanım alanları için doğru iş ortaklarına
              ulaşmanızı kolaylaştırıyoruz.
            </p>
            <p className="text-slate-500 leading-relaxed text-base sm:text-lg">
              Sektördeki deneyimimiz ve güçlü iş ağımız sayesinde, satıcıların yeni
              müşterilere ulaşmasına destek oluyor; alıcıların ise ihtiyaçlarına en
              uygun çözümleri daha sağlıklı biçimde değerlendirmesine imkân
              tanıyoruz.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-10 shadow-sm border border-primary-100/50 h-full">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-primary-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Konveyör bant sektöründe Türkiye&apos;nin güvenilir ve öncelikli
                  başvuru noktası olmak. Alıcılar ile satıcılar için şeffaf,
                  hızlı ve sürdürülebilir bir iş ortamı oluşturmak. Her ölçekteki
                  işletmenin doğru bant çözümüne kolaylıkla ulaşmasını sağlamak.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="bg-gradient-to-br from-accent/5 to-white rounded-2xl p-10 shadow-sm border border-accent/10 h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-accent-hover"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Konveyör bant alıcıları ile satıcılarını etkili biçimde bir araya
                  getirerek ticaret süreçlerini kolaylaştırmak ve hızlandırmak.
                  Her iki tarafın ihtiyaçlarını gözeten sürdürülebilir bir ekosistem
                  oluşturmak. Teknoloji, güven ve erişilebilirlik ile sektöre değer
                  katmak.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Birlikte Çalışalım
                </h2>
                <p className="text-primary-100/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Konveyör bant sektöründe doğru iş ortaklarıyla tanışmak ve yeni
                  iş fırsatları oluşturmak için bizimle iletişime geçin.
                </p>
                <Link
                  href="/bize-ulasin"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-primary-950 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm"
                >
                  İletişime Geçin
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
