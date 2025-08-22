import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingDown, ThermometerSun, DollarSign, Calendar, MapPin, User } from "lucide-react";

export default function Klien() {
  const clientLogos = [
    { name: "Unilever Indonesia", industry: "Consumer Goods", logo: "🏢" },
    { name: "Astra International", industry: "Automotive", logo: "🚗" },
    { name: "Indofood Sukses Makmur", industry: "Food & Beverage", logo: "🍽️" },
    { name: "Adaro Energy", industry: "Mining", logo: "⛏️" },
    { name: "Wings Group", industry: "Consumer Products", logo: "🧴" },
    { name: "Gudang Garam", industry: "Tobacco", logo: "🏭" },
    { name: "Mayora Indah", industry: "Food Processing", logo: "🍪" },
    { name: "Kalbe Farma", industry: "Pharmaceutical", logo: "💊" },
    { name: "Sido Muncul", industry: "Traditional Medicine", logo: "🌿" },
    { name: "Polytron", industry: "Electronics", logo: "📺" },
    { name: "Tzu Chi Hospital", industry: "Healthcare", logo: "🏥" },
    { name: "Universitas Indonesia", industry: "Education", logo: "🎓" }
  ];

  const caseStudies = [
    {
      title: "Transformasi Pabrik Elektronik Multinasional",
      industry: "Electronics Manufacturing",
      location: "Karawang, Jawa Barat",
      challenges: [
        "Suhu area produksi mencapai 40°C pada siang hari",
        "Kelembaban tinggi (90%) merusak komponen elektronik",
        "Bau kimia tidak tersirkulasi dengan baik",
        "Biaya AC dan exhaust fan Rp 75 juta per bulan"
      ],
      solution: {
        units: 48,
        model: "C Vent 24\" - Stainless Steel",
        layout: "Distribusi merata di 4 zona produksi",
        additional: "Dilengkapi dengan ducting connector ke sistem ventilasi internal"
      },
      results: [
        "Suhu turun menjadi 28-30°C (penurunan 10-12°C)",
        "Kelembaban terkontrol di 60-65%",
        "Sirkulasi udara optimal, bau kimia berkurang 85%",
        "Penghematan biaya operasional Rp 32 juta per bulan (43%)",
        "Produktivitas karyawan naik 18%",
        "Defect rate produk turun 25%"
      ],
      testimonial: {
        quote: "Dengan instalasi C Vent, kami tidak hanya menghemat biaya operasional secara signifikan, tetapi juga meningkatkan kualitas lingkungan kerja dan produktivitas. ROI tercapai dalam 16 bulan, dan yang terpenting, karyawan merasa lebih nyaman bekerja.",
        author: "Ir. Bambang Suharto",
        position: "Plant Manager",
        company: "PT Electronics Manufacturing Indonesia"
      },
      timeline: "Maret 2024",
      roi: "16 bulan"
    },
    {
      title: "Optimasi Gudang Cold Chain Logistics",
      industry: "Cold Storage & Distribution",
      location: "Surabaya, Jawa Timur", 
      challenges: [
        "Area loading dock sangat panas (38°C) saat pintu terbuka",
        "Kondensasi berlebih merusak kemasan produk",
        "Konsumsi listrik tinggi untuk menjaga suhu loading area",
        "Keluhan driver dan pekerja gudang"
      ],
      solution: {
        units: 24,
        model: "C Vent 20\" - Aluminium",
        layout: "Fokus di area loading dock dan sorting",
        additional: "Sistem flashing khusus untuk atap metal"
      },
      results: [
        "Suhu loading dock turun menjadi 26-28°C",
        "Kondensasi berkurang drastis, kerusakan kemasan turun 40%",
        "Hemat listrik Rp 18 juta per bulan",
        "Efisiensi loading-unloading naik 22%",
        "Zero complain dari driver dan pekerja"
      ],
      testimonial: {
        quote: "C Vent membantu kami mengatasi masalah suhu tinggi di area loading dock yang selama ini menjadi tantangan besar. Investasi yang sangat worth it untuk operasional cold storage kami.",
        author: "Drs. Sutanto Wijaya",
        position: "Operations Director",
        company: "PT Logistik Dingin Nusantara"
      },
      timeline: "September 2023",
      roi: "14 bulan"
    },
    {
      title: "Ventilasi Masjid Kapasitas 5000 Jamaah",
      industry: "Religious Facility",
      location: "Medan, Sumatera Utara",
      challenges: [
        "Ruang sholat pengap saat jamaah penuh",
        "Sirkulasi udara buruk menyebabkan gerah",
        "Tidak bisa menggunakan AC karena biaya operasional tinggi",
        "Keluhan jamaah, terutama lansia dan anak-anak"
      ],
      solution: {
        units: 16,
        model: "C Vent 30\" - Aluminium", 
        layout: "Distribusi strategis mengikuti arsitektur kubah",
        additional: "Desain khusus tidak mengganggu estetika bangunan"
      },
      results: [
        "Sirkulasi udara optimal bahkan saat jamaah penuh",
        "Suhu ruangan turun 6-8°C dari sebelumnya", 
        "Tingkat kenyamanan jamaah meningkat signifikan",
        "Hemat biaya operasional (tidak perlu AC)",
        "Ventilasi alami 24 jam tanpa listrik"
      ],
      testimonial: {
        quote: "Alhamdulillah, setelah pemasangan C Vent, jamaah merasa lebih nyaman saat beribadah. Ventilasi alami yang tidak memerlukan listrik ini sangat sesuai dengan prinsip kemandirian dan efisiensi masjid.",
        author: "Ustadz Dr. Ahmad Hidayat, M.Ag",
        position: "Ketua Takmir",
        company: "Masjid Agung An-Nur Medan"
      },
      timeline: "Juni 2024",
      roi: "Immediate (no operational cost)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Klien & <span className="font-bold">Studi Kasus</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Dipercaya oleh perusahaan terkemuka dan institusi bergengsi di Indonesia
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Dipercaya Oleh <span className="font-semibold">Perusahaan Terkemuka</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Dari BUMN hingga multinasional, dari startup hingga korporasi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-3">
                  <div className="text-4xl mb-3">{client.logo}</div>
                  <h3 className="font-semibold text-foreground text-sm">{client.name}</h3>
                  <Badge variant="secondary" className="text-xs">{client.industry}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              <strong>500+ perusahaan</strong> telah mempercayakan solusi ventilasi mereka kepada C Vent
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Studi <span className="font-semibold">Kasus</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transformasi nyata dengan hasil yang terukur
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <CardHeader className="bg-primary text-primary-foreground p-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} />
                          {study.industry}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {study.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {study.timeline}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-primary">
                      ROI: {study.roi}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Challenge & Solution */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <TrendingDown className="text-red-500" size={20} />
                          Tantangan
                        </h3>
                        <ul className="space-y-2">
                          {study.challenges.map((challenge, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Building2 className="text-blue-500" size={20} />
                          Solusi
                        </h3>
                        <div className="space-y-3">
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <p className="font-semibold text-primary mb-2">
                              {study.solution.units} unit {study.solution.model}
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>Layout:</strong> {study.solution.layout}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Tambahan:</strong> {study.solution.additional}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results & Testimonial */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <ThermometerSun className="text-green-500" size={20} />
                          Hasil
                        </h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <User className="text-primary" size={20} />
                          Testimoni
                        </h3>
                        <div className="p-6 bg-accent/20 border-l-4 border-primary rounded-r-lg">
                          <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="text-sm">
                            <p className="font-semibold text-foreground">{study.testimonial.author}</p>
                            <p className="text-muted-foreground">{study.testimonial.position}</p>
                            <p className="text-muted-foreground">{study.testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Summary */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Manfaat Terukur <span className="font-semibold">dari Klien Kami</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-green-500">43%</div>
                <h3 className="font-semibold">Penghematan Biaya</h3>
                <p className="text-sm text-muted-foreground">Rata-rata pengurangan biaya AC & ventilasi</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-blue-500">10°C</div>
                <h3 className="font-semibold">Penurunan Suhu</h3>
                <p className="text-sm text-muted-foreground">Penurunan suhu rata-rata area kerja</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">16</div>
                <h3 className="font-semibold">Bulan ROI</h3>
                <p className="text-sm text-muted-foreground">Rata-rata waktu balik modal investasi</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-orange-500">18%</div>
                <h3 className="font-semibold">Peningkatan Produktivitas</h3>
                <p className="text-sm text-muted-foreground">Kenaikan performa karyawan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Bergabunglah dengan <span className="font-semibold">Klien Kami</span>
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/80">
            Konsultasi gratis untuk mengetahui potensi penghematan di gedung Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" className="px-12">
              Konsultasi Gratis Sekarang
            </Button>
            <Button variant="hero-outline" size="lg" className="px-12">
              Minta Studi Kelayakan
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-primary-foreground/70">
            <p>Analisis ROI dan potensi penghematan tersedia gratis untuk semua calon klien</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}