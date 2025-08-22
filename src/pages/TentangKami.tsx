import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, MapPin, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tentang Kami - C Vent | Ahli Ventilasi Sejak 1996</title>
        <meta name="description" content="C Vent berdiri sejak 1996 sebagai spesialis ventilasi alami B2B. Kualitas terjamin, tim berpengalaman, dukungan purna jual, garansi resmi & terdaftar HKI Indonesia." />
        <meta name="keywords" content="tentang c vent, perusahaan ventilasi, turbine ventilator indonesia, ventilasi gedung, hki ventilasi" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Tentang <span className="font-bold">C Vent</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Spesialis ventilasi alami terpercaya untuk solusi B2B sejak 1996
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Profil <span className="font-semibold">Perusahaan</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong>C Vent</strong> berdiri sejak <strong>1996</strong> dengan fokus khusus pada 
                  pengembangan dan distribusi sistem ventilasi alami untuk pasar B2B. Selama lebih 
                  dari 28 tahun, kami telah menjadi mitra terpercaya ribuan perusahaan di Indonesia.
                </p>
                <p>
                  Spesialisasi kami adalah <strong>Turbine Ventilator</strong> berkualitas tinggi yang 
                  dirancang khusus untuk iklim tropis Indonesia. Dengan teknologi yang terus berkembang, 
                  kami memberikan solusi ventilasi yang efisien dan hemat energi.
                </p>
                <p>
                  Komitmen kami adalah menghadirkan produk berkualitas internasional dengan dukungan 
                  teknis yang komprehensif untuk setiap klien di seluruh Indonesia.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-muted/30">
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Berdiri Sejak 1996</h3>
                      <p className="text-sm text-muted-foreground">28+ tahun pengalaman</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Fokus B2B</h3>
                      <p className="text-sm text-muted-foreground">Spesialis ventilasi industri</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Terdaftar HKI</h3>
                      <p className="text-sm text-muted-foreground">Desain & paten resmi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Visi & Misi
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Visi Kami</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi perusahaan terdepan dalam penyediaan solusi ventilasi alami yang 
                  berkualitas tinggi, hemat energi, dan ramah lingkungan untuk mendukung 
                  efisiensi operasional industri di Indonesia dan Asia Tenggara.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-0 shadow-lg">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Misi Kami</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p>Menghadirkan produk ventilasi berkualitas internasional dengan teknologi terdepan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p>Memberikan solusi hemat energi yang mendukung efisiensi operasional klien</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p>Berkontribusi pada pelestarian lingkungan melalui teknologi ramah lingkungan</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p>Memastikan kepuasan dan kepercayaan klien melalui layanan prima</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Kelebihan <span className="font-semibold">Perusahaan</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Mengapa ribuan perusahaan mempercayai layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality Control Ketat</h3>
                <p className="text-muted-foreground">
                  Setiap produk melalui inspeksi multi-tahap untuk memastikan kualitas terbaik
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tim Pemasangan Berpengalaman</h3>
                <p className="text-muted-foreground">
                  Teknisi tersertifikasi dengan pengalaman 10+ tahun di berbagai jenis bangunan
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Dukungan Purna Jual</h3>
                <p className="text-muted-foreground">
                  Layanan konsultasi teknis dan maintenance support sepanjang masa garansi
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Garansi Resmi</h3>
                <p className="text-muted-foreground">
                  Garansi hingga 5 tahun untuk material dan 2 tahun untuk instalasi
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">HKI & Paten Indonesia</h3>
                <p className="text-muted-foreground">
                  Terdaftar resmi di Dirjen HKI dengan desain khusus untuk iklim tropis
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Jangkauan Nasional</h3>
                <p className="text-muted-foreground">
                  Melayani instalasi di seluruh Indonesia dengan jaringan mitra terpercaya
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Lokasi <span className="font-semibold">Kantor</span>
              </h2>
              
              <Card className="p-8 border-0 shadow-lg">
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Kantor Pusat</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">PT C Vent Indonesia</p>
                          <p>Jl. Industri Raya No. 123</p>
                          <p>Kawasan Industri Pulogadung</p>
                          <p>Jakarta Timur 13920, Indonesia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Jam Operasional:</strong></p>
                    <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                    <p>Sabtu: 08:00 - 12:00 WIB (by appointment)</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin size={48} className="mx-auto text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Google Maps</p>
                    <p className="text-sm text-muted-foreground">Embed map akan ditampilkan di sini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Certification */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Sertifikasi & <span className="font-semibold">Legal</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <Shield size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Terdaftar HKI</h3>
              <p className="text-primary-foreground/80">
                Produk C Vent telah terdaftar resmi di Direktorat Jenderal Kekayaan Intelektual 
                Republik Indonesia dengan nomor paten khusus.
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <Award size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Desain Iklim Tropis</h3>
              <p className="text-primary-foreground/80">
                Desain khusus dikembangkan untuk mengoptimalkan performa di iklim tropis Indonesia 
                dengan kelembaban tinggi dan angin variable.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button variant="hero-outline" size="lg" className="px-12">
              Konsultasi dengan Tim Ahli
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}