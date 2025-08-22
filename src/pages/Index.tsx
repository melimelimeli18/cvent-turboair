import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Zap, Wrench, Clock, Shield, Building, CheckCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-100">
        <div className="container mx-auto max-w-4xl text-center px-6">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-light text-neutral-900 leading-tight">
              <span className="text-primary font-semibold">C Vent</span> – Turboair Ventilator 
              <span className="block font-semibold">Premium Sejak 1997</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-light">
              Solusi ventilasi alami tanpa listrik, bergaransi hingga 10 tahun
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-12 py-4 rounded-full bg-primary text-white hover:bg-primary/90">
                Lihat Produk →
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-12 py-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Harus C Vent? */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 leading-tight">
              Kenapa Harus <span className="font-semibold text-primary">C Vent?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Sirkulasi Udara Efektif</h3>
              <p className="text-neutral-600">Mengoptimalkan aliran udara natural untuk kenyamanan maksimal</p>
            </div>
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Teknologi Turboair System Ber-paten</h3>
              <p className="text-neutral-600">Desain eksklusif yang telah terbukti dan dipatenkan</p>
            </div>
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Bebas Listrik & Bebas Perawatan</h3>
              <p className="text-neutral-600">Zero energy cost, zero maintenance untuk operasional optimal</p>
            </div>
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Garansi 10 Tahun + Sparepart 3 Tahun</h3>
              <p className="text-neutral-600">Jaminan kualitas premium dengan dukungan purna jual terpercaya</p>
            </div>
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Tidak Bising & Tahan Lama</h3>
              <p className="text-neutral-600">Operasional senyap dengan material grade industri berkualitas tinggi</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Produk Turbine Ventilator C Vent
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Tersedia berbagai ukuran dan material untuk kebutuhan bangunan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* C Vent Aluminium Series */}
            <div className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 bg-primary/30 transition-opacity duration-300 group-hover:bg-primary/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-neutral-500">
                      <div className="text-6xl mb-2">📐</div>
                      <p className="text-sm">Aluminium Series</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                      C Vent Aluminium Series
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      Ringan, tahan karat, dan lebih ekonomis dengan pilihan ukuran 18", 24", 30", 36", 42"
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* C Vent Stainless Steel Series */}
            <div className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 bg-primary/30 transition-opacity duration-300 group-hover:bg-primary/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-neutral-500">
                      <div className="text-6xl mb-2">⚡</div>
                      <p className="text-sm">Stainless Steel Series</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                      C Vent Stainless Steel Series
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      Kokoh, premium, dan umur pakai lebih panjang untuk kebutuhan industri berat
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Aksesoris & Sparepart */}
            <div className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 bg-primary/30 transition-opacity duration-300 group-hover:bg-primary/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-neutral-500">
                      <div className="text-6xl mb-2">🔧</div>
                      <p className="text-sm">Accessories & Parts</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                      Aksesoris & Sparepart
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      Base ridge, slope, curb, flashing, jaring anti serangga dan komponen pendukung lainnya
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Lihat Detail
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aplikasi C Vent */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Aplikasi C Vent
            </h2>
            <p className="text-xl text-neutral-600">
              Solusi ventilasi untuk berbagai jenis bangunan
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-lg font-medium text-neutral-900">Pabrik</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-lg font-medium text-neutral-900">Gudang</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">🏟️</div>
              <h3 className="text-lg font-medium text-neutral-900">Gedung Olahraga</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-lg font-medium text-neutral-900">Rumah Tinggal</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">🍴</div>
              <h3 className="text-lg font-medium text-neutral-900">Restoran</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-lg font-medium text-neutral-900">Perkantoran</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-4">🕌</div>
              <h3 className="text-lg font-medium text-neutral-900">Tempat Ibadah</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Closing */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Dipercaya Ratusan Perusahaan 
            <span className="block font-semibold">di Seluruh Indonesia</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/80 font-light">
            Bergabunglah dengan klien-klien terpercaya yang telah merasakan manfaat C Vent
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-12 py-4 rounded-full border-white text-white hover:bg-white hover:text-primary"
          >
            Minta Penawaran →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}