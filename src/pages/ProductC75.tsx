import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wind, Wrench, Thermometer, Shield } from "lucide-react";

export default function ProductC75() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation isDark={false} />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-6">
                C VENT TYPE <span className="font-bold text-primary">C-75 (30")</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Turbine ventilator berkapasitas sedang-tinggi dengan performa optimal untuk bangunan komersial dan industri menengah. Dilengkapi bearing FBJ Made in Japan tiga pieces untuk durabilitas maksimal.
              </p>
              
              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-primary">30"</div>
                  <div className="text-sm text-neutral-600">Diameter</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-primary">157,95 M³</div>
                  <div className="text-sm text-neutral-600">Kapasitas/menit</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Minta Penawaran
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 shadow-xl">
                <img 
                  src="/lovable-uploads/06dff626-e6b9-44fc-8c2d-90a3b633e315.png"
                  alt="C Vent Type C-75 (30 inch) - Turbine Ventilator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <Wind size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
              Spesifikasi Teknis
            </h2>
            <p className="text-lg text-neutral-600">
              Detail lengkap spesifikasi C Vent Type C-75
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications Table */}
            <Card className="p-8 shadow-lg border-0">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Spesifikasi Utama</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium text-neutral-700">Bahan</span>
                    <span className="text-neutral-900">Alluminium dan Stainless Steel</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium text-neutral-700">Bearing</span>
                    <span className="text-neutral-900">FBJ Made in Japan Full Steinless Steel = 3pc</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium text-neutral-700">Diameter</span>
                    <span className="text-neutral-900">75 CM = 30"</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium text-neutral-700">Dimensi</span>
                    <span className="text-neutral-900">120 x 100 x 100</span>
                  </div>
                  <div className="flex justify-between border-b pb-3">
                    <span className="font-medium text-neutral-700">Berat</span>
                    <span className="text-neutral-900">14,5 kg s/d 21,5 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-neutral-700">Kapasitas Hisap</span>
                    <span className="text-primary font-semibold text-lg">157,95 M³ / menit</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Keunggulan Produk</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Bearing FBJ Triple Protection</h4>
                      <p className="text-neutral-600 text-sm">Bearing berkualitas tinggi dari Jepang dengan sistem 3 pieces untuk perlindungan maksimal dan umur pakai yang lebih panjang.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wind className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Kapasitas Optimal</h4>
                      <p className="text-neutral-600 text-sm">Kapasitas hisap 157,95 M³/menit ideal untuk bangunan komersial dan industri menengah hingga 800 m².</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Material Premium</h4>
                      <p className="text-neutral-600 text-sm">Konstruksi aluminium dan stainless steel tahan korosi dan cuaca ekstrem tropis Indonesia.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Efisiensi Energi</h4>
                      <p className="text-neutral-600 text-sm">Beroperasi tanpa listrik, mengurangi biaya operasional dan ramah lingkungan dengan performa ventilasi yang optimal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Diagram */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
              Diagram Teknis
            </h2>
            <p className="text-lg text-neutral-600">
              Detail konstruksi dan komponen C Vent Type C-75
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-8">
                <img 
                  src="/lovable-uploads/7be38d9c-019e-47f0-b0e9-a3b49cf2e566.png"
                  alt="Diagram Teknis C Vent Type C-75 - Konstruksi Internal dan Komponen"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            <div className="mt-8 bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Komponen Utama:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
                <div>• Topi 0,9 mm</div>
                <div>• Fan Conventional 40 pcs 0,7 mm</div>
                <div>• Shaft Construction ST 20 mm</div>
                <div>• Double Fan 6 pcs 0,5 mm</div>
                <div>• Bearing FBJ Made in Japan Full Stainless Steel</div>
                <div>• Flexible Ducting 0,7 mm</div>
                <div>• Wings Plate 0,7 mm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
              Aplikasi Yang Cocok
            </h2>
            <p className="text-lg text-neutral-600">
              C Vent Type C-75 ideal untuk berbagai jenis bangunan menengah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🏭</div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Pabrik Menengah</h3>
                <p className="text-neutral-600 text-sm">Workshop, area produksi, dan ruang mesin dengan area 500-800 m²</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🏢</div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Gedung Komersial</h3>
                <p className="text-neutral-600 text-sm">Mall, showroom, dan pusat perbelanjaan dengan ventilasi natural</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🍽️</div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Food Court</h3>
                <p className="text-neutral-600 text-sm">Area food court, dapur komersial, dan restoran besar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Dapatkan Penawaran Terbaik
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/80 font-light">
            Konsultasi gratis dengan tim ahli kami untuk solusi ventilasi yang tepat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-4 rounded-full border-white text-white hover:bg-white hover:text-primary"
            >
              Minta Penawaran Sekarang
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-4 rounded-full border-white text-white hover:bg-white hover:text-primary"
            >
              WhatsApp Konsultasi
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}