import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "İletişim | Bantcım",
  description:
    "Bantcım iletişim bilgileri, telefon ve adres bilgileri burada yer alır.",
};

export default function IletisimPage() {
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
              İletişim
            </span>
          </h1>
          <p className="text-primary-100/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Telefon, adres ve genel iletişim bilgilerimize bu sayfa üzerinden ulaşabilirsiniz.
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
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
              İletişim Bilgileri
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Genel iletişim kanallarımız aşağıda yer almaktadır. Talep formunu kullanmak için menüdeki `Bize Ulaşın` sayfasına geçebilirsiniz.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Telefon",
                value: "05354912558",
                detail: "Hızlı görüşme ve ön bilgilendirme için arayabilirsiniz.",
              },
              {
                title: "E-posta",
                value: "Alan adı bağlandıktan sonra eklenecektir.",
                detail: "Kurumsal e-posta adresi alan adı tanımlandığında aktif olacaktır.",
              },
              {
                title: "Adres",
                value: "İstanbul, Türkiye",
                detail: "Faaliyet ve görüşme süreçlerimiz İstanbul merkezli olarak yürütülmektedir.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={(index + 1) * 100} direction="up">
                <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-primary-800 font-bold text-base mb-4">{item.value}</p>
                  <p className="text-sm leading-relaxed text-slate-500">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
