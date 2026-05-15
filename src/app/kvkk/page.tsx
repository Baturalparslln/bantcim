import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Bantcım",
  description:
    "Bantcım KVKK aydınlatma metni ve kişisel verilerin işlenmesine ilişkin bilgilendirme.",
};

export default function KvkkPage() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            KVKK Aydınlatma Metni
          </h1>
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              Bantcım, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel
              verilerin işlenmesine ilişkin olarak kullanıcılarını bilgilendirmeyi önemser.
            </p>
            <p>
              Tarafımıza iletilen ad, soyad, telefon numarası, e-posta adresi ve mesaj
              içeriği gibi veriler; iletişim kurulması, taleplerin değerlendirilmesi ve
              hizmet süreçlerinin yürütülmesi amacıyla işlenebilir.
            </p>
            <p>
              Kişisel veriler, ilgili mevzuata uygun şekilde muhafaza edilir ve gerekli
              teknik ve idari tedbirlerle korunur.
            </p>
            <p>
              İlgili kişiler, KVKK kapsamında kişisel verilerine ilişkin bilgi talep etme,
              düzeltilmesini isteme ve gerekli şartlarda silinmesini veya yok edilmesini
              talep etme haklarına sahiptir.
            </p>
            <p>
              Detaylı başvurular ve talepler için iletişim kanallarımız üzerinden bizimle
              bağlantı kurabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
