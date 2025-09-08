import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge>Perbandingan</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  15 Januari 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  5 min read
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Turbine Ventilator vs Exhaust Fan: Mana yang Lebih Efisien untuk Pabrik?
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Analisis mendalam perbandingan efisiensi energi, biaya operasional, dan performa 
              antara turbine ventilator dan exhaust fan untuk aplikasi industri.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Mengatur sirkulasi udara di dalam pabrik bukan sekadar soal kenyamanan, tapi juga menyangkut keselamatan kerja dan 
              kelancaran produksi. Udara panas, lembap, dan berdebu bisa bikin pekerja cepat lelah, mesin gampang rusak, bahkan mengurangi produktivitas. Nah, dua solusi yang paling sering digunakan adalah turbine ventilator dan exhaust fan.
            </p>
            
            <p>
              Keduanya sama-sama berfungsi untuk mengeluarkan udara kotor dari dalam ruangan, tapi cara kerja dan efisiensinya cukup berbeda. Jadi, mana yang lebih pas untuk pabrik Anda? Yuk kita bahas!
            </p>
            
            <h3>Apa Itu Turbine Ventilator?</h3>
            <p>
              Bayangkan baling-baling di atas atap yang berputar setiap kali angin bertiup—itulah turbine ventilator. Alat ini bekerja memanfaatkan energi alami, yaitu angin dan perbedaan tekanan udara. Begitu berputar, udara panas di dalam pabrik ditarik keluar tanpa perlu listrik sama sekali. Hemat energi, ramah lingkungan, dan minim perawatan.
            </p>
            
            <h2>Apa Itu Exhaust Fan?</h2>
            <p>
              Kalau turbine ventilator mengandalkan angin, exhaust fan justru menggunakan motor listrik. Bentuknya mirip kipas besar yang dipasang di dinding atau atap pabrik. Dengan tenaga listrik, exhaust fan bisa mengisap udara panas dan menggantinya dengan udara segar secara konsisten, tanpa peduli ada angin atau tidak.
            </p>
            
            <h2>Perbandingan Turbine Ventilator dan Exhaust Fan</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aspek</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Turbine Ventilator</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Exhaust Fan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Energi</td>
                    <td className="border border-gray-300 px-4 py-3">Tidak pakai listrik (hemat biaya)</td>
                    <td className="border border-gray-300 px-4 py-3">Butuh listrik (biaya operasional naik)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Performa</td>
                    <td className="border border-gray-300 px-4 py-3">Bergantung pada angin</td>
                    <td className="border border-gray-300 px-4 py-3">Stabil sepanjang waktu</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Perawatan</td>
                    <td className="border border-gray-300 px-4 py-3">Hampir tanpa perawatan</td>
                    <td className="border border-gray-300 px-4 py-3">Perlu rutin cek motor & baling-baling</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Kebisingan</td>
                    <td className="border border-gray-300 px-4 py-3">Hampir tidak ada suara</td>
                    <td className="border border-gray-300 px-4 py-3">Bisa cukup berisik</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Kesesuaian</td>
                    <td className="border border-gray-300 px-4 py-3">Cocok untuk atap pabrik luas</td>
                    <td className="border border-gray-300 px-4 py-3">Cocok untuk area dengan panas tinggi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Baik turbine ventilator maupun exhaust fan punya keunggulan masing-masing. Yang terpenting adalah menyesuaikan dengan kondisi pabrik, kebutuhan produksi, dan anggaran operasional. Dengan sistem ventilasi yang tepat, pabrik tidak hanya jadi lebih nyaman, tapi juga lebih efisien dan produktif.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}