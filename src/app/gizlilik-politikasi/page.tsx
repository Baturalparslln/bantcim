import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Bantcım",
  description: "Bantcım gizlilik politikası ve kişisel verilerin kullanım esasları.",
};

export default function GizlilikPolitikasiPage() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Gizlilik Politikası</h1>
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              Bantcım, ziyaretçi ve kullanıcı bilgilerinin gizliliğine önem verir. Bu sayfada, paylaştığınız bilgilerin hangi amaçlarla kullanılabileceğine ilişkin genel esaslar yer almaktadır.
            </p>
            <p>
              Site üzerinden paylaşılan iletişim bilgileri, yalnızca talep edilen hizmete ilişkin geri dönüş sağlamak, iletişim kurmak ve kullanıcı deneyimini geliştirmek amacıyla değerlendirilebilir.
            </p>
            <p>
              Kişisel veriler, ilgili mevzuata aykırı olmayacak şekilde korunur; izniniz veya yasal zorunluluk bulunmadıkça üçüncü kişilerle paylaşılmaz.
            </p>
            <p>
              Teknik altyapı, güvenlik ve hizmet geliştirme süreçlerinde çerezler veya benzeri teknolojiler kullanılabilir. Bu veriler, hizmet kalitesini artırmak ve temel site işlevlerini sürdürmek amacıyla işlenebilir.
            </p>
            <p>
              Gizlilik uygulamalarımızda güncelleme yapılması hâlinde bu sayfa revize edilebilir. Güncel metin, yayımlandığı tarihten itibaren geçerli kabul edilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
