import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Play } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Galeri() {
  const projectGallery = [
    {
      category: "Pabrik & Industri",
      projects: [
        {
          title: "PT Industri Tekstil Prima",
          location: "Bandung, Jawa Barat",
          date: "2024",
          description: "Instalasi 48 unit C Vent 24\" di area produksi seluas 5,000 m²",
          image: "🏭"
        },
        {
          title: "Pabrik Makanan ABC",
          location: "Tangerang, Banten", 
          date: "2024",
          description: "32 unit C Vent 20\" untuk area processing dan packaging",
          image: "🏭"
        }
      ]
    },
    {
      category: "Gudang & Warehouse",
      projects: [
        {
          title: "Gudang Logistik Nasional",
          location: "Cibitung, Bekasi",
          date: "2023",
          description: "Instalasi 65 unit C Vent 30\" di gudang distribution center",
          image: "📦"
        },
        {
          title: "Cold Storage Facility",
          location: "Surabaya, Jawa Timur",
          date: "2023",
          description: "24 unit C Vent 20\" untuk area loading dock",
          image: "📦"
        }
      ]
    },
    {
      category: "Gedung Olahraga",
      projects: [
        {
          title: "GOR Serbaguna Kota",
          location: "Semarang, Jawa Tengah",
          date: "2024",
          description: "16 unit C Vent 24\" untuk sirkulasi udara area tribun",
          image: "🏟️"
        },
        {
          title: "Lapangan Futsal Indoor",
          location: "Yogyakarta",
          date: "2023",
          description: "8 unit C Vent 20\" untuk kenyamanan pemain dan penonton",
          image: "🏟️"
        }
      ]
    },
    {
      category: "Tempat Ibadah & Pendidikan",
      projects: [
        {
          title: "Masjid Agung Kota",
          location: "Solo, Jawa Tengah",
          date: "2024",
          description: "12 unit C Vent 24\" untuk kenyamanan jamaah saat sholat",
          image: "🕌"
        },
        {
          title: "Kampus Universitas Swasta",
          location: "Malang, Jawa Timur",
          date: "2023",
          description: "28 unit C Vent 20\" di berbagai gedung fakultas",
          image: "🏫"
        }
      ]
    }
  ];

  const beforeAfterComparisons = [
    {
      title: "Pabrik Elektronik - Area Assembly",
      before: "Suhu 38°C, kelembaban 85%, biaya AC Rp 45 juta/bulan",
      after: "Suhu 28°C, kelembaban 65%, biaya AC Rp 28 juta/bulan",
      savings: "Penghematan 38% biaya pendinginan",
      units: "24 unit C Vent 24\""
    },
    {
      title: "Gudang Farmasi - Storage Area", 
      before: "Suhu 35°C, sirkulasi buruk, keluhan karyawan tinggi",
      after: "Suhu 27°C, sirkulasi optimal, produktivitas naik 15%",
      savings: "ROI tercapai dalam 14 bulan",
      units: "18 unit C Vent 20\""
    },
    {
      title: "Restoran & Kitchen Area",
      before: "Suhu kitchen 42°C, exhaust fan boros listrik",
      after: "Suhu kitchen 32°C, ventilasi alami 24 jam",
      savings: "Hemat listrik Rp 8 juta/bulan",
      units: "6 unit C Vent 14\""
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Galeri Proyek C Vent | Instalasi Turbine Ventilator Indonesia</title>
        <meta name="description" content="Galeri lengkap proyek instalasi C Vent di pabrik, gudang, sekolah & tempat ibadah. Lihat hasil before-after pemasangan turbine ventilator. Jadwalkan survei lokasi." />
        <meta name="keywords" content="galeri c vent, instalasi turbine ventilator, proyek ventilasi gedung, before after ventilasi, survei lokasi" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Galeri <span className="font-bold">Proyek</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Lihat instalasi C Vent di berbagai jenis bangunan dan industri
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Proyek Selesai</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15,000+</div>
              <p className="text-muted-foreground">Unit Terpasang</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">200+</div>
              <p className="text-muted-foreground">Kota di Indonesia</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery by Category */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Portfolio <span className="font-semibold">Instalasi</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Dokumentasi proyek C Vent di berbagai sektor industri
            </p>
          </div>

          {projectGallery.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <Card key={projectIndex} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-8xl">
                      {project.image}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{project.date}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          {project.location}
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After Comparisons */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Sebelum vs <span className="font-semibold">Sesudah</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transformasi nyata setelah instalasi C Vent
            </p>
          </div>

          <div className="space-y-8">
            {beforeAfterComparisons.map((comparison, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg">
                <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {comparison.title}
                    </h3>
                    <Badge variant="outline" className="mb-4">
                      {comparison.units}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                        Sebelum
                      </h4>
                      <p className="text-sm text-red-600 dark:text-red-300">
                        {comparison.before}
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                        Sesudah
                      </h4>
                      <p className="text-sm text-green-600 dark:text-green-300">
                        {comparison.after}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="font-semibold text-primary">
                        {comparison.savings}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Video <span className="font-semibold">Pemasangan</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Saksikan proses instalasi C Vent dari awal hingga selesai
          </p>
          
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
            <div className="text-center space-y-4">
              <Play size={64} className="mx-auto text-muted-foreground" />
              <div>
                <p className="text-lg font-medium text-foreground">Video Tutorial Instalasi</p>
                <p className="text-sm text-muted-foreground">Proses pemasangan profesional step-by-step</p>
              </div>
            </div>
          </div>
          
          <Button variant="default" size="lg" className="px-12">
            Tonton Video Lengkap
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Siap Memulai <span className="font-semibold">Proyek Anda?</span>
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/80">
            Jadwalkan survei lokasi gratis untuk mendapat rekomendasi terbaik
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" className="px-12">
              Jadwalkan Survei Lokasi
            </Button>
            <Button variant="hero-outline" size="lg" className="px-12">
              Konsultasi Virtual
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-primary-foreground/70">
            <p>Tim survei kami siap melayani di seluruh Indonesia</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}