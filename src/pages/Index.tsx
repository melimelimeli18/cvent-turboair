import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Zap, Wrench, Clock, Shield, Building, CheckCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

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
            {/* C Vent C-45 */}
            <div className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img 
                    src="/lovable-uploads/06dff626-e6b9-44fc-8c2d-90a3b633e315.png"
                    alt="C VENT TYPE C-45 (18 inch) - Turbine Ventilator C Vent"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                      C VENT TYPE C-45 (18")
                    </h3>
                    <div className="space-y-2 text-sm text-neutral-600 mb-4">
                      <div><span className="font-medium">Bahan:</span> Alluminium dan Stainless Steel</div>
                      <div><span className="font-medium">Bearing:</span> Full Stainless Steel, Made In Japan</div>
                      <div><span className="font-medium">Diameter:</span> 45 CM = 18"</div>
                      <div><span className="font-medium">Dimensi:</span> 75 x 68 x 68</div>
                      <div><span className="font-medium">Berat:</span> 6 kg s/d 8,5 kg</div>
                      <div className="text-lg font-medium text-primary">
                        <span className="font-medium text-neutral-600 text-sm">Kapasitas Hisap:</span> 62,47 M³ / menit
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/produk/c-45"
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Lihat Detail
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* C Vent C-75 */}
            <div className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img 
                    src="/lovable-uploads/06dff626-e6b9-44fc-8c2d-90a3b633e315.png"
                    alt="C VENT TYPE C-75 (30 inch) - Turbine Ventilator C Vent"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                      C VENT TYPE C-75 (30")
                    </h3>
                    <div className="space-y-2 text-sm text-neutral-600 mb-4">
                      <div><span className="font-medium">Bahan:</span> Alluminium dan Stainless Steel</div>
                      <div><span className="font-medium">Bearing:</span> FBJ Made in Japan Full Steinless Steel = 3pc</div>
                      <div><span className="font-medium">Diameter:</span> 75 CM = 30"</div>
                      <div><span className="font-medium">Dimensi:</span> 120 x 100 x 100</div>
                      <div><span className="font-medium">Berat:</span> 14,5 kg s/d 21,5 kg</div>
                      <div className="text-lg font-medium text-primary">
                        <span className="font-medium text-neutral-600 text-sm">Kapasitas Hisap:</span> 157,95 M³ / menit
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/produk/c-75"
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Lihat Detail
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* C Vent C-105 */}
            <div className="group">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img 
                    src="/lovable-uploads/b0b48871-0303-43c8-b081-e50a6074db32.png"
                    alt="C VENT TYPE C-105 (42 inch) - Turbine Ventilator C Vent"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                      C VENT TYPE C-105 (42")
                    </h3>
                    <div className="space-y-2 text-sm text-neutral-600 mb-4">
                      <div><span className="font-medium">Bahan:</span> Alluminium dan Stainless Steel</div>
                      <div><span className="font-medium">Bearing:</span> SKF Full Stainless Steel, Made In Japan</div>
                      <div><span className="font-medium">Diameter:</span> 105 CM = 42"</div>
                      <div><span className="font-medium">Dimensi:</span> 147 x 134 x 134</div>
                      <div><span className="font-medium">Berat:</span> 25 kg s/d 32 kg</div>
                      <div className="text-lg font-medium text-primary">
                        <span className="font-medium text-neutral-600 text-sm">Kapasitas Hisap:</span> 267,87 M³ / menit
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/produk/c-105"
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Lihat Detail
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/produk">
              <Button size="lg" className="px-12 py-4 text-lg">
                Lihat Semua Produk →
              </Button>
            </Link>
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
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/666e21d1-98ea-4bda-b08a-e2ec68ad33e4.png" 
                  alt="Pabrik - Factory building with industrial smokestacks"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Pabrik</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/59106a77-c789-49dd-a5b3-e5c60c388fa9.png" 
                  alt="Gudang - Warehouse with storage boxes and forklift"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Gudang</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/894d403d-0b0c-44f2-8518-675a10fa70bc.png" 
                  alt="Gedung Olahraga - Sports facility with gym equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Gedung Olahraga</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/3a3cfdbf-2341-4914-b66e-fcae508f5e51.png" 
                  alt="Rumah Tinggal - Residential house with garden"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Rumah Tinggal</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/0ff74490-381f-42a7-a241-0f46d3671935.png" 
                  alt="Restoran - Restaurant with dining area and outdoor seating"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Restoran</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/da253461-981f-45d3-af72-73c946426d3e.png" 
                  alt="Perkantoran - Multi-story office building"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Perkantoran</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/1fe6f0c7-bf1e-428e-bec4-e1f9b26e234a.png" 
                  alt="Tempat Ibadah - Mosque with golden domes and minarets"
                  className="w-full h-full object-cover"
                />
              </div>
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
          <div className="mb-8">
            <div className="inline-block bg-white/10 rounded-full px-8 py-4 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Total Proyek: <span className="text-yellow-300">3228</span>
              </p>
            </div>
          </div>
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