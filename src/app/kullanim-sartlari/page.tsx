import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Bantcım",
  description: "Bantcım kullanım koşulları ve siteye erişim esasları.",
};

export default function KullanimSartlariPage() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Kullanım Koşulları
          </h1>
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              Bantcım internet sitesini kullanan her ziyaretçi, aşağıda yer alan kullanım
              koşullarını kabul etmiş sayılır.
            </p>
            <p>
              Site içeriği bilgilendirme amacı taşır. Sunulan içerikler ve yönlendirmeler,
              ticari kararların tek başına dayanağı olarak değerlendirilmemelidir.
            </p>
            <p>
              Kullanıcılar, siteyi hukuka, ahlaka ve kamu düzenine uygun biçimde kullanmayı
              kabul eder. Yanıltıcı, hukuka aykırı veya üçüncü kişilerin haklarını ihlal
              eden içerik paylaşımı yasaktır.
            </p>
            <p>
              Bantcım, hizmet kapsamını, içerikleri ve site yapısını önceden bildirimde
              bulunmaksızın güncelleme hakkını saklı tutar.
            </p>
            <p>
              Bu sayfadaki hükümler, gerekli görüldüğünde güncellenebilir. Güncel kullanım
              koşulları, yayımlandığı andan itibaren geçerli olur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
