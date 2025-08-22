import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Zap, Wrench, Clock, Shield, Building } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation isDark={true} />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-hero-overlay"></div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center px-6">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Sejukkan Gedung dengan
              <span className="block font-semibold">Ventilasi Berkualitas</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Konsultasi ventilasi terbaik untuk gedung & industri Anda sekarang juga !
            </p>
            <div className="pt-8">
              <Button variant="hero-outline" size="lg" className="text-lg px-12 py-4 rounded-full">
                Book Jadwal Konsultasi →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="text-lg text-muted-foreground mb-4 tracking-wider uppercase">Gedung terasa panas & pengap ?</h3>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Temukan alasan mengapa gedung terasa 
              <span className="font-semibold block">Panas, Pengap & tidak nyaman</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami peduli pada kenyamanan Anda, tentu ini yang Anda rasakan:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Gedung modern cenderung kurang sirkulasi</h3>
                <p className="text-muted-foreground">
                  Tidak adanya bukaan atap dan bukaan samping menjadikan ketergantungan dengan pemakaian AC.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Bikin tidak nyaman & pemborosan energi</h3>
                <p className="text-muted-foreground">
                  Tentu membuat Anda meningkatkan pemakaian listrik dan biaya operasional yang tinggi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Presentation */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-16">
            We proudly present:
          </h2>
          <div className="text-6xl md:text-8xl font-bold text-primary mb-8">
            C VENT
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Solusi ventilasi premium yang telah dipercaya sejak 1996
          </p>
          
          {/* How it works */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold">Angin Natural</h3>
              <p className="text-sm text-muted-foreground">Menggunakan kekuatan angin alami</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-10 h-10 text-primary animate-spin" />
              </div>
              <h3 className="font-semibold">Turbin Berputar</h3>
              <p className="text-sm text-muted-foreground">Baling-baling presisi berputar optimal</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="font-semibold">Udara Panas Keluar</h3>
              <p className="text-sm text-muted-foreground">Mengeluarkan udara panas dari ruangan</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-semibold">Udara Segar Masuk</h3>
              <p className="text-sm text-muted-foreground">Sirkulasi udara segar yang optimal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Keunggulan Utama C Vent
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Mengapa ribuan perusahaan mempercayai solusi kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-light">Hemat Energi</h3>
              <p className="text-primary-foreground/80 leading-relaxed">Beroperasi tanpa listrik, menghemat biaya energi hingga 60%</p>
            </div>
            <div className="text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-light">Bahan Premium</h3>
              <p className="text-primary-foreground/80 leading-relaxed">Aluminium & stainless steel grade industri</p>
            </div>
            <div className="text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-light">Bebas Perawatan</h3>
              <p className="text-primary-foreground/80 leading-relaxed">Zero maintenance, lifetime durability</p>
            </div>
            <div className="text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-light">24 Jam Nonstop</h3>
              <p className="text-primary-foreground/80 leading-relaxed">Bekerja sepanjang waktu, siang dan malam</p>
            </div>
            <div className="text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <Building className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-light">Cocok Semua Atap</h3>
              <p className="text-primary-foreground/80 leading-relaxed">Instalasi fleksibel untuk berbagai jenis atap</p>
            </div>
            <div className="text-center space-y-6 p-6">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-light">Teruji Sejak 1996</h3>
              <p className="text-primary-foreground/80 leading-relaxed">28+ tahun pengalaman & kepercayaan klien</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Bangunan Apa Saja yang Cocok?
            </h2>
            <p className="text-xl text-muted-foreground">
              Solusi ventilasi untuk berbagai jenis bangunan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-lg font-medium text-foreground">Pabrik & Industri</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-lg font-medium text-foreground">Gudang & Warehouse</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🏟️</div>
              <h3 className="text-lg font-medium text-foreground">Gedung Olahraga</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-lg font-medium text-foreground">Perumahan</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🍴</div>
              <h3 className="text-lg font-medium text-foreground">Restoran & F&B</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-lg font-medium text-foreground">Perkantoran</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🕌</div>
              <h3 className="text-lg font-medium text-foreground">Tempat Ibadah</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-all duration-300">
              <div className="text-6xl mb-4">🏫</div>
              <h3 className="text-lg font-medium text-foreground">Institusi Pendidikan</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Dipercaya Ribuan Klien
            </h2>
            <p className="text-xl text-muted-foreground">
              Dari startup hingga korporasi multinasional
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary mb-2">Unilever</div>
              <p className="text-sm text-muted-foreground">Manufacturing</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary mb-2">Astra Group</div>
              <p className="text-sm text-muted-foreground">Automotive</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary mb-2">Indofood</div>
              <p className="text-sm text-muted-foreground">Food Industry</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary mb-2">Adaro Group</div>
              <p className="text-sm text-muted-foreground">Mining</p>
            </div>
          </div>
          
          <div className="bg-card p-12 rounded-2xl shadow-lg text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl font-light text-foreground mb-8 leading-relaxed">
              "Dengan C Vent, suhu pabrik kami turun 8°C dan biaya listrik berkurang 35%. 
              ROI tercapai dalam 18 bulan. Investasi terbaik untuk efisiensi operasional."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Budi Santoso</div>
                <div className="text-sm text-muted-foreground">Operations Director - PT Manufacturing Prima</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Siap Tingkatkan Sirkulasi Udara 
            <span className="block font-semibold">Gedung Anda?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/80 font-light">
            Konsultasikan kebutuhan ventilasi Anda dengan tim ahli kami
          </p>
          <Button variant="hero-outline" size="lg" className="text-lg px-12 py-4 rounded-full">
            Hubungi Kami Sekarang →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}