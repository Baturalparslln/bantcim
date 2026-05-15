"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";

const processContent = {
  alis: {
    title: "Bant Alım Süreci Nasıl İlerler?",
    intro:
      "Konveyör bant satın almak isteyen firmalar için süreci açık, anlaşılır ve yönetilebilir hale getiriyoruz.",
    steps: [
      {
        title: "İhtiyacınızı Netleştirin",
        description:
          "Kullanım alanı, bant tipi, ölçü, kapasite, sektör ve teslim süresi gibi temel bilgileri belirleyin.",
      },
      {
        title: "Uygun Tedarikçileri Değerlendirin",
        description:
          "İhtiyacınıza uygun üretici veya satıcılarla eşleşin; teknik yeterlilik, teslim kabiliyeti ve teklif yapısını karşılaştırın.",
      },
      {
        title: "İletişim ve Teklif Sürecini Başlatın",
        description:
          "Seçtiğiniz firmalarla doğrudan iletişime geçin, ihtiyaç detaylarını paylaşın ve tekliflerinizi daha sağlıklı biçimde yönetin.",
      },
    ],
  },
  satis: {
    title: "Bant Satış Süreci Nasıl İlerler?",
    intro:
      "Konveyör bant satışı yapan firmalar için görünürlüğü artıran ve doğru alıcılarla teması kolaylaştıran bir süreç sunuyoruz.",
    steps: [
      {
        title: "Ürün ve Hizmetlerinizi Tanımlayın",
        description:
          "Sattığınız bant türlerini, teknik özellikleri, hizmet kapsamını ve çalıştığınız sektörleri net biçimde ortaya koyun.",
      },
      {
        title: "Uygun Alıcı Talepleriyle Eşleşin",
        description:
          "Firmanızın ürün ve hizmet yapısına uygun alıcı ihtiyaçlarına odaklanarak zaman kaybını azaltın.",
      },
      {
        title: "Doğrudan Görüşme ve Teklif Sürecine Geçin",
        description:
          "Potansiyel alıcılarla hızlı temas kurun, tekliflerinizi iletin ve yeni iş fırsatlarını daha düzenli şekilde yönetin.",
      },
    ],
  },
} as const;

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject");
  const allowedSubjects = new Set(["satis", "alis", "bilgi", "diger"]);
  const initialSubject = subjectParam && allowedSubjects.has(subjectParam) ? subjectParam : "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: initialSubject,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const activeProcess = formData.subject === "alis" || formData.subject === "satis" ? processContent[formData.subject] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Sorularınız, talepleriniz ve iş birliği fırsatları için bizimle iletişime geçin.
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

      {activeProcess && (
        <section id="surec-detayi" className="py-16 md:py-20 bg-slate-50 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                {activeProcess.title}
              </h2>
              <p className="text-slate-500 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                {activeProcess.intro}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeProcess.steps.map((step, index) => (
                <ScrollReveal key={step.title} delay={(index + 1) * 100} direction="up">
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary-50 px-4 py-2 text-sm font-extrabold text-primary-700 mb-5">
                      Adım {index + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                      Bizimle İletişime Geçin
                    </h2>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      Konveyör bant alımı, satışı veya iş birliği süreçleri hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">E-posta</h4>
                        <p className="text-slate-500 text-sm">Alan adı bağlandıktan sonra eklenecektir.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Telefon</h4>
                        <p className="text-slate-500 text-sm">05354912558</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Adres</h4>
                        <p className="text-slate-500 text-sm">İstanbul, Türkiye</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
                  {submitted && (
                    <div className="mb-6 bg-primary-50 border border-primary-100 text-primary-800 rounded-xl p-4 text-sm font-medium flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Mesajınız başarıyla alındı. Alan adı ve altyapı kurulumları tamamlandığında form gönderimleri aktif hâle getirilecektir.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          E-posta
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="ornek@eposta.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white"
                          placeholder="05354912558"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                          Konu
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-slate-50 focus:bg-white appearance-none"
                        >
                          <option value="">Konu seçin</option>
                          <option value="satis">Bant Satışı</option>
                          <option value="alis">Bant Alımı</option>
                          <option value="bilgi">Genel Bilgi</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm resize-none bg-slate-50 focus:bg-white"
                        placeholder="Mesajınızı buraya yazın"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-800 hover:to-primary-950 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                    >
                      Mesaj Gönder
                    </button>

                    <p className="text-xs leading-relaxed text-slate-500">
                      Bilgileriniz yalnızca sizinle iletişime geçmek amacıyla kullanılacaktır. Ayrıntılı bilgi için
                      {" "}
                      <a href="/kvkk-aydinlatma-metni" className="font-semibold text-primary-700 hover:text-primary-900">
                        KVKK Aydınlatma Metni
                      </a>
                      {" "}ve{" "}
                      <a href="/gizlilik-politikasi" className="font-semibold text-primary-700 hover:text-primary-900">
                        Gizlilik Politikası
                      </a>
                      {" "}sayfalarını inceleyebilirsiniz.
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
