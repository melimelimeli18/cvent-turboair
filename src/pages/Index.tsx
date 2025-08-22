import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Zap, Wrench, Clock, Shield, Building2, Factory, Home, UtensilsCrossed, Building, School, Church } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Solusi Ventilasi Hemat Energi untuk Gedung & Industri
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Turbine Ventilator C Vent – Teknologi Turboair Premium sejak 1996, 
              terbukti meningkatkan kenyamanan ruangan tanpa listrik & bebas perawatan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Konsultasi Gratis
              </Button>
              <Button variant="hero-secondary" size="lg" className="text-lg px-8 py-6">
                Lihat Produk
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-96 h-96 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
              <Wind size={120} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Apa Itu C Vent Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Apa itu Turbine Ventilator C Vent?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            C Vent adalah alat sirkulasi udara alami tanpa listrik yang mengatasi masalah udara panas 
            dan pengap di berbagai jenis bangunan. Dengan teknologi turbin angin yang canggih, 
            C Vent bekerja 24 jam nonstop mengalirkan udara segar ke dalam ruangan.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center gap-8">
              <Wind size={60} className="text-primary" />
              <div className="text-2xl">→</div>
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Wind size={40} className="text-primary animate-spin" />
              </div>
              <div className="text-2xl">→</div>
              <Wind size={60} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Bagaimana Cara Kerja C Vent?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 items-center text-center">
            <div>
              <Wind size={60} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Angin Bertiup</h3>
              <p className="text-sm text-muted-foreground">Angin memutar baling-baling turbin</p>
            </div>
            <div className="text-4xl text-primary">→</div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Wind className="text-primary animate-spin" />
              </div>
              <h3 className="font-semibold mb-2">Udara Panas Keluar</h3>
              <p className="text-sm text-muted-foreground">Udara panas tersedot keluar dari ruangan</p>
            </div>
            <div className="text-4xl text-primary">→</div>
            <div>
              <Wind size={60} className="mx-auto mb-4 text-primary rotate-180" />
              <h3 className="font-semibold mb-2">Udara Segar Masuk</h3>
              <p className="text-sm text-muted-foreground">Udara segar masuk mengganti udara panas</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg font-medium">
              Tetap berputar meski angin pelan, tahan angin kencang, bekerja 24 jam tanpa listrik.
            </p>
          </div>
        </div>
      </section>

      {/* Keunggulan Utama Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Keunggulan Utama C Vent
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <Zap size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hemat Energi</h3>
              <p className="text-sm opacity-90">Tanpa listrik sama sekali</p>
            </div>
            <div className="text-center">
              <Shield size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Bahan Premium</h3>
              <p className="text-sm opacity-90">Aluminium & stainless steel</p>
            </div>
            <div className="text-center">
              <Wrench size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Bebas Perawatan</h3>
              <p className="text-sm opacity-90">Tidak perlu maintenance</p>
            </div>
            <div className="text-center">
              <Clock size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24 Jam Nonstop</h3>
              <p className="text-sm opacity-90">Bekerja siang malam</p>
            </div>
            <div className="text-center">
              <Building2 size={48} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cocok Semua Atap</h3>
              <p className="text-sm opacity-90">Berbagai jenis bangunan</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4 font-bold">1996</div>
              <h3 className="font-semibold mb-2">Teruji Sejak</h3>
              <p className="text-sm opacity-90">Pengalaman 25+ tahun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplikasi Bangunan Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Bangunan Apa Saja yang Cocok?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Factory size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Pabrik</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Building2 size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Gudang</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Building size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Gedung Olahraga</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Home size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Rumah Tinggal</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <UtensilsCrossed size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Restoran</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Building size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Perkantoran</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Church size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Tempat Ibadah</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <School size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">Sekolah</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Klien & Testimoni Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Dipercaya Berbagai Perusahaan
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-card p-8 rounded-lg">
              <div className="text-2xl font-bold text-primary">PT ABC</div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <div className="text-2xl font-bold text-primary">CV XYZ</div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <div className="text-2xl font-bold text-primary">UD 123</div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <div className="text-2xl font-bold text-primary">PT DEF</div>
            </div>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-xl italic mb-6">
                "Dengan C Vent, suhu gudang kami lebih sejuk dan biaya listrik berkurang 30%. 
                Investasi terbaik untuk sirkulasi udara!"
              </p>
              <div className="font-semibold">- Manager Gudang PT Industri Jaya</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Siap Tingkatkan Sirkulasi Udara Gedung Anda?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Konsultasi gratis dengan tim ahli kami untuk solusi ventilasi terbaik
          </p>
          <Button variant="hero" size="lg" className="text-xl px-12 py-8">
            Hubungi Kami Sekarang
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
